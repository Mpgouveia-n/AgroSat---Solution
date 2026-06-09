const DEFAULT_API_BASE_URL = 'https://agrosat-t056.onrender.com'

const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ?? DEFAULT_API_BASE_URL
).replace(/\/$/, '')

type HttpMethod = 'GET' | 'POST' | 'PUT'

type RequestOptions = {
  method: HttpMethod
  body?: unknown
}

export class ApiClientError extends Error {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = 'ApiClientError'
    this.status = status
  }
}

async function request<T>(path: string, options: RequestOptions): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: options.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: options.body ? JSON.stringify(options.body) : undefined,
  })

  if (!response.ok) {
    let message = `Erro ao consumir ${path}.`

    try {
      const errorBody = await response.json()
      message = errorBody.mensagem ?? errorBody.message ?? message
    } catch {
      message = response.statusText || message
    }

    throw new ApiClientError(message, response.status)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return response.json() as Promise<T>
}

export function get<T>(path: string) {
  return request<T>(path, { method: 'GET' })
}

export function post<T>(path: string, body: unknown) {
  return request<T>(path, { method: 'POST', body })
}

export function put<T>(path: string, body?: unknown) {
  return request<T>(path, { method: 'PUT', body })
}

export async function withApiFallback<T>(
  requestFn: () => Promise<T>,
  fallbackFn: () => T | Promise<T>,
  context: string,
) {
  try {
    return await requestFn()
  } catch (error) {
    console.warn(`[AgroSat API] ${context}. Usando dados mockados.`, error)
    return fallbackFn()
  }
}
