import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FAQItem from '../components/FAQItem'
import SectionTitle from '../components/SectionTitle'

const perguntasFrequentes = [
  {
    pergunta: 'O que é o AgroSat?',
    resposta:
      'O AgroSat é uma plataforma web que utiliza imagens de satélite, NDVI e Inteligência Artificial para monitorar a saúde de plantações e gerar alertas para produtores rurais.',
  },
  {
    pergunta: 'Como o AgroSat usa tecnologia espacial?',
    resposta:
      'A solução se baseia em dados obtidos por satélites de observação da Terra, como Sentinel e Landsat, que capturam informações espectrais da vegetação. Esses dados podem ser processados para identificar padrões de saúde da lavoura.',
  },
  {
    pergunta: 'O que é NDVI?',
    resposta:
      'NDVI significa Normalized Difference Vegetation Index. Ele é um índice utilizado para avaliar o vigor e a saúde da vegetação a partir da diferença entre bandas de luz vermelha e infravermelha captadas por satélites.',
  },
  {
    pergunta: 'O AgroSat usa imagens reais de satélite?',
    resposta:
      'No MVP acadêmico, o sistema pode trabalhar com dados simulados ou datasets baseados em informações reais de NDVI. A arquitetura foi pensada para futuramente consumir dados reais de fontes como Sentinel, Landsat, NASA ou ESA.',
  },
  {
    pergunta: 'Como a Inteligência Artificial participa da solução?',
    resposta:
      'A IA é utilizada para classificar a saúde dos talhões, identificar possíveis riscos como estresse hídrico ou pragas e auxiliar na geração de recomendações para o produtor.',
  },
  {
    pergunta: 'Quais problemas o AgroSat pode ajudar a identificar?',
    resposta:
      'A plataforma pode auxiliar na detecção de queda no vigor da vegetação, possíveis sinais de estresse hídrico, áreas críticas da plantação, risco de perda de produtividade e necessidade de atenção em determinados talhões.',
  },
  {
    pergunta: 'O sistema é voltado para grandes fazendas?',
    resposta:
      'Não exclusivamente. Um dos objetivos do AgroSat é tornar tecnologias de agricultura de precisão mais acessíveis também para pequenos e médios produtores rurais.',
  },
  {
    pergunta: 'O AgroSat substitui um agrônomo?',
    resposta:
      'Não. O AgroSat funciona como uma ferramenta de apoio à decisão. Ele indica padrões, riscos e alertas, mas a avaliação técnica final deve ser realizada por profissionais especializados.',
  },
  {
    pergunta: 'Quais tecnologias fazem parte do projeto?',
    resposta:
      'O front-end utiliza React, Vite, TypeScript e Tailwind CSS. A proposta geral do sistema também envolve API Java com Quarkus, API Flask para modelos de IA, banco Oracle e modelos de Machine Learning.',
  },
  {
    pergunta: 'Como o projeto se conecta à Global Solution?',
    resposta:
      'O AgroSat conecta exploração espacial e problemas reais da Terra ao utilizar dados orbitais para apoiar agricultura sustentável, prevenção de perdas e tomada de decisão baseada em dados.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'FAQ | AgroSat'

    return () => {
      document.title = previousTitle
    }
  }, [])

  function handleToggle(index: number) {
    setOpenIndex((currentIndex) => (currentIndex === index ? null : index))
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.16),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-[1fr_0.75fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
              Central de dúvidas
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-agrosat-text sm:text-5xl lg:text-6xl">
              Perguntas Frequentes
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Tire suas principais dúvidas sobre o AgroSat, o uso de imagens de satélite, NDVI,
              Inteligência Artificial e monitoramento agrícola.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5 shadow-2xl shadow-black/30">
            <div className="grid gap-4">
              <div className="rounded-lg border border-agrosat-blue/30 bg-agrosat-blue/10 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
                  MVP acadêmico
                </p>
                <p className="mt-3 text-2xl font-bold text-agrosat-text">10 respostas essenciais</p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Conceitos, limites e tecnologias explicados para avaliação do projeto.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg border border-agrosat-green/30 bg-agrosat-green/10 p-4 text-center">
                  <p className="text-sm font-bold text-agrosat-green">NDVI</p>
                </div>
                <div className="rounded-lg border border-agrosat-blue/30 bg-agrosat-blue/10 p-4 text-center">
                  <p className="text-sm font-bold text-agrosat-blue">IA</p>
                </div>
                <div className="rounded-lg border border-agrosat-alert/30 bg-agrosat-alert/10 p-4 text-center">
                  <p className="text-sm font-bold text-agrosat-alert">MVP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            eyebrow="FAQ"
            title="Entenda como o AgroSat funciona"
            subtitle="Clique em cada pergunta para abrir ou fechar a resposta."
          />

          <div className="mt-10 grid gap-4">
            {perguntasFrequentes.map((item, index) => (
              <FAQItem
                key={item.pergunta}
                pergunta={item.pergunta}
                resposta={item.resposta}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-lg border border-white/10 bg-slate-950/60 p-6 text-center shadow-lg shadow-black/10 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
            Próximo passo
          </p>
          <h2 className="mt-3 text-2xl font-bold text-agrosat-text sm:text-3xl">
            Ainda com dúvidas?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            O AgroSat foi desenvolvido como uma solução acadêmica para demonstrar como dados
            espaciais podem gerar impacto real na agricultura e na sustentabilidade.
          </p>
          <Link
            to="/dashboard"
            className="mt-6 inline-flex rounded-md bg-agrosat-green px-5 py-3 text-sm font-bold text-agrosat-space transition hover:bg-green-300"
          >
            Conhecer o Dashboard
          </Link>
        </div>
      </section>
    </>
  )
}

export default FAQ
