export type StatusMonitoramento = 'saudavel' | 'atencao' | 'critico'
export type StatusAlerta = 'ATIVO' | 'RESOLVIDO'
export type SeveridadeAlerta = 'baixa' | 'media' | 'alta'
export type FiltroAlerta = 'todos' | 'ativos' | 'criticos' | 'resolvidos'

export interface PropriedadeAgricola {
  id: number
  nomeFazenda: string
  localizacao?: string | null
  tamanhoHectares?: number | null
  idUsuario: number
}

export interface TalhaoZona {
  id: number
  identificacaoBloco: string
  tipoCultura: string
  idPropriedade: number
}

export interface HistoricoNdvi {
  id: number
  valorNdvi: number
  dataAnalise: string
  idTalhao: number
  idCaptura?: number | null
}

export interface CapturaSatelite {
  id: number
  dataImagem: string
  sateliteOrigem: string
}

export interface PropriedadeMonitoramento extends PropriedadeAgricola {
  totalTalhoes: number
  ndviMedio: number
  statusGeral: StatusMonitoramento
}

export interface TalhaoMonitoramento extends TalhaoZona {
  areaMonitorada: number
  ndviAtual: number
  status: StatusMonitoramento
  ultimaCaptura: CapturaSatelite
}

export interface AlertaGerado {
  id: number
  tipo: string
  descricao: string
  recomendacao: string
  severidade: SeveridadeAlerta
  status: StatusAlerta
  dataGeracao: string
  idTalhao: number
  talhao: string
  propriedade: string
}
