type FeatureCardProps = {
  title: string
  description: string
  accent?: 'green' | 'blue' | 'alert' | 'critical'
}

const accentClasses = {
  green: 'border-agrosat-green/40 bg-agrosat-green/10 text-agrosat-green',
  blue: 'border-agrosat-blue/40 bg-agrosat-blue/10 text-agrosat-blue',
  alert: 'border-agrosat-alert/40 bg-agrosat-alert/10 text-agrosat-alert',
  critical: 'border-agrosat-critical/40 bg-agrosat-critical/10 text-agrosat-critical',
}

function FeatureCard({ title, description, accent = 'green' }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5 shadow-lg shadow-black/10">
      <div className={`mb-4 h-2 w-12 rounded-full border ${accentClasses[accent]}`} />
      <h3 className="text-lg font-bold text-agrosat-text">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  )
}

export default FeatureCard
