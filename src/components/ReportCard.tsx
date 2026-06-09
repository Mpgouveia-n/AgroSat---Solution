import type { RelatorioTalhao } from '../types/agrosat'
import StatusBadge from './StatusBadge'

type ReportCardProps = {
  relatorio: RelatorioTalhao
}

function ReportCard({ relatorio }: ReportCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10 transition hover:border-agrosat-blue/40">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
            {relatorio.propriedade}
          </p>
          <h3 className="mt-2 text-xl font-bold leading-tight text-agrosat-text">
            {relatorio.talhao}
          </h3>
        </div>
        <StatusBadge status={relatorio.status} />
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
          <p className="text-xs text-slate-400">NDVI médio</p>
          <p className="mt-1 text-2xl font-bold text-agrosat-green">
            {relatorio.ndviMedio.toFixed(2)}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
          <p className="text-xs text-slate-400">Menor NDVI</p>
          <p className="mt-1 text-2xl font-bold text-agrosat-alert">
            {relatorio.menorNdvi.toFixed(2)}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
          <p className="text-xs text-slate-400">Maior NDVI</p>
          <p className="mt-1 text-2xl font-bold text-agrosat-blue">
            {relatorio.maiorNdvi.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
        <p>
          <span className="font-semibold text-agrosat-text">Última captura:</span>{' '}
          {relatorio.ultimaCaptura}
        </p>
        <p>
          <span className="font-semibold text-agrosat-text">Satélite:</span>{' '}
          {relatorio.sateliteOrigem}
        </p>
      </div>

      <p className="mt-5 rounded-lg border border-white/10 bg-slate-950/45 p-4 text-sm leading-6 text-slate-300">
        {relatorio.recomendacao}
      </p>
    </article>
  )
}

export default ReportCard
