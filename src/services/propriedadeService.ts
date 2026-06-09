import type { PropriedadeMonitoramento } from '../types/agrosat'

const propriedadesMock: PropriedadeMonitoramento[] = [
  {
    id: 1,
    nomeFazenda: 'Fazenda Boa Esperança',
    localizacao: '-15.7801,-47.9292',
    tamanhoHectares: 1200.5,
    idUsuario: 1,
    totalTalhoes: 3,
    ndviMedio: 0.74,
    statusGeral: 'saudavel',
  },
  {
    id: 2,
    nomeFazenda: 'Sítio Horizonte Verde',
    localizacao: '-22.9068,-47.0616',
    tamanhoHectares: 86.2,
    idUsuario: 1,
    totalTalhoes: 2,
    ndviMedio: 0.58,
    statusGeral: 'atencao',
  },
  {
    id: 3,
    nomeFazenda: 'Fazenda Santa Clara',
    localizacao: '-20.4697,-54.6201',
    tamanhoHectares: 640.8,
    idUsuario: 1,
    totalTalhoes: 2,
    ndviMedio: 0.67,
    statusGeral: 'saudavel',
  },
  {
    id: 4,
    nomeFazenda: 'Chácara Vale Azul',
    localizacao: '-23.5505,-46.6333',
    tamanhoHectares: 42.5,
    idUsuario: 1,
    totalTalhoes: 1,
    ndviMedio: 0.27,
    statusGeral: 'critico',
  },
  {
    id: 5,
    nomeFazenda: 'Fazenda Nova Safra',
    localizacao: '-16.6869,-49.2648',
    tamanhoHectares: 380.1,
    idUsuario: 1,
    totalTalhoes: 1,
    ndviMedio: 0.63,
    statusGeral: 'saudavel',
  },
  {
    id: 6,
    nomeFazenda: 'Sítio Raiz Forte',
    localizacao: '-21.1767,-47.8208',
    tamanhoHectares: 118.7,
    idUsuario: 1,
    totalTalhoes: 1,
    ndviMedio: 0.45,
    statusGeral: 'atencao',
  },
]

export async function listarPropriedadesMonitoradas() {
  return propriedadesMock
}
