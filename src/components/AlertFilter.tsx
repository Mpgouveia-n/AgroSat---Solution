import type { FiltroAlerta } from '../types/agrosat'

type AlertFilterProps = {
  selectedFilter: FiltroAlerta
  onChange: (filter: FiltroAlerta) => void
}

const filters: Array<{ label: string; value: FiltroAlerta }> = [
  { label: 'Todos', value: 'todos' },
  { label: 'Ativos', value: 'ativos' },
  { label: 'Críticos', value: 'criticos' },
  { label: 'Resolvidos', value: 'resolvidos' },
]

function AlertFilter({ selectedFilter, onChange }: AlertFilterProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const isSelected = selectedFilter === filter.value

        return (
          <button
            key={filter.value}
            type="button"
            className={`rounded-md border px-4 py-2 text-sm font-bold transition ${
              isSelected
                ? 'border-agrosat-green bg-agrosat-green text-agrosat-space'
                : 'border-white/10 bg-agrosat-card/80 text-agrosat-text hover:border-agrosat-blue/50 hover:bg-agrosat-blue/10'
            }`}
            onClick={() => onChange(filter.value)}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}

export default AlertFilter
