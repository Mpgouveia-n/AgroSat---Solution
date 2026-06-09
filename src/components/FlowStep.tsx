type FlowStepProps = {
  step: string
  label: string
}

function FlowStep({ step, label }: FlowStepProps) {
  return (
    <div className="flex min-h-28 flex-col justify-between rounded-lg border border-agrosat-blue/30 bg-agrosat-blue/10 p-4">
      <span className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">{step}</span>
      <p className="mt-4 text-base font-semibold text-agrosat-text">{label}</p>
    </div>
  )
}

export default FlowStep
