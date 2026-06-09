import type { AlertaGerado } from '../types/agrosat'
import SeverityBadge from './SeverityBadge'

type AlertCardProps = {
  alerta: AlertaGerado
  onResolve: (id: number) => void
}

function AlertCard({ alerta, onResolve }: AlertCardProps) {
  const isResolved = alerta.status === 'RESOLVIDO'

  return (
    <article
      className={`rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10 transition hover:border-agrosat-blue/40 ${
        isResolved ? 'opacity-70' : ''
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
            {alerta.propriedade}
          </p>
          <h3 className="mt-2 text-xl font-bold leading-tight text-agrosat-text">{alerta.tipo}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          <SeverityBadge severidade={alerta.severidade} />
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${
              isResolved
                ? 'border-white/10 bg-white/5 text-slate-300'
                : 'border-agrosat-blue/40 bg-agrosat-blue/10 text-agrosat-blue'
            }`}
          >
            {isResolved ? 'Resolvido' : 'Ativo'}
          </span>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
        <p>
          <span className="font-semibold text-agrosat-text">Talhão:</span> {alerta.talhao}
        </p>
        <p>
          <span className="font-semibold text-agrosat-text">Gerado em:</span>{' '}
          {new Date(alerta.dataGeracao).toLocaleDateString('pt-BR')}
        </p>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-agrosat-alert">
            Descrição
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{alerta.descricao}</p>
        </div>
        <div className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-agrosat-green">
            Recomendação
          </p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{alerta.recomendacao}</p>
        </div>
      </div>

      {!isResolved && (
        <button
          type="button"
          className="mt-5 rounded-md bg-agrosat-green px-4 py-2 text-sm font-bold text-agrosat-space transition hover:bg-green-300"
          onClick={() => onResolve(alerta.id)}
        >
          Marcar como resolvido
        </button>
      )}
    </article>
  )
}

export default AlertCard
