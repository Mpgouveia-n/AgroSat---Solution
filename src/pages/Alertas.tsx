import FeatureCard from '../components/FeatureCard'
import PageHeader from '../components/PageHeader'

const alerts = [
  {
    title: 'Possível estresse hídrico',
    description: 'Talhão Leste apresenta redução de vigor em área central. Prioridade média.',
    accent: 'alert' as const,
  },
  {
    title: 'Queda crítica de NDVI',
    description: 'Talhão Sul exige validação em campo para investigar perda de produtividade.',
    accent: 'critical' as const,
  },
  {
    title: 'Atualização orbital disponível',
    description: 'Nova leitura simulada pronta para revisão no painel de monitoramento.',
    accent: 'blue' as const,
  },
]

function Alertas() {
  return (
    <>
      <PageHeader
        title="Alertas e recomendações"
        subtitle="Central inicial para riscos detectados e ações sugeridas a partir da análise mockada."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {alerts.map((alert) => (
            <FeatureCard key={alert.title} {...alert} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Alertas
