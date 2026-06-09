import FeatureCard from '../components/FeatureCard'
import PageHeader from '../components/PageHeader'

const reports = [
  {
    title: 'Relatório semanal',
    description: 'Resumo de NDVI, áreas de atenção e evolução dos talhões monitorados.',
    accent: 'green' as const,
  },
  {
    title: 'Histórico de alertas',
    description: 'Registro visual das ocorrências simuladas e status de acompanhamento.',
    accent: 'alert' as const,
  },
  {
    title: 'Recomendações técnicas',
    description: 'Espaço para consolidar sugestões geradas por análise de dados e IA.',
    accent: 'blue' as const,
  },
]

function Relatorios() {
  return (
    <>
      <PageHeader
        title="Relatórios"
        subtitle="Base visual para futuros relatórios agrícolas com dados históricos, alertas e recomendações."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {reports.map((report) => (
            <FeatureCard key={report.title} {...report} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Relatorios
