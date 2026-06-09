import FeatureCard from '../components/FeatureCard'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'

const pillars = [
  {
    title: 'Missão',
    description: 'Apoiar produtores rurais com dados acessíveis para detectar riscos na lavoura mais cedo.',
    accent: 'green' as const,
  },
  {
    title: 'Visão',
    description: 'Unir tecnologia espacial e agricultura sustentável em uma experiência simples de usar.',
    accent: 'blue' as const,
  },
  {
    title: 'Impacto',
    description: 'Reduzir perdas, desperdícios e decisões tomadas sem evidências atualizadas.',
    accent: 'alert' as const,
  },
]

function Sobre() {
  return (
    <>
      <PageHeader
        title="Sobre o AgroSat"
        subtitle="Uma plataforma acadêmica voltada ao monitoramento inteligente de plantações com foco em pequenos e médios produtores."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <FeatureCard key={pillar.title} {...pillar} />
          ))}
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard value="NDVI" label="índice usado para leitura da saúde vegetal" tone="green" />
          <StatCard value="IA" label="apoio à interpretação de padrões e alertas" tone="blue" />
          <StatCard value="FIAP" label="projeto desenvolvido para Global Solution" tone="alert" />
        </div>
      </section>
    </>
  )
}

export default Sobre
