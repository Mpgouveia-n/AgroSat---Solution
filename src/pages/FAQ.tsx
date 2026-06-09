import PageHeader from '../components/PageHeader'

const questions = [
  {
    question: 'O AgroSat já integra dados reais?',
    answer: 'Nesta etapa, a interface usa dados mockados. A integração com APIs será planejada depois.',
  },
  {
    question: 'O que é NDVI?',
    answer: 'É um índice espectral usado para estimar vigor vegetal e identificar possíveis áreas de estresse.',
  },
  {
    question: 'Quem é o público-alvo?',
    answer: 'Pequenos e médios produtores que precisam acompanhar a lavoura com tecnologia acessível.',
  },
  {
    question: 'A plataforma substitui visitas técnicas?',
    answer: 'Não. Ela apoia a tomada de decisão e ajuda a priorizar áreas que merecem atenção.',
  },
]

function FAQ() {
  return (
    <>
      <PageHeader
        title="Perguntas frequentes"
        subtitle="Respostas iniciais sobre a proposta, tecnologia e escopo atual da plataforma AgroSat."
      />
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {questions.map((item) => (
            <article key={item.question} className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5">
              <h2 className="text-lg font-bold text-agrosat-text">{item.question}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default FAQ
