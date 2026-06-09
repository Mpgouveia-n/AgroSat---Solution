import type {
  CapturaRelatorio,
  HistoricoNdvi,
  PeriodoRelatorio,
  RelatorioTalhao,
  StatusMonitoramento,
  TalhaoZona,
} from '../types/agrosat'
import { get, withApiFallback } from './apiClient'
import { listarCapturas } from './capturaService'

const relatoriosMock: RelatorioTalhao[] = [
  {
    id: 1,
    talhao: 'Talhão Norte',
    propriedade: 'Fazenda Boa Esperança',
    ndviMedio: 0.77,
    menorNdvi: 0.7,
    maiorNdvi: 0.82,
    status: 'saudavel',
    ultimaCaptura: '2025-03-07',
    sateliteOrigem: 'Landsat 9',
    recomendacao:
      'Manter rotina de monitoramento e comparar a próxima captura para confirmar estabilidade.',
    historico: [0.7, 0.74, 0.79, 0.82],
  },
  {
    id: 2,
    talhao: 'Talhão Central',
    propriedade: 'Fazenda Boa Esperança',
    ndviMedio: 0.66,
    menorNdvi: 0.62,
    maiorNdvi: 0.69,
    status: 'saudavel',
    ultimaCaptura: '2025-03-07',
    sateliteOrigem: 'Landsat 9',
    recomendacao: 'Talhão estável. Recomenda-se manter o ciclo de acompanhamento semanal.',
    historico: [0.62, 0.65, 0.67, 0.69],
  },
  {
    id: 3,
    talhao: 'Talhão Sul',
    propriedade: 'Fazenda Boa Esperança',
    ndviMedio: 0.47,
    menorNdvi: 0.41,
    maiorNdvi: 0.55,
    status: 'atencao',
    ultimaCaptura: '2025-02-27',
    sateliteOrigem: 'Sentinel-2',
    recomendacao:
      'Investigar tendência de queda e verificar irrigação, compactação do solo e sinais de pragas.',
    historico: [0.55, 0.49, 0.43, 0.41],
  },
  {
    id: 4,
    talhao: 'Talhão Leste',
    propriedade: 'Sítio Horizonte Verde',
    ndviMedio: 0.56,
    menorNdvi: 0.52,
    maiorNdvi: 0.6,
    status: 'atencao',
    ultimaCaptura: '2025-02-27',
    sateliteOrigem: 'Sentinel-2',
    recomendacao: 'Monitorar próxima imagem e conferir disponibilidade hídrica na faixa central.',
    historico: [0.6, 0.58, 0.55, 0.52],
  },
  {
    id: 5,
    talhao: 'Área Experimental',
    propriedade: 'Chácara Vale Azul',
    ndviMedio: 0.26,
    menorNdvi: 0.21,
    maiorNdvi: 0.31,
    status: 'critico',
    ultimaCaptura: '2025-02-03',
    sateliteOrigem: 'CBERS-4A',
    recomendacao:
      'Priorizar inspeção em campo. NDVI abaixo de 0.30 indica risco crítico de anomalia.',
    historico: [0.31, 0.29, 0.25, 0.21],
  },
  {
    id: 6,
    talhao: 'Bloco Safra A',
    propriedade: 'Fazenda Nova Safra',
    ndviMedio: 0.64,
    menorNdvi: 0.6,
    maiorNdvi: 0.67,
    status: 'saudavel',
    ultimaCaptura: '2025-01-26',
    sateliteOrigem: 'Sentinel-2',
    recomendacao: 'Indicadores positivos. Continuar acompanhamento de produtividade estimada.',
    historico: [0.6, 0.63, 0.66, 0.67],
  },
]

const capturaDetalhes = [
  { resolucao: '10 m', tipoImagem: 'Multiespectral', talhoesAnalisados: 4 },
  { resolucao: '30 m', tipoImagem: 'Multiespectral', talhoesAnalisados: 3 },
  { resolucao: '10 m', tipoImagem: 'NDVI processado', talhoesAnalisados: 6 },
  { resolucao: '20 m', tipoImagem: 'Composição orbital', talhoesAnalisados: 2 },
  { resolucao: '10 m', tipoImagem: 'Multiespectral', talhoesAnalisados: 5 },
  { resolucao: '30 m', tipoImagem: 'Multiespectral', talhoesAnalisados: 3 },
  { resolucao: '10 m', tipoImagem: 'NDVI processado', talhoesAnalisados: 6 },
  { resolucao: '30 m', tipoImagem: 'Multiespectral', talhoesAnalisados: 4 },
]

function classificarStatus(ndvi: number): StatusMonitoramento {
  if (ndvi < 0.3) {
    return 'critico'
  }

  if (ndvi < 0.6) {
    return 'atencao'
  }

  return 'saudavel'
}

function criarRecomendacao(status: StatusMonitoramento) {
  if (status === 'critico') {
    return 'Priorizar inspeção em campo. NDVI abaixo de 0.30 indica risco crítico de anomalia.'
  }

  if (status === 'atencao') {
    return 'Monitorar tendência de queda e verificar irrigação, solo e sinais de pragas.'
  }

  return 'Indicadores positivos. Continuar acompanhamento de produtividade estimada.'
}

export async function listarRelatoriosTalhao(periodo: PeriodoRelatorio) {
  void periodo

  return withApiFallback(
    async () => {
      const [talhoes, historico, capturas] = await Promise.all([
        get<TalhaoZona[]>('/talhoes'),
        get<HistoricoNdvi[]>('/historico-ndvi'),
        listarCapturas(),
      ])

      return talhoes.map((talhao) => {
        const historicoTalhao = historico
          .filter((item) => item.idTalhao === talhao.id)
          .sort((a, b) => a.dataAnalise.localeCompare(b.dataAnalise))

        const valores = historicoTalhao.map((item) => item.valorNdvi)
        const ndviMedio =
          valores.length > 0 ? valores.reduce((total, valor) => total + valor, 0) / valores.length : 0
        const menorNdvi = valores.length > 0 ? Math.min(...valores) : 0
        const maiorNdvi = valores.length > 0 ? Math.max(...valores) : 0
        const status = classificarStatus(ndviMedio)
        const ultimoHistorico = historicoTalhao.at(-1)
        const ultimaCaptura =
          capturas.find((captura) => captura.id === ultimoHistorico?.idCaptura) ?? capturas[0]

        return {
          id: talhao.id,
          talhao: talhao.identificacaoBloco,
          propriedade: `Propriedade #${talhao.idPropriedade}`,
          ndviMedio,
          menorNdvi,
          maiorNdvi,
          status,
          ultimaCaptura: ultimoHistorico?.dataAnalise ?? ultimaCaptura?.dataImagem ?? '-',
          sateliteOrigem: ultimaCaptura?.sateliteOrigem ?? 'Satélite não informado',
          recomendacao: criarRecomendacao(status),
          historico: valores.slice(-4),
        }
      })
    },
    () => relatoriosMock,
    'Falha ao montar relatórios por talhão',
  )
}

export async function listarHistoricoNdvi() {
  return withApiFallback(
    () => get<HistoricoNdvi[]>('/historico-ndvi'),
    () =>
      relatoriosMock.flatMap((relatorio) =>
        relatorio.historico.map((valorNdvi, index) => ({
          id: relatorio.id * 10 + index,
          valorNdvi,
          dataAnalise: `2025-03-0${index + 1}`,
          idTalhao: relatorio.id,
          idCaptura: index + 1,
        })),
      ),
    'Falha ao listar histórico NDVI',
  )
}

export async function listarCapturasRelatorio(): Promise<CapturaRelatorio[]> {
  return withApiFallback(
    async () => {
      const capturas = await listarCapturas()

      return capturas.map((captura, index) => ({
        ...captura,
        ...capturaDetalhes[index % capturaDetalhes.length],
      }))
    },
    () =>
      relatoriosMock.map((relatorio, index) => ({
        id: index + 1,
        dataImagem: relatorio.ultimaCaptura,
        sateliteOrigem: relatorio.sateliteOrigem,
        ...capturaDetalhes[index % capturaDetalhes.length],
      })),
    'Falha ao listar capturas para relatórios',
  )
}
