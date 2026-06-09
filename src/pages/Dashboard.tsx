import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptureCard from '../components/CaptureCard'
import CompactAlertCard from '../components/CompactAlertCard'
import DashboardHighlightCard from '../components/DashboardHighlightCard'
import HealthOverview from '../components/HealthOverview'
import NdviTimeline from '../components/NdviTimeline'
import QuickActionCard from '../components/QuickActionCard'
import SectionTitle from '../components/SectionTitle'
import SummaryCard from '../components/SummaryCard'
import { carregarDashboard } from '../services/dashboardService'
import type {
  AcaoRapidaDashboard,
  AlertaGerado,
  CapturaRelatorio,
  DashboardResumo,
  RelatorioTalhao,
  SaudeGeral,
} from '../types/agrosat'

type DashboardData = {
  resumo: DashboardResumo
  saudeGeral: SaudeGeral
  alertasRecentes: AlertaGerado[]
  talhoesDestaque: RelatorioTalhao[]
  evolucaoNdvi: RelatorioTalhao[]
  capturasRecentes: CapturaRelatorio[]
  acoesRapidas: AcaoRapidaDashboard[]
}

function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Dashboard | AgroSat'

    async function carregarDados() {
      const data = await carregarDashboard()
      setDashboardData(data)
    }

    carregarDados()

    return () => {
      document.title = previousTitle
    }
  }, [])

  if (!dashboardData) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/10 bg-agrosat-card/80 p-6 text-agrosat-text">
          Carregando dashboard...
        </div>
      </section>
    )
  }

  const { resumo, saudeGeral, alertasRecentes, talhoesDestaque, evolucaoNdvi, capturasRecentes, acoesRapidas } =
    dashboardData

  const summaryCards = [
    {
      label: 'Propriedades monitoradas',
      value: String(resumo.propriedadesMonitoradas),
      description: 'Fazendas e sítios preparados para análise orbital.',
      tone: 'green' as const,
    },
    {
      label: 'Talhões ativos',
      value: String(resumo.talhoesAtivos),
      description: 'Zonas agrícolas acompanhadas por indicadores NDVI.',
      tone: 'blue' as const,
    },
    {
      label: 'NDVI médio geral',
      value: resumo.ndviMedioGeral.toFixed(2),
      description: 'Saúde média consolidada dos talhões monitorados.',
      tone: resumo.ndviMedioGeral < 0.3 ? ('critical' as const) : resumo.ndviMedioGeral < 0.6 ? ('alert' as const) : ('green' as const),
    },
    {
      label: 'Alertas ativos',
      value: String(resumo.alertasAtivos),
      description: 'Ocorrências ainda abertas na central de alertas.',
      tone: 'alert' as const,
    },
    {
      label: 'Capturas analisadas',
      value: String(resumo.capturasAnalisadas),
      description: 'Registros orbitais usados nos mocks analíticos.',
      tone: 'blue' as const,
    },
    {
      label: 'Talhões críticos',
      value: String(resumo.talhoesCriticos),
      description: 'Áreas com NDVI em faixa crítica para inspeção.',
      tone: resumo.talhoesCriticos > 0 ? ('critical' as const) : ('green' as const),
    },
  ]

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
              Painel principal
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-agrosat-text sm:text-5xl lg:text-6xl">
              Dashboard AgroSat
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Visão geral das propriedades, talhões, alertas e indicadores NDVI monitorados por
              tecnologia espacial e inteligência artificial.
            </p>
            <div className="mt-6 inline-flex rounded-md border border-agrosat-blue/40 bg-agrosat-blue/10 px-4 py-2 text-sm font-bold text-agrosat-blue">
              Sistema em modo demonstração com dados mockados preparados para API
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5 shadow-2xl shadow-black/30">
            <div className="rounded-lg border border-agrosat-green/30 bg-slate-950/70 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-agrosat-green">
                Saúde consolidada
              </p>
              <p className="mt-3 text-4xl font-bold text-agrosat-text">
                {resumo.ndviMedioGeral.toFixed(2)}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Média NDVI geral com base em talhões, capturas e histórico mockado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {summaryCards.map((card) => (
            <SummaryCard key={card.label} {...card} />
          ))}
        </div>
      </section>

      <section className="bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <HealthOverview saude={saudeGeral} />

          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
                  Últimos alertas
                </p>
                <h2 className="mt-2 text-2xl font-bold text-agrosat-text sm:text-3xl">
                  Ocorrências recentes
                </h2>
              </div>
              <Link
                to="/alertas"
                className="rounded-md border border-agrosat-alert/50 px-4 py-2 text-center text-sm font-bold text-agrosat-text transition hover:bg-agrosat-alert/10"
              >
                Ver todos os alertas
              </Link>
            </div>

            <div className="mt-6 grid gap-4">
              {alertasRecentes.map((alerta) => (
                <CompactAlertCard key={alerta.id} alerta={alerta} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Talhões em destaque"
            title="Melhor desempenho, atenção e ponto crítico"
            subtitle="Resumo rápido dos talhões que merecem comparação no acompanhamento diário."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {talhoesDestaque.map((talhao, index) => (
              <DashboardHighlightCard
                key={`${talhao.id}-${index}`}
                label={index === 0 ? 'Melhor NDVI' : index === 1 ? 'Em atenção' : 'Crítico'}
                talhao={talhao}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Evolução NDVI"
            title="Tendência resumida dos principais talhões"
            subtitle="Visualização simples em Tailwind para consolidar a saúde vegetal sem biblioteca externa."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {evolucaoNdvi.map((relatorio) => (
              <NdviTimeline
                key={relatorio.id}
                label={relatorio.talhao}
                values={relatorio.historico}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Capturas recentes"
            title="Últimas imagens orbitais analisadas"
            subtitle="Registros mockados compatíveis com a estrutura de capturas da API."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capturasRecentes.map((captura) => (
              <CaptureCard key={captura.id} captura={captura} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Ações rápidas"
            title="Acesse as áreas principais da plataforma"
            subtitle="Atalhos para continuar a análise agrícola dentro do AgroSat."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {acoesRapidas.map((acao) => (
              <QuickActionCard key={acao.rota} acao={acao} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard
