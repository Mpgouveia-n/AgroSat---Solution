import type { CapturaSatelite } from '../types/agrosat'

const capturasMock: CapturaSatelite[] = [
  { id: 1, dataImagem: '2025-01-10', sateliteOrigem: 'Sentinel-2' },
  { id: 2, dataImagem: '2025-01-18', sateliteOrigem: 'Landsat 9' },
  { id: 3, dataImagem: '2025-01-26', sateliteOrigem: 'Sentinel-2' },
  { id: 4, dataImagem: '2025-02-03', sateliteOrigem: 'CBERS-4A' },
  { id: 5, dataImagem: '2025-02-11', sateliteOrigem: 'Sentinel-2' },
  { id: 6, dataImagem: '2025-02-19', sateliteOrigem: 'Landsat 8' },
  { id: 7, dataImagem: '2025-02-27', sateliteOrigem: 'Sentinel-2' },
  { id: 8, dataImagem: '2025-03-07', sateliteOrigem: 'Landsat 9' },
]

export async function listarCapturas() {
  return capturasMock
}
