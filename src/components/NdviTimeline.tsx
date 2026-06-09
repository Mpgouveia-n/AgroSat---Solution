type NdviTimelineProps = {
  label: string
  values: number[]
}

function NdviTimeline({ label, values }: NdviTimelineProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base font-bold text-agrosat-text">{label}</h3>
        <span className="text-xs font-bold text-agrosat-blue">{values.at(-1)?.toFixed(2)}</span>
      </div>

      <div className="mt-5 flex items-end gap-3">
        {values.map((value, index) => {
          const barHeight = Math.max(18, value * 100)
          const color =
            value < 0.3
              ? 'bg-agrosat-critical'
              : value < 0.6
                ? 'bg-agrosat-alert'
                : 'bg-agrosat-green'

          return (
            <div key={`${label}-${index}`} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-28 w-full items-end rounded-md bg-slate-950/60 p-1">
                <div className={`w-full rounded ${color}`} style={{ height: `${barHeight}%` }} />
              </div>
              <span className="text-xs text-slate-400">{value.toFixed(2)}</span>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default NdviTimeline
