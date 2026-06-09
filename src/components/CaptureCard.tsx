import type { CapturaRelatorio } from '../types/agrosat'

type CaptureCardProps = {
  captura: CapturaRelatorio
}

function CaptureCard({ captura }: CaptureCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10 transition hover:border-agrosat-green/40">
      <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">Captura orbital</p>
      <h3 className="mt-2 text-xl font-bold text-agrosat-text">{captura.sateliteOrigem}</h3>
      <div className="mt-5 grid gap-3 text-sm text-slate-300">
        <p>
          <span className="font-semibold text-agrosat-text">Data:</span> {captura.dataImagem}
        </p>
        <p>
          <span className="font-semibold text-agrosat-text">Resolução:</span> {captura.resolucao}
        </p>
        <p>
          <span className="font-semibold text-agrosat-text">Tipo:</span> {captura.tipoImagem}
        </p>
        <p>
          <span className="font-semibold text-agrosat-text">Talhões analisados:</span>{' '}
          {captura.talhoesAnalisados}
        </p>
      </div>
    </article>
  )
}

export default CaptureCard
