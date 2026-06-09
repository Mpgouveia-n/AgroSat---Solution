type FAQItemProps = {
  pergunta: string
  resposta: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ pergunta, resposta, isOpen, onToggle }: FAQItemProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-white/10 bg-agrosat-card/85 shadow-lg shadow-black/10 transition hover:border-agrosat-blue/40">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="text-base font-bold leading-6 text-agrosat-text sm:text-lg">{pergunta}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-agrosat-green/40 bg-agrosat-green/10 text-xl font-bold text-agrosat-green">
          {isOpen ? '-' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-white/10 px-5 pb-5 pt-4 sm:px-6">
          <p className="text-sm leading-7 text-slate-300 sm:text-base">{resposta}</p>
        </div>
      )}
    </article>
  )
}

export default FAQItem
