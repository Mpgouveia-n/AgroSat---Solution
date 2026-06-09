import FeatureCard from '../components/FeatureCard'
import PageHeader from '../components/PageHeader'

const fields = [
  {
    title: 'Talhão Norte',
    description: 'NDVI estável, com pequenas variações em bordas próximas à área irrigada.',
    accent: 'green' as const,
  },
  {
    title: 'Talhão Leste',
    description: 'Sinal de atenção para possível estresse hídrico em faixa central.',
    accent: 'alert' as const,
  },
  {
    title: 'Talhão Sul',
    description: 'Área simulada com queda de vigor e prioridade para inspeção.',
    accent: 'critical' as const,
  },
]

function Monitoramento() {
  return (
    <>
      <PageHeader
        title="Monitoramento das plantações"
        subtitle="Acompanhamento visual inicial dos talhões com leituras mockadas de vigor vegetal e risco."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {fields.map((field) => (
            <FeatureCard key={field.title} {...field} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Monitoramento
