import type { RelatorioTalhao } from '../types/agrosat'
import StatusBadge from './StatusBadge'

type DashboardHighlightCardProps = {
  label: string
  talhao: RelatorioTalhao
}

function DashboardHighlightCard({ label, talhao }: DashboardHighlightCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">{label}</p>
          <h3 className="mt-2 text-xl font-bold text-agrosat-text">{talhao.talhao}</h3>
        </div>
        <StatusBadge status={talhao.status} />
      </div>
      <p className="mt-3 text-sm text-slate-300">{talhao.propriedade}</p>
      <p className="mt-5 text-3xl font-bold text-agrosat-green">{talhao.ndviMedio.toFixed(2)}</p>
      <p className="mt-2 text-xs uppercase tracking-wider text-slate-400">NDVI médio</p>
    </article>
  )
}

export default DashboardHighlightCard
