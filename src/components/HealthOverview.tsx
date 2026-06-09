import type { SaudeGeral } from '../types/agrosat'

type HealthOverviewProps = {
  saude: SaudeGeral
}

const healthRows = [
  {
    key: 'saudaveis',
    label: 'Talhões saudáveis',
    color: 'bg-agrosat-green',
    text: 'text-agrosat-green',
  },
  {
    key: 'atencao',
    label: 'Talhões em atenção',
    color: 'bg-agrosat-alert',
    text: 'text-agrosat-alert',
  },
  {
    key: 'criticos',
    label: 'Talhões críticos',
    color: 'bg-agrosat-critical',
    text: 'text-agrosat-critical',
  },
] as const

function HealthOverview({ saude }: HealthOverviewProps) {
  const total = saude.saudaveis + saude.atencao + saude.criticos || 1

  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10">
      <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
        Saúde geral da lavoura
      </p>
      <h2 className="mt-3 text-2xl font-bold text-agrosat-text">Distribuição dos talhões</h2>

      <div className="mt-6 grid gap-5">
        {healthRows.map((row) => {
          const value = saude[row.key]
          const percent = Math.round((value / total) * 100)

          return (
            <div key={row.key}>
              <div className="flex items-center justify-between gap-4 text-sm">
                <span className="font-semibold text-agrosat-text">{row.label}</span>
                <span className={`font-bold ${row.text}`}>{percent}%</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-950/70">
                <div className={`h-full rounded-full ${row.color}`} style={{ width: `${percent}%` }} />
              </div>
            </div>
          )
        })}
      </div>
    </article>
  )
}

export default HealthOverview
