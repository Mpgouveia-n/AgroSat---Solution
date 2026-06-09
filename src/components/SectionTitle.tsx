type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
}

function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-2xl font-bold text-agrosat-text sm:text-3xl lg:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
