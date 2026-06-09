import type {
  AcaoRapidaDashboard,
  DashboardResumo,
  SaudeGeral,
} from '../types/agrosat'
import { listarAlertas, listarAlertasAtivos } from './alertaService'
import { listarCapturasRelatorio, listarRelatoriosTalhao } from './historicoNdviService'
import { listarPropriedadesMonitoradas } from './propriedadeService'
import { listarTalhoesMonitorados } from './talhaoService'

export async function carregarDashboard() {
  const [propriedades, talhoes, alertas, alertasAtivos, capturas, relatorios] =
    await Promise.all([
      listarPropriedadesMonitoradas(),
      listarTalhoesMonitorados(),
      listarAlertas(),
      listarAlertasAtivos(),
      listarCapturasRelatorio(),
      listarRelatoriosTalhao('30d'),
    ])

  const ndviMedioGeral =
    talhoes.reduce((total, talhao) => total + talhao.ndviAtual, 0) / talhoes.length

  const saudeGeral: SaudeGeral = {
    saudaveis: talhoes.filter((talhao) => talhao.status === 'saudavel').length,
    atencao: talhoes.filter((talhao) => talhao.status === 'atencao').length,
    criticos: talhoes.filter((talhao) => talhao.status === 'critico').length,
  }

  const resumo: DashboardResumo = {
    propriedadesMonitoradas: propriedades.length,
    talhoesAtivos: talhoes.length,
    ndviMedioGeral,
    alertasAtivos: alertasAtivos.length,
    capturasAnalisadas: capturas.length,
    talhoesCriticos: saudeGeral.criticos,
  }

  const melhorTalhao = relatorios.reduce((melhor, relatorio) =>
    relatorio.ndviMedio > melhor.ndviMedio ? relatorio : melhor,
  )

  const talhaoAtencao =
    relatorios.find((relatorio) => relatorio.status === 'atencao') ?? relatorios[0]

  const talhaoCritico =
    relatorios.find((relatorio) => relatorio.status === 'critico') ?? relatorios[0]

  const acoesRapidas: AcaoRapidaDashboard[] = [
    {
      titulo: 'Monitoramento',
      descricao: 'Abrir visão de propriedades, talhões e leituras NDVI.',
      rota: '/monitoramento',
      destaque: 'green',
    },
    {
      titulo: 'Alertas',
      descricao: 'Ver riscos ativos, críticos e resolvidos.',
      rota: '/alertas',
      destaque: 'alert',
    },
    {
      titulo: 'Relatórios',
      descricao: 'Analisar histórico NDVI e capturas orbitais.',
      rota: '/relatorios',
      destaque: 'blue',
    },
    {
      titulo: 'Integrantes',
      descricao: 'Conhecer a equipe responsável pelo AgroSat.',
      rota: '/integrantes',
      destaque: 'critical',
    },
  ]

  return {
    resumo,
    saudeGeral,
    alertasRecentes: alertas.slice(0, 3),
    talhoesDestaque: [melhorTalhao, talhaoAtencao, talhaoCritico],
    evolucaoNdvi: relatorios.slice(0, 3),
    capturasRecentes: capturas.slice(0, 4),
    acoesRapidas,
  }
}
