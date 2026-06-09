type SummaryCardProps = {
  label: string
  value: string
  description: string
  tone?: 'green' | 'blue' | 'alert' | 'critical'
}

const toneClasses = {
  green: 'text-agrosat-green border-agrosat-green/30 bg-agrosat-green/10',
  blue: 'text-agrosat-blue border-agrosat-blue/30 bg-agrosat-blue/10',
  alert: 'text-agrosat-alert border-agrosat-alert/30 bg-agrosat-alert/10',
  critical: 'text-agrosat-critical border-agrosat-critical/30 bg-agrosat-critical/10',
}

function SummaryCard({ label, value, description, tone = 'green' }: SummaryCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/85 p-5 shadow-lg shadow-black/10">
      <div className={`mb-5 inline-flex rounded-md border px-3 py-1 text-xs font-bold ${toneClasses[tone]}`}>
        {label}
      </div>
      <p className="text-3xl font-bold text-agrosat-text sm:text-4xl">{value}</p>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  )
}

export default SummaryCard
