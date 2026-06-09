import type { HistoricoNdvi, TalhaoMonitoramento } from '../types/agrosat'
import { listarCapturas } from './capturaService'

const historicoNdviMock: HistoricoNdvi[] = [
  { id: 1, valorNdvi: 0.81, dataAnalise: '2025-03-07', idTalhao: 1, idCaptura: 8 },
  { id: 2, valorNdvi: 0.68, dataAnalise: '2025-03-07', idTalhao: 2, idCaptura: 8 },
  { id: 3, valorNdvi: 0.73, dataAnalise: '2025-03-07', idTalhao: 3, idCaptura: 7 },
  { id: 4, valorNdvi: 0.58, dataAnalise: '2025-03-07', idTalhao: 4, idCaptura: 7 },
  { id: 5, valorNdvi: 0.52, dataAnalise: '2025-03-07', idTalhao: 5, idCaptura: 6 },
  { id: 6, valorNdvi: 0.69, dataAnalise: '2025-03-07', idTalhao: 6, idCaptura: 5 },
  { id: 7, valorNdvi: 0.65, dataAnalise: '2025-03-07', idTalhao: 7, idCaptura: 5 },
  { id: 8, valorNdvi: 0.27, dataAnalise: '2025-03-07', idTalhao: 8, idCaptura: 4 },
  { id: 9, valorNdvi: 0.63, dataAnalise: '2025-03-07', idTalhao: 9, idCaptura: 3 },
  { id: 10, valorNdvi: 0.45, dataAnalise: '2025-03-07', idTalhao: 10, idCaptura: 2 },
]

export async function listarTalhoesMonitorados() {
  const capturas = await listarCapturas()

  const talhoes: Omit<TalhaoMonitoramento, 'ultimaCaptura'>[] = [
    {
      id: 1,
      identificacaoBloco: 'Talhão Norte',
      tipoCultura: 'Soja',
      idPropriedade: 1,
      areaMonitorada: 25,
      ndviAtual: 0.81,
      status: 'saudavel',
    },
    {
      id: 2,
      identificacaoBloco: 'Talhão Central',
      tipoCultura: 'Milho',
      idPropriedade: 1,
      areaMonitorada: 31,
      ndviAtual: 0.68,
      status: 'saudavel',
    },
    {
      id: 3,
      identificacaoBloco: 'Talhão Sul',
      tipoCultura: 'Soja',
      idPropriedade: 1,
      areaMonitorada: 29,
      ndviAtual: 0.73,
      status: 'saudavel',
    },
    {
      id: 4,
      identificacaoBloco: 'Talhão Leste',
      tipoCultura: 'Café',
      idPropriedade: 2,
      areaMonitorada: 14,
      ndviAtual: 0.58,
      status: 'atencao',
    },
    {
      id: 5,
      identificacaoBloco: 'Talhão Oeste',
      tipoCultura: 'Café',
      idPropriedade: 2,
      areaMonitorada: 12,
      ndviAtual: 0.52,
      status: 'atencao',
    },
    {
      id: 6,
      identificacaoBloco: 'Zona Alfa',
      tipoCultura: 'Algodão',
      idPropriedade: 3,
      areaMonitorada: 41,
      ndviAtual: 0.69,
      status: 'saudavel',
    },
    {
      id: 7,
      identificacaoBloco: 'Zona Beta',
      tipoCultura: 'Algodão',
      idPropriedade: 3,
      areaMonitorada: 38,
      ndviAtual: 0.65,
      status: 'saudavel',
    },
    {
      id: 8,
      identificacaoBloco: 'Área Experimental',
      tipoCultura: 'Hortaliças',
      idPropriedade: 4,
      areaMonitorada: 8,
      ndviAtual: 0.27,
      status: 'critico',
    },
    {
      id: 9,
      identificacaoBloco: 'Bloco Safra A',
      tipoCultura: 'Trigo',
      idPropriedade: 5,
      areaMonitorada: 22,
      ndviAtual: 0.63,
      status: 'saudavel',
    },
    {
      id: 10,
      identificacaoBloco: 'Bloco Raiz',
      tipoCultura: 'Mandioca',
      idPropriedade: 6,
      areaMonitorada: 16,
      ndviAtual: 0.45,
      status: 'atencao',
    },
  ]

  return talhoes.map((talhao) => {
    const historico = historicoNdviMock.find((item) => item.idTalhao === talhao.id)
    const ultimaCaptura =
      capturas.find((captura) => captura.id === historico?.idCaptura) ?? capturas[0]

    return {
      ...talhao,
      ultimaCaptura,
    }
  })
}

export async function listarHistoricoNdviPorTalhao(idTalhao: number) {
  return historicoNdviMock.filter((item) => item.idTalhao === idTalhao)
}
