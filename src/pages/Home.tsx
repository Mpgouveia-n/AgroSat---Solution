import { Link } from 'react-router-dom'
import FeatureCard from '../components/FeatureCard'
import FlowStep from '../components/FlowStep'
import SectionTitle from '../components/SectionTitle'
import StatCard from '../components/StatCard'

const problemCards = [
  {
    title: 'Detecção tardia de pragas',
    description: 'Quando o dano aparece visualmente, a lavoura já pode ter perdido vigor e produtividade.',
    accent: 'critical' as const,
  },
  {
    title: 'Estresse hídrico',
    description: 'A falta de água reduz o desenvolvimento das plantas antes de ser percebida em campo.',
    accent: 'alert' as const,
  },
  {
    title: 'Perda de produtividade',
    description: 'Sem dados frequentes, decisões importantes dependem de inspeções manuais espaçadas.',
    accent: 'blue' as const,
  },
  {
    title: 'Baixo acesso à tecnologia',
    description: 'Pequenos e médios produtores precisam de ferramentas simples, acessíveis e acionáveis.',
    accent: 'green' as const,
  },
]

const flowSteps = ['Satélite', 'Imagem orbital', 'NDVI', 'IA', 'Alertas', 'Produtor']

const benefits = [
  {
    title: 'Monitoramento remoto',
    description: 'Acompanhe áreas agrícolas de forma contínua, mesmo em regiões distantes.',
    accent: 'blue' as const,
  },
  {
    title: 'Baixo custo',
    description: 'Use dados espaciais e análises digitais para reduzir visitas e desperdícios.',
    accent: 'green' as const,
  },
  {
    title: 'Decisões baseadas em dados',
    description: 'Transforme índices espectrais em recomendações claras para manejo agrícola.',
    accent: 'alert' as const,
  },
  {
    title: 'Agricultura sustentável',
    description: 'Aplique recursos com mais precisão e reduza impactos ambientais na produção.',
    accent: 'green' as const,
  },
]

function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_34%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
              Tecnologia espacial para o campo
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-agrosat-text sm:text-5xl lg:text-6xl">
              Monitoramento Inteligente de Plantações via Satélite
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Transformando dados espaciais em decisões agrícolas através de NDVI e Inteligência
              Artificial.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/sobre"
                className="rounded-md bg-agrosat-green px-5 py-3 text-center text-sm font-bold text-agrosat-space transition hover:bg-green-300"
              >
                Conhecer Solução
              </Link>
              <Link
                to="/dashboard"
                className="rounded-md border border-agrosat-blue/60 px-5 py-3 text-center text-sm font-bold text-agrosat-text transition hover:bg-agrosat-blue/15"
              >
                Acessar Dashboard
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-agrosat-card/80 p-4 shadow-2xl shadow-black/30 sm:p-6">
            <div className="rounded-lg border border-agrosat-blue/30 bg-slate-950/70 p-4">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Orbital View</p>
                  <p className="mt-1 text-lg font-bold text-agrosat-text">Talhão Norte</p>
                </div>
                <span className="rounded-md bg-agrosat-green/15 px-3 py-1 text-xs font-bold text-agrosat-green">
                  NDVI 0.74
                </span>
              </div>

              <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-5">
                {Array.from({ length: 20 }).map((_, index) => {
                  const level = index % 7
                  const color =
                    level === 0
                      ? 'bg-agrosat-critical'
                      : level <= 2
                        ? 'bg-agrosat-alert'
                        : level <= 4
                          ? 'bg-agrosat-green'
                          : 'bg-agrosat-blue'

                  return <div key={index} className={`aspect-square rounded ${color} opacity-80`} />
                })}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <StatCard value="92%" label="área saudável" tone="green" />
                <StatCard value="3" label="alertas ativos" tone="alert" />
                <StatCard value="12h" label="nova leitura" tone="blue" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Problema"
            title="Desafios que reduzem a produtividade no campo"
            subtitle="O AgroSat nasce para antecipar sinais de risco que muitas vezes só aparecem quando o prejuízo já começou."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Solução"
            title="Da imagem orbital ao alerta para o produtor"
            subtitle="Um fluxo simples para converter dados de satélite em leitura agrícola acessível."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {flowSteps.map((step, index) => (
              <FlowStep key={step} step={`0${index + 1}`} label={step} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Benefícios"
            title="Mais precisão para cuidar da lavoura"
            subtitle="A proposta combina tecnologia espacial, análise espectral e uma experiência SaaS clara para o produtor."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <FeatureCard key={benefit.title} {...benefit} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
