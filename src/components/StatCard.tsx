type StatCardProps = {
  value: string
  label: string
  tone?: 'green' | 'blue' | 'alert' | 'critical'
}

const toneClasses = {
  green: 'text-agrosat-green',
  blue: 'text-agrosat-blue',
  alert: 'text-agrosat-alert',
  critical: 'text-agrosat-critical',
}

function StatCard({ value, label, tone = 'green' }: StatCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5">
      <p className={`text-2xl font-bold sm:text-3xl ${toneClasses[tone]}`}>{value}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{label}</p>
    </article>
  )
}

export default StatCard
