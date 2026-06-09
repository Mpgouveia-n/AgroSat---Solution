import type { FiltroRelatorio, PeriodoRelatorio } from '../types/agrosat'

type ReportFilterProps = {
  filtro: FiltroRelatorio
  periodo: PeriodoRelatorio
  onFiltroChange: (filtro: FiltroRelatorio) => void
  onPeriodoChange: (periodo: PeriodoRelatorio) => void
}

const filtros: Array<{ label: string; value: FiltroRelatorio }> = [
  { label: 'Todos', value: 'todos' },
  { label: 'Saudáveis', value: 'saudaveis' },
  { label: 'Atenção', value: 'atencao' },
  { label: 'Críticos', value: 'criticos' },
]

const periodos: Array<{ label: string; value: PeriodoRelatorio }> = [
  { label: 'Últimos 7 dias', value: '7d' },
  { label: 'Últimos 15 dias', value: '15d' },
  { label: 'Últimos 30 dias', value: '30d' },
]

function ReportFilter({ filtro, periodo, onFiltroChange, onPeriodoChange }: ReportFilterProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="flex flex-wrap gap-3">
        {filtros.map((item) => {
          const isSelected = filtro === item.value

          return (
            <button
              key={item.value}
              type="button"
              className={`rounded-md border px-4 py-2 text-sm font-bold transition ${
                isSelected
                  ? 'border-agrosat-green bg-agrosat-green text-agrosat-space'
                  : 'border-white/10 bg-agrosat-card/80 text-agrosat-text hover:border-agrosat-blue/50 hover:bg-agrosat-blue/10'
              }`}
              onClick={() => onFiltroChange(item.value)}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <select
        value={periodo}
        className="rounded-md border border-white/10 bg-agrosat-card px-4 py-2 text-sm font-bold text-agrosat-text outline-none transition hover:border-agrosat-blue/50"
        onChange={(event) => onPeriodoChange(event.target.value as PeriodoRelatorio)}
      >
        {periodos.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default ReportFilter
