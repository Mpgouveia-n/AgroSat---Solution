import { Link } from 'react-router-dom'
import type { AcaoRapidaDashboard } from '../types/agrosat'

type QuickActionCardProps = {
  acao: AcaoRapidaDashboard
}

const actionClasses = {
  green: 'border-agrosat-green/40 hover:bg-agrosat-green/10',
  blue: 'border-agrosat-blue/40 hover:bg-agrosat-blue/10',
  alert: 'border-agrosat-alert/40 hover:bg-agrosat-alert/10',
  critical: 'border-agrosat-critical/40 hover:bg-agrosat-critical/10',
}

function QuickActionCard({ acao }: QuickActionCardProps) {
  return (
    <Link
      to={acao.rota}
      className={`rounded-lg border bg-agrosat-card/85 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-1 ${actionClasses[acao.destaque]}`}
    >
      <p className="text-lg font-bold text-agrosat-text">{acao.titulo}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{acao.descricao}</p>
    </Link>
  )
}

export default QuickActionCard
