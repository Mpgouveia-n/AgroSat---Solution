import type { AlertaGerado } from '../types/agrosat'
import SeverityBadge from './SeverityBadge'

type CompactAlertCardProps = {
  alerta: AlertaGerado
}

function CompactAlertCard({ alerta }: CompactAlertCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
            {alerta.talhao}
          </p>
          <h3 className="mt-2 text-lg font-bold text-agrosat-text">{alerta.tipo}</h3>
        </div>
        <SeverityBadge severidade={alerta.severidade} />
      </div>
      <div className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
        <p>
          <span className="font-semibold text-agrosat-text">Status:</span>{' '}
          {alerta.status === 'ATIVO' ? 'Ativo' : 'Resolvido'}
        </p>
        <p>
          <span className="font-semibold text-agrosat-text">Data:</span>{' '}
          {new Date(alerta.dataGeracao).toLocaleDateString('pt-BR')}
        </p>
      </div>
    </article>
  )
}

export default CompactAlertCard
