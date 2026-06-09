import type { StatusMonitoramento } from '../types/agrosat'

type StatusBadgeProps = {
  status: StatusMonitoramento
}

const statusConfig = {
  saudavel: {
    label: 'Saudável',
    className: 'border-agrosat-green/40 bg-agrosat-green/10 text-agrosat-green',
    dot: 'bg-agrosat-green',
  },
  atencao: {
    label: 'Atenção',
    className: 'border-agrosat-alert/40 bg-agrosat-alert/10 text-agrosat-alert',
    dot: 'bg-agrosat-alert',
  },
  critico: {
    label: 'Crítico',
    className: 'border-agrosat-critical/40 bg-agrosat-critical/10 text-agrosat-critical',
    dot: 'bg-agrosat-critical',
  },
}

function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold ${config.className}`}
    >
      <span className={`h-2 w-2 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  )
}

export default StatusBadge
