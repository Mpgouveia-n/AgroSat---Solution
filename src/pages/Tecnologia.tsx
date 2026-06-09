import FeatureCard from '../components/FeatureCard'
import FlowStep from '../components/FlowStep'
import PageHeader from '../components/PageHeader'

const technologies = [
  {
    title: 'Imagens de satélite',
    description: 'Base visual para acompanhar áreas agrícolas de forma remota e recorrente.',
    accent: 'blue' as const,
  },
  {
    title: 'Dados espectrais',
    description: 'Leitura de bandas que ajudam a identificar vigor vegetal e alterações na lavoura.',
    accent: 'green' as const,
  },
  {
    title: 'NDVI',
    description: 'Índice que destaca a saúde da vegetação e sinaliza regiões com possível estresse.',
    accent: 'alert' as const,
  },
]

function Tecnologia() {
  return (
    <>
      <PageHeader
        title="Tecnologia espacial aplicada ao agro"
        subtitle="O AgroSat combina dados orbitais, análise espectral e Inteligência Artificial para transformar pixels em recomendações."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {technologies.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {['Coleta', 'Processamento', 'NDVI', 'Análise IA', 'Recomendação'].map((step, index) => (
            <FlowStep key={step} step={`0${index + 1}`} label={step} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Tecnologia
