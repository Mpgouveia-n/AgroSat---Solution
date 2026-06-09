import FeatureCard from '../components/FeatureCard'
import PageHeader from '../components/PageHeader'
import StatCard from '../components/StatCard'

function Dashboard() {
  return (
    <>
      <PageHeader
        title="Dashboard AgroSat"
        subtitle="Visão inicial mockada para consolidar indicadores, alertas e status das áreas monitoradas."
      />
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value="8" label="talhões monitorados" tone="green" />
          <StatCard value="3" label="alertas pendentes" tone="alert" />
          <StatCard value="74%" label="média NDVI mockada" tone="blue" />
          <StatCard value="1" label="área crítica simulada" tone="critical" />
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <FeatureCard
            title="Mapa orbital"
            description="Espaço reservado para visualização geográfica dos talhões monitorados."
            accent="blue"
          />
          <FeatureCard
            title="Resumo de saúde"
            description="Indicadores sintéticos sobre vigor vegetal e variações recentes."
            accent="green"
          />
          <FeatureCard
            title="Fila de recomendações"
            description="Área para futuras sugestões automáticas baseadas em IA."
            accent="alert"
          />
        </div>
      </section>
    </>
  )
}

export default Dashboard
