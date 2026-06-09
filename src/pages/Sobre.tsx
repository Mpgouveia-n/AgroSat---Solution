import FeatureCard from '../components/FeatureCard'
import FlowStep from '../components/FlowStep'
import SectionTitle from '../components/SectionTitle'
import StatCard from '../components/StatCard'

const problemCards = [
  {
    title: 'Identificacao tardia',
    description:
      'Pequenos e medios produtores muitas vezes percebem pragas, falhas de irrigacao ou perda de vigor quando o impacto ja e visivel na lavoura.',
    accent: 'critical' as const,
  },
  {
    title: 'Prejuizos no campo',
    description:
      'Estresse hidrico, queda de produtividade e manejo reativo podem gerar perdas financeiras significativas durante a safra.',
    accent: 'alert' as const,
  },
  {
    title: 'Baixo acesso tecnologico',
    description:
      'Ferramentas avancadas de monitoramento ainda sao caras ou complexas para muitos produtores que precisam de decisoes rapidas.',
    accent: 'blue' as const,
  },
]

const solutionFlow = [
  'Satelite',
  'Imagem orbital',
  'NDVI',
  'Inteligencia Artificial',
  'Alertas',
  'Produtor',
]

const spaceTechCards = [
  {
    title: 'Satelites Sentinel',
    description:
      'Missoes da ESA usadas como referencia para observar a Terra e apoiar analises ambientais e agricolas.',
    accent: 'blue' as const,
  },
  {
    title: 'Satelites Landsat',
    description:
      'Programa NASA/USGS com historico de imagens orbitais usado para estudar mudancas na superficie terrestre.',
    accent: 'green' as const,
  },
  {
    title: 'Monitoramento remoto',
    description:
      'Acompanhamento de areas agricolas sem depender apenas de visitas presenciais e inspecoes manuais.',
    accent: 'alert' as const,
  },
  {
    title: 'Dados espectrais',
    description:
      'Captura de informacoes em bandas de luz que revelam sinais invisiveis ao olho humano sobre a vegetacao.',
    accent: 'blue' as const,
  },
]

const aiCards = [
  {
    title: 'Classificacao da saude',
    description:
      'Modelos de Machine Learning podem classificar talhoes por nivel de vigor vegetal e prioridade de atencao.',
    accent: 'green' as const,
  },
  {
    title: 'Deteccao de problemas',
    description:
      'A IA ajuda a identificar padroes associados a pragas, estresse hidrico e possiveis quedas de produtividade.',
    accent: 'critical' as const,
  },
  {
    title: 'Alertas automaticos',
    description:
      'Quando uma area apresenta comportamento fora do esperado, a plataforma pode destacar riscos para o produtor.',
    accent: 'alert' as const,
  },
  {
    title: 'Apoio a decisao',
    description:
      'As analises organizam dados complexos em informacoes simples para orientar proximas acoes no campo.',
    accent: 'blue' as const,
  },
]

const impactCards = [
  {
    title: 'Agricultura inteligente',
    description: 'Uso de dados para tornar o manejo mais preciso, rapido e conectado ao comportamento da lavoura.',
    accent: 'green' as const,
  },
  {
    title: 'Sustentabilidade',
    description: 'Melhor uso de agua, insumos e tempo tecnico para reduzir desperdicios e impactos ambientais.',
    accent: 'green' as const,
  },
  {
    title: 'Monitoramento remoto',
    description: 'Mais visibilidade sobre areas extensas ou distantes, mesmo antes de uma visita em campo.',
    accent: 'blue' as const,
  },
  {
    title: 'Baixo custo',
    description: 'A proposta usa dados orbitais e uma interface web para aproximar tecnologia do produtor.',
    accent: 'alert' as const,
  },
  {
    title: 'Democratizacao da tecnologia',
    description: 'Ferramentas de analise agricola apresentadas de forma clara, visual e acessivel.',
    accent: 'blue' as const,
  },
  {
    title: 'Apoio ao pequeno produtor',
    description: 'Foco em produtores que precisam priorizar riscos e agir com mais seguranca durante a safra.',
    accent: 'green' as const,
  },
]

function Sobre() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.16),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
              Sobre o projeto
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-agrosat-text sm:text-5xl lg:text-6xl">
              Transformando dados espaciais em decisoes agricolas
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              O AgroSat conecta imagens de satelite, NDVI e Inteligencia Artificial para auxiliar
              produtores rurais na tomada de decisoes mais rapidas, inteligentes e sustentaveis.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5 shadow-2xl shadow-black/30">
            <div className="grid gap-4">
              <div className="rounded-lg border border-agrosat-blue/30 bg-slate-950/70 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
                  Leitura orbital
                </p>
                <div className="mt-5 grid grid-cols-6 gap-2">
                  {Array.from({ length: 30 }).map((_, index) => {
                    const tone =
                      index % 11 === 0
                        ? 'bg-agrosat-critical'
                        : index % 5 === 0
                          ? 'bg-agrosat-alert'
                          : index % 3 === 0
                            ? 'bg-agrosat-blue'
                            : 'bg-agrosat-green'

                    return <div key={index} className={`aspect-square rounded ${tone} opacity-80`} />
                  })}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <StatCard value="NDVI" label="vigor vegetal" tone="green" />
                <StatCard value="IA" label="analise automatica" tone="blue" />
                <StatCard value="24h" label="ciclo simulado" tone="alert" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="O problema"
            title="Riscos agricolas ainda sao percebidos tarde demais"
            subtitle="Sem monitoramento frequente, sinais de pragas, estresse hidrico e perda de produtividade podem passar despercebidos ate se tornarem prejuizo."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {problemCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Nossa solucao"
            title="Do satelite ao produtor em uma jornada visual"
            subtitle="O AgroSat utiliza imagens obtidas por satelites para monitorar areas agricolas e gerar analises automaticas sobre a saude da vegetacao."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {solutionFlow.map((step, index) => (
              <FlowStep key={step} step={`0${index + 1}`} label={step} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Tecnologia espacial"
            title="Observacao da Terra aplicada ao agronegocio"
            subtitle="A plataforma se inspira em programas de monitoramento orbital usados para acompanhar vegetacao, solo e mudancas ambientais."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {spaceTechCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
              O que e NDVI?
            </p>
            <h2 className="mt-3 text-2xl font-bold text-agrosat-text sm:text-3xl lg:text-4xl">
              Um indice simples para entender a saude da vegetacao
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
              NDVI (Normalized Difference Vegetation Index) e um indice utilizado para medir a
              saude e o vigor da vegetacao atraves da analise das bandas vermelha e infravermelha
              captadas pelos satelites.
            </p>
          </div>

          <article className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5 shadow-lg shadow-black/10">
            <div className="grid gap-4">
              <div className="rounded-lg border border-agrosat-green/30 bg-agrosat-green/10 p-4">
                <div className="h-3 w-full rounded-full bg-agrosat-green" />
                <p className="mt-3 text-sm font-bold text-agrosat-text">Verde = vegetacao saudavel</p>
              </div>
              <div className="rounded-lg border border-agrosat-alert/30 bg-agrosat-alert/10 p-4">
                <div className="h-3 w-full rounded-full bg-agrosat-alert" />
                <p className="mt-3 text-sm font-bold text-agrosat-text">Amarelo = atencao</p>
              </div>
              <div className="rounded-lg border border-agrosat-critical/30 bg-agrosat-critical/10 p-4">
                <div className="h-3 w-full rounded-full bg-agrosat-critical" />
                <p className="mt-3 text-sm font-bold text-agrosat-text">Vermelho = situacao critica</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Inteligencia Artificial"
            title="Machine Learning para transformar dados em alertas"
            subtitle="A IA participa da solucao interpretando padroes, classificando riscos e apoiando uma tomada de decisao mais objetiva."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aiCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Impacto"
            title="Por que o AgroSat importa"
            subtitle="A proposta aproxima tecnologia espacial, dados e sustentabilidade de produtores que precisam agir com mais rapidez e confianca."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {impactCards.map((card) => (
              <FeatureCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Sobre
