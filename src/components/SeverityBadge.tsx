import type { SeveridadeAlerta } from '../types/agrosat'

type SeverityBadgeProps = {
  severidade: SeveridadeAlerta
}

const severityConfig = {
  alta: 'border-agrosat-critical/40 bg-agrosat-critical/10 text-agrosat-critical',
  media: 'border-agrosat-alert/40 bg-agrosat-alert/10 text-agrosat-alert',
  baixa: 'border-agrosat-green/40 bg-agrosat-green/10 text-agrosat-green',
}

function SeverityBadge({ severidade }: SeverityBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold capitalize ${severityConfig[severidade]}`}
    >
      Severidade {severidade}
    </span>
  )
}

export default SeverityBadge
