import type { PropriedadeMonitoramento } from '../types/agrosat'
import StatusBadge from './StatusBadge'

type PropertyCardProps = {
  propriedade: PropriedadeMonitoramento
}

function PropertyCard({ propriedade }: PropertyCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10 transition hover:border-agrosat-green/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">Propriedade</p>
          <h3 className="mt-2 text-xl font-bold leading-tight text-agrosat-text">
            {propriedade.nomeFazenda}
          </h3>
        </div>
        <StatusBadge status={propriedade.statusGeral} />
      </div>

      <div className="mt-5 grid gap-3 text-sm text-slate-300">
        <p>
          <span className="font-semibold text-agrosat-text">Talhões:</span>{' '}
          {propriedade.totalTalhoes}
        </p>
        <p>
          <span className="font-semibold text-agrosat-text">NDVI Médio:</span>{' '}
          {propriedade.ndviMedio.toFixed(2)}
        </p>
        <p>
          <span className="font-semibold text-agrosat-text">Área:</span>{' '}
          {propriedade.tamanhoHectares?.toLocaleString('pt-BR')} ha
        </p>
      </div>

      <a
        href="#talhoes-monitorados"
        className="mt-6 inline-flex justify-center rounded-md border border-agrosat-green/50 px-4 py-2 text-sm font-bold text-agrosat-text transition hover:bg-agrosat-green/15"
      >
        Visualizar Talhões
      </a>
    </article>
  )
}

export default PropertyCard
