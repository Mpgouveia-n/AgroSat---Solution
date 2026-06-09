import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import agrosatLogo from '../assets/images/logo-agrosat-symbol.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Tecnologia', path: '/tecnologia' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Monitoramento', path: '/monitoramento' },
  { label: 'Alertas', path: '/alertas' },
  { label: 'Relatórios', path: '/relatorios' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-3 py-2 text-sm font-medium transition hover:bg-white/10 hover:text-agrosat-green ${
      isActive ? 'bg-white/10 text-agrosat-green' : 'text-slate-200'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-agrosat-space/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <img
            src={agrosatLogo}
            alt="Logo AgroSat"
            className="h-8 w-8 rounded-md object-contain sm:h-10 sm:w-10 lg:h-12 lg:w-12"
          />
          <span className="text-lg font-bold tracking-wide text-agrosat-text">AgroSat</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/dashboard"
          className="hidden rounded-md bg-agrosat-green px-4 py-2 text-sm font-bold text-agrosat-space transition hover:bg-green-300 lg:inline-flex"
        >
          Acessar Dashboard
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-xl text-agrosat-text lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? 'x' : '='}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 px-4 pb-4 sm:px-6 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2 py-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/dashboard"
              className="mt-2 rounded-md bg-agrosat-green px-4 py-3 text-center text-sm font-bold text-agrosat-space"
              onClick={() => setIsOpen(false)}
            >
              Acessar Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
