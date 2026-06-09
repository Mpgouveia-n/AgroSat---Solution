# API Integration Map - AgroSat

Documento de apoio para a futura integração do front-end React com a API Java Quarkus do AgroSat.

Fonte analisada: `AgroSat-main.zip`  
API: Quarkus + JDBC Oracle  
Banco: Oracle, scripts em `src/main/resources/db/ddl.sql` e `seed.sql`

## Observações Gerais

- A API expõe JSON em todos os Resources com `@Produces(MediaType.APPLICATION_JSON)` e consome JSON com `@Consumes(MediaType.APPLICATION_JSON)`.
- Porta padrão local: `8080`, configurada por `quarkus.http.port=${PORT:8080}`.
- CORS está habilitado para consumo pelo front-end.
- Swagger/OpenAPI indicado em `/q/swagger-ui`.
- Datas `LocalDate` devem trafegar como string ISO, por exemplo `2025-01-10`.
- Datas `LocalDateTime` devem trafegar como string ISO, por exemplo `2025-01-10T14:30:00`.
- Não há DTOs específicos para entrada/saída das entidades; os Resources recebem e retornam as próprias classes de entidade.

## Endpoints Encontrados

### Info

| Método | URL | Descrição |
|---|---|---|
| GET | `/` | Retorna informações básicas da API, versão, status, Swagger e healthcheck. |

Resposta esperada:

```json
{
  "aplicacao": "AgroSat API",
  "versao": "1.0.0",
  "status": "online",
  "documentacao": "/q/swagger-ui",
  "health": "/q/health"
}
```

### Usuários

| Método | URL | Descrição |
|---|---|---|
| GET | `/usuarios` | Lista todos os usuários. |
| GET | `/usuarios/{id}` | Busca um usuário por ID. |
| GET | `/usuarios/{id}/propriedades` | Lista propriedades agrícolas vinculadas ao usuário. |
| POST | `/usuarios` | Cria um usuário. |
| PUT | `/usuarios/{id}` | Atualiza um usuário. |
| DELETE | `/usuarios/{id}` | Remove um usuário. |

Payload de criação/atualização:

```json
{
  "nome": "João da Silva",
  "email": "joao@agrosat.com",
  "senha": "senha123",
  "telefone": "11999990000"
}
```

Resposta:

```json
{
  "id": 1,
  "nome": "João da Silva",
  "email": "joao@agrosat.com",
  "senha": "senha123",
  "telefone": "11999990000"
}
```

Regras relevantes:

- `nome` é obrigatório.
- `email` é obrigatório, deve ter formato válido e ser único.
- `senha` deve ter no mínimo 6 caracteres, contendo letra e número.

### Propriedades Agrícolas

| Método | URL | Descrição |
|---|---|---|
| GET | `/propriedades` | Lista todas as propriedades. |
| GET | `/propriedades/{id}` | Busca uma propriedade por ID. |
| GET | `/propriedades/{id}/talhoes` | Lista talhões vinculados à propriedade. |
| POST | `/propriedades` | Cria uma propriedade agrícola. |
| PUT | `/propriedades/{id}` | Atualiza uma propriedade agrícola. |
| DELETE | `/propriedades/{id}` | Remove uma propriedade agrícola. |

Payload de criação/atualização:

```json
{
  "nomeFazenda": "Fazenda Boa Esperança",
  "localizacao": "-15.7801,-47.9292",
  "tamanhoHectares": 1200.5,
  "idUsuario": 1
}
```

Resposta:

```json
{
  "id": 1,
  "nomeFazenda": "Fazenda Boa Esperança",
  "localizacao": "-15.7801,-47.9292",
  "tamanhoHectares": 1200.5,
  "idUsuario": 1
}
```

Regras relevantes:

- `nomeFazenda` é obrigatório.
- `tamanhoHectares`, quando informado, deve ser maior que zero.
- `idUsuario` é obrigatório e deve apontar para um usuário existente.

### Talhões/Zonas

| Método | URL | Descrição |
|---|---|---|
| GET | `/talhoes` | Lista todos os talhões. |
| GET | `/talhoes/{id}` | Busca um talhão por ID. |
| GET | `/talhoes/{id}/historico-ndvi` | Lista o histórico de NDVI de um talhão. |
| POST | `/talhoes` | Cria um talhão/zona. |
| PUT | `/talhoes/{id}` | Atualiza um talhão/zona. |
| DELETE | `/talhoes/{id}` | Remove um talhão/zona. |

Payload de criação/atualização:

```json
{
  "identificacaoBloco": "Bloco A1",
  "tipoCultura": "Soja",
  "idPropriedade": 1
}
```

Resposta:

```json
{
  "id": 1,
  "identificacaoBloco": "Bloco A1",
  "tipoCultura": "Soja",
  "idPropriedade": 1
}
```

Regras relevantes:

- `identificacaoBloco` é obrigatório.
- `tipoCultura` é obrigatório.
- `idPropriedade` é obrigatório e deve apontar para uma propriedade existente.

### Capturas de Satélite

| Método | URL | Descrição |
|---|---|---|
| GET | `/capturas` | Lista todas as capturas de satélite. |
| GET | `/capturas/{id}` | Busca uma captura por ID. |
| POST | `/capturas` | Registra uma captura de satélite. |
| PUT | `/capturas/{id}` | Atualiza uma captura de satélite. |
| DELETE | `/capturas/{id}` | Remove uma captura de satélite. |

Payload de criação/atualização:

```json
{
  "dataImagem": "2025-01-10",
  "sateliteOrigem": "Sentinel-2"
}
```

Resposta:

```json
{
  "id": 1,
  "dataImagem": "2025-01-10",
  "sateliteOrigem": "Sentinel-2"
}
```

Regras relevantes:

- `sateliteOrigem` é obrigatório.
- `dataImagem`, quando não enviada no POST, é preenchida com a data atual.
- `dataImagem` não pode ser futura.

### Histórico NDVI

| Método | URL | Descrição |
|---|---|---|
| GET | `/historico-ndvi` | Lista todos os registros de NDVI. |
| GET | `/historico-ndvi/{id}` | Busca um registro de NDVI por ID. |
| POST | `/historico-ndvi` | Registra um valor de NDVI. Pode gerar alerta automático quando o valor é crítico. |
| DELETE | `/historico-ndvi/{id}` | Remove um registro de NDVI. |

Payload de criação:

```json
{
  "valorNdvi": 0.72,
  "dataAnalise": "2025-01-10",
  "idTalhao": 1,
  "idCaptura": 1
}
```

Resposta:

```json
{
  "id": 1,
  "valorNdvi": 0.72,
  "dataAnalise": "2025-01-10",
  "idTalhao": 1,
  "idCaptura": 1
}
```

Regras relevantes:

- `valorNdvi` é obrigatório.
- `valorNdvi` deve estar entre `-1.0` e `1.0`.
- `idTalhao` é obrigatório e deve apontar para um talhão existente.
- `idCaptura` é opcional, mas quando informado deve apontar para uma captura existente.
- `dataAnalise`, quando não enviada no POST, é preenchida com a data atual.
- NDVI menor que `0.3` gera alerta automático com a descrição: `Potencial anomalia detectada: Baixo indice de vegetacao`.

### Alertas

| Método | URL | Descrição |
|---|---|---|
| GET | `/alertas` | Lista todos os alertas. |
| GET | `/alertas/ativos` | Lista apenas alertas ativos. |
| GET | `/alertas/{id}` | Busca um alerta por ID. |
| POST | `/alertas` | Cria um alerta. |
| PATCH | `/alertas/{id}/resolver` | Marca um alerta como resolvido. |
| PUT | `/alertas/{id}` | Atualiza um alerta. |
| DELETE | `/alertas/{id}` | Remove um alerta. |

Payload de criação/atualização:

```json
{
  "descricao": "Potencial anomalia detectada: Baixo indice de vegetacao",
  "status": "ATIVO",
  "data": "2025-02-15T10:30:00",
  "idTalhao": 1
}
```

Resposta:

```json
{
  "id": 1,
  "descricao": "Potencial anomalia detectada: Baixo indice de vegetacao",
  "status": "ATIVO",
  "data": "2025-02-15T10:30:00",
  "idTalhao": 1
}
```

Regras relevantes:

- `descricao` é obrigatória.
- `idTalhao` é obrigatório e deve apontar para um talhão existente.
- `status`, quando não enviado, recebe `ATIVO`.
- `data`, quando não enviada, recebe a data/hora atual.
- Status aceitos pelo banco: `ATIVO` e `RESOLVIDO`.

## Entidades Principais

### Usuario

Campos:

```ts
{
  id: number
  nome: string
  email: string
  senha: string
  telefone?: string | null
}
```

Tabela Oracle: `USUARIO`

### PropriedadeAgricola

Campos:

```ts
{
  id: number
  nomeFazenda: string
  localizacao?: string | null
  tamanhoHectares?: number | null
  idUsuario: number
}
```

Tabela Oracle: `PROPRIEDADE_AGRICOLA`

### TalhaoZona

Campos:

```ts
{
  id: number
  identificacaoBloco: string
  tipoCultura: string
  idPropriedade: number
}
```

Tabela Oracle: `TALHAO_ZONA`

### CapturaSatelite

Campos:

```ts
{
  id: number
  dataImagem: string
  sateliteOrigem: string
}
```

Tabela Oracle: `CAPTURA_SATELITE`

### HistoricoNdvi

Campos:

```ts
{
  id: number
  valorNdvi: number
  dataAnalise: string
  idTalhao: number
  idCaptura?: number | null
}
```

Tabela Oracle: `HISTORICO_NDVI`

### AlertaGerado

Campos:

```ts
{
  id: number
  descricao: string
  status: 'ATIVO' | 'RESOLVIDO'
  data: string
  idTalhao: number
}
```

Tabela Oracle: `ALERTA_GERADO`

## Relacionamentos

```text
Usuario
└── PropriedadeAgricola
    └── TalhaoZona
        ├── HistoricoNdvi
        │   └── CapturaSatelite
        └── AlertaGerado
```

Detalhamento:

- `PROPRIEDADE_AGRICOLA.ID_USUARIO` referencia `USUARIO.ID`.
- `TALHAO_ZONA.ID_PROPRIEDADE` referencia `PROPRIEDADE_AGRICOLA.ID`.
- `HISTORICO_NDVI.ID_TALHAO` referencia `TALHAO_ZONA.ID`.
- `HISTORICO_NDVI.ID_CAPTURA` referencia `CAPTURA_SATELITE.ID`.
- `ALERTA_GERADO.ID_TALHAO` referencia `TALHAO_ZONA.ID`.

## Sugestão de Services no Front-End

### `apiClient`

Responsável por centralizar `baseURL`, headers JSON e tratamento de erro.

```ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080'
```

### `usuarioService`

Endpoints:

- `GET /usuarios`
- `GET /usuarios/{id}`
- `GET /usuarios/{id}/propriedades`
- `POST /usuarios`
- `PUT /usuarios/{id}`
- `DELETE /usuarios/{id}`

Uso no front:

- Cadastro/listagem de usuários.
- Busca das propriedades de um usuário.

### `propriedadeService`

Endpoints:

- `GET /propriedades`
- `GET /propriedades/{id}`
- `GET /propriedades/{id}/talhoes`
- `POST /propriedades`
- `PUT /propriedades/{id}`
- `DELETE /propriedades/{id}`

Uso no front:

- Listar fazendas/propriedades.
- Carregar talhões por propriedade.

### `talhaoService`

Endpoints:

- `GET /talhoes`
- `GET /talhoes/{id}`
- `GET /talhoes/{id}/historico-ndvi`
- `POST /talhoes`
- `PUT /talhoes/{id}`
- `DELETE /talhoes/{id}`

Uso no front:

- Cards de talhões.
- Página de monitoramento.
- Gráficos de histórico NDVI.

### `capturaService`

Endpoints:

- `GET /capturas`
- `GET /capturas/{id}`
- `POST /capturas`
- `PUT /capturas/{id}`
- `DELETE /capturas/{id}`

Uso no front:

- Histórico de capturas orbitais.
- Registro/consulta da origem da imagem.

### `historicoNdviService`

Endpoints:

- `GET /historico-ndvi`
- `GET /historico-ndvi/{id}`
- `POST /historico-ndvi`
- `DELETE /historico-ndvi/{id}`

Uso no front:

- Séries temporais NDVI.
- Registro de análises.
- Dashboard de saúde vegetal.

### `alertaService`

Endpoints:

- `GET /alertas`
- `GET /alertas/ativos`
- `GET /alertas/{id}`
- `POST /alertas`
- `PATCH /alertas/{id}/resolver`
- `PUT /alertas/{id}`
- `DELETE /alertas/{id}`

Uso no front:

- Central de alertas.
- Indicadores de alertas ativos.
- Ação de resolver alerta.

## Sugestão de Interfaces TypeScript

```ts
export interface Usuario {
  id: number
  nome: string
  email: string
  senha: string
  telefone?: string | null
}

export type UsuarioPayload = Omit<Usuario, 'id'>

export interface PropriedadeAgricola {
  id: number
  nomeFazenda: string
  localizacao?: string | null
  tamanhoHectares?: number | null
  idUsuario: number
}

export type PropriedadePayload = Omit<PropriedadeAgricola, 'id'>

export interface TalhaoZona {
  id: number
  identificacaoBloco: string
  tipoCultura: string
  idPropriedade: number
}

export type TalhaoPayload = Omit<TalhaoZona, 'id'>

export interface CapturaSatelite {
  id: number
  dataImagem: string
  sateliteOrigem: string
}

export type CapturaPayload = Omit<CapturaSatelite, 'id'>

export interface HistoricoNdvi {
  id: number
  valorNdvi: number
  dataAnalise: string
  idTalhao: number
  idCaptura?: number | null
}

export type HistoricoNdviPayload = Omit<HistoricoNdvi, 'id'>

export type StatusAlerta = 'ATIVO' | 'RESOLVIDO'

export interface AlertaGerado {
  id: number
  descricao: string
  status: StatusAlerta
  data: string
  idTalhao: number
}

export type AlertaPayload = Omit<AlertaGerado, 'id'>

export interface ApiError {
  status: number
  erro: string
  mensagem: string
  timestamp: string
}
```

## Telas do Front-End e Consumo Provável

### Dashboard

- `GET /talhoes`
- `GET /alertas/ativos`
- `GET /historico-ndvi`
- `GET /capturas`

### Monitoramento

- `GET /propriedades`
- `GET /propriedades/{id}/talhoes`
- `GET /talhoes/{id}/historico-ndvi`

### Alertas

- `GET /alertas`
- `GET /alertas/ativos`
- `PATCH /alertas/{id}/resolver`

### Relatórios

- `GET /talhoes`
- `GET /historico-ndvi`
- `GET /capturas`
- `GET /alertas`

## Pontos de Atenção para Integração

- A API retorna entidades diretas, incluindo `senha` em `Usuario`. Para front-end público, evitar exibir ou manter senha em estado global.
- Não foi identificado endpoint de autenticação/login no projeto analisado.
- Não foi identificado endpoint específico de IA/ML; a integração atual é focada em dados agrícolas, NDVI, capturas e alertas.
- A criação de histórico NDVI pode gerar alerta automaticamente quando `valorNdvi < 0.3`.
- O front deve tratar respostas de erro no formato `ApiError`.
- Confirmar URL final de produção antes de configurar `VITE_API_BASE_URL`.
