type IntegranteCardProps = {
  nome: string
  funcao: string
  rm: string
  linkedin: string
  github: string
  foto?: string
}

function getInitials(nome: string) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function IntegranteCard({ nome, funcao, rm, linkedin, github, foto }: IntegranteCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-agrosat-card/85 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-agrosat-green/40 hover:shadow-agrosat-green/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
        {foto ? (
          <img
            src={foto}
            alt={`Foto de ${nome}`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle,rgba(34,197,94,0.20),transparent_52%),#0f172a] text-3xl font-bold text-agrosat-green">
            {getInitials(nome)}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-agrosat-card to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">Integrante</p>
        <h2 className="mt-2 text-xl font-bold leading-tight text-agrosat-text">{nome}</h2>
        <p className="mt-3 text-sm font-medium leading-6 text-agrosat-green">{funcao}</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">{rm}</p>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-agrosat-blue/50 px-3 py-2 text-center text-sm font-bold text-agrosat-text transition hover:bg-agrosat-blue/15"
          >
            LinkedIn
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-agrosat-green/50 px-3 py-2 text-center text-sm font-bold text-agrosat-text transition hover:bg-agrosat-green/15"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  )
}

export default IntegranteCard
