import carlosFoto from '../assets/integrantes/carlos-bianchi.jpg'
import lucasFoto from '../assets/integrantes/lucas-shida.jpg'
import manuelFoto from '../assets/integrantes/manuel-pedro.jpg'
import viniciusFoto from '../assets/integrantes/vinicius-morrone.jpg'
import IntegranteCard from '../components/IntegranteCard'
import SectionTitle from '../components/SectionTitle'

const integrantes = [
  {
    nome: 'Manuel Pedro de Gouveia Neto',
    funcao: 'Desenvolvedor Front-end e Integração Web',
    rm: 'RM: 567458 - Turma: 1ºTDSPS',
    linkedin: 'https://www.linkedin.com/in/manuel-pedro-gouveia-neto-89928638a/',
    github: 'https://github.com/Mpescorpion',
    foto: manuelFoto,
  },
  {
    nome: 'Vinicius Morrone',
    funcao: 'Desenvolvimento Back-end Java API / Modelagem Database Oracle',
    rm: 'RM: 566884 - Turma: 1ºTDSPS',
    linkedin: 'https://www.linkedin.com/in/vinícius-morrone-lustosa/',
    github: 'https://github.com/viniciusmorrone',
    foto: viniciusFoto,
  },
  {
    nome: 'Lucas Shida Rodrigues da Costa',
    funcao: 'Desenvolvimento Back-end Python / Engenharia de Documentação',
    rm: 'RM: 568194 - Turma: 1ºTDSPS',
    linkedin: 'https://www.linkedin.com/in/lucas-shida/',
    github: 'https://github.com/LucasShida',
    foto: lucasFoto,
  },
  {
    nome: 'Carlos Aurelio Tolosa Bianchi',
    funcao: 'Developer Machine Learning',
    rm: 'RM: 567897 - Turma: 1ºTDSPS',
    linkedin: 'https://www.linkedin.com/in/carlos-bianchi-6608a3272/',
    github: 'https://github.com/Carlos-Bianchi',
    foto: carlosFoto,
  },
]

function Integrantes() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
              Time AgroSat
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-agrosat-text sm:text-5xl lg:text-6xl">
              Nossa Equipe
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Conheça os integrantes responsáveis pelo desenvolvimento do AgroSat, uma solução que
              conecta tecnologia espacial, agricultura inteligente e inteligência artificial.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5 shadow-2xl shadow-black/30">
            <div className="grid grid-cols-2 gap-3">
              {integrantes.map((integrante, index) => (
                <div
                  key={integrante.nome}
                  className="rounded-lg border border-agrosat-blue/20 bg-slate-950/70 p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
                    0{index + 1}
                  </p>
                  <p className="mt-3 text-sm font-semibold leading-5 text-agrosat-text">
                    {integrante.nome.split(' ').slice(0, 2).join(' ')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Integrantes"
            title="Perfis da equipe de desenvolvimento"
            subtitle="Cada integrante contribui com uma frente essencial para transformar a proposta do AgroSat em uma plataforma web moderna, responsiva e orientada por dados."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {integrantes.map((integrante) => (
              <IntegranteCard key={integrante.nome} {...integrante} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Integrantes
