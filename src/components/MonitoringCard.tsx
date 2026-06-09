import type { TalhaoMonitoramento } from '../types/agrosat'
import StatusBadge from './StatusBadge'

type MonitoringCardProps = {
  talhao: TalhaoMonitoramento
}

function MonitoringCard({ talhao }: MonitoringCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10 transition hover:border-agrosat-blue/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
            {talhao.tipoCultura}
          </p>
          <h3 className="mt-2 text-xl font-bold leading-tight text-agrosat-text">
            {talhao.identificacaoBloco}
          </h3>
        </div>
        <StatusBadge status={talhao.status} />
      </div>

      <div className="mt-5 rounded-lg border border-white/10 bg-slate-950/50 p-4">
        <p className="text-sm text-slate-400">NDVI atual</p>
        <p className="mt-1 text-3xl font-bold text-agrosat-green">{talhao.ndviAtual.toFixed(2)}</p>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
        <p>
          <span className="font-semibold text-agrosat-text">Área monitorada:</span>{' '}
          {talhao.areaMonitorada} ha
        </p>
        <p>
          <span className="font-semibold text-agrosat-text">Última captura:</span>{' '}
          {talhao.ultimaCaptura.dataImagem}
        </p>
        <p className="sm:col-span-2">
          <span className="font-semibold text-agrosat-text">Satélite utilizado:</span>{' '}
          {talhao.ultimaCaptura.sateliteOrigem}
        </p>
      </div>
    </article>
  )
}

export default MonitoringCard
