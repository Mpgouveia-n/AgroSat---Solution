import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Sobre', path: '/sobre' },
  { label: 'Tecnologia', path: '/tecnologia' },
  { label: 'Monitoramento', path: '/monitoramento' },
  { label: 'Relatórios', path: '/relatorios' },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <h2 className="text-xl font-bold text-agrosat-text">AgroSat</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Plataforma web para monitoramento inteligente de plantações com imagens de satélite,
            NDVI e Inteligência Artificial.
          </p>
          <p className="mt-4 text-sm text-slate-400">Global Solution FIAP</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
            Links rápidos
          </h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2 md:grid-cols-1">
            {quickLinks.map((link) => (
              <Link key={link.path} to={link.path} className="transition hover:text-agrosat-green">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
