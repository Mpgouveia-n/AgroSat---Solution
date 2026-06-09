type PageHeaderProps = {
  eyebrow?: string
  title: string
  subtitle: string
}

function PageHeader({ eyebrow = 'AgroSat', title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-white/10 bg-slate-950/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold text-agrosat-text sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHeader
