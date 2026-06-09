import { useEffect, useMemo, useState } from 'react'
import AlertCard from '../components/AlertCard'
import AlertFilter from '../components/AlertFilter'
import SectionTitle from '../components/SectionTitle'
import SummaryCard from '../components/SummaryCard'
import { listarAlertas, resolverAlerta } from '../services/alertaService'
import type { AlertaGerado, FiltroAlerta } from '../types/agrosat'

function Alertas() {
  const [alertas, setAlertas] = useState<AlertaGerado[]>([])
  const [filtroSelecionado, setFiltroSelecionado] = useState<FiltroAlerta>('todos')

  useEffect(() => {
    async function carregarAlertasMockados() {
      const alertasMock = await listarAlertas()
      setAlertas(alertasMock)
    }

    carregarAlertasMockados()
  }, [])

  const alertasFiltrados = useMemo(() => {
    return alertas.filter((alerta) => {
      if (filtroSelecionado === 'ativos') {
        return alerta.status === 'ATIVO'
      }

      if (filtroSelecionado === 'criticos') {
        return alerta.severidade === 'alta'
      }

      if (filtroSelecionado === 'resolvidos') {
        return alerta.status === 'RESOLVIDO'
      }

      return true
    })
  }, [alertas, filtroSelecionado])

  const totalAtivos = alertas.filter((alerta) => alerta.status === 'ATIVO').length
  const totalCriticos = alertas.filter((alerta) => alerta.severidade === 'alta').length
  const totalResolvidos = alertas.filter((alerta) => alerta.status === 'RESOLVIDO').length

  const resumo = [
    {
      label: 'Alertas Totais',
      value: String(alertas.length),
      description: 'Ocorrências registradas pela análise mockada dos talhões.',
      tone: 'blue' as const,
    },
    {
      label: 'Alertas Ativos',
      value: String(totalAtivos),
      description: 'Riscos que ainda exigem acompanhamento ou validação técnica.',
      tone: 'alert' as const,
    },
    {
      label: 'Alertas Críticos',
      value: String(totalCriticos),
      description: 'Anomalias de maior severidade associadas à queda de NDVI.',
      tone: 'critical' as const,
    },
    {
      label: 'Alertas Resolvidos',
      value: String(totalResolvidos),
      description: 'Ocorrências já marcadas como tratadas no fluxo simulado.',
      tone: 'green' as const,
    },
  ]

  async function handleResolverAlerta(id: number) {
    const alertaResolvido = await resolverAlerta(id)

    setAlertas((alertasAtuais) =>
      alertasAtuais.map((alerta) =>
        alerta.id === id ? { ...alerta, status: alertaResolvido.status } : alerta,
      ),
    )
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
              Inteligência de risco agrícola
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-agrosat-text sm:text-5xl lg:text-6xl">
              Central de Alertas
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Acompanhe anomalias detectadas nos talhões, níveis de risco e recomendações geradas a
              partir da análise inteligente dos dados agrícolas.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5 shadow-2xl shadow-black/30">
            <div className="rounded-lg border border-agrosat-critical/30 bg-slate-950/70 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-agrosat-critical">
                Risco ativo
              </p>
              <p className="mt-3 text-4xl font-bold text-agrosat-text">{totalAtivos}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Alertas simulados preparados para futura integração com GET /alertas/ativos e
                resolução via endpoint de resolver alerta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resumo.map((item) => (
            <SummaryCard key={item.label} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              eyebrow="Alertas"
              title="Ocorrências detectadas por NDVI e monitoramento orbital"
              subtitle="Use os filtros para visualizar todos os alertas, apenas ativos, críticos ou já resolvidos."
            />
            <AlertFilter selectedFilter={filtroSelecionado} onChange={setFiltroSelecionado} />
          </div>

          <div className="mt-10 grid gap-5">
            {alertasFiltrados.map((alerta) => (
              <AlertCard key={alerta.id} alerta={alerta} onResolve={handleResolverAlerta} />
            ))}
          </div>

          {alertasFiltrados.length === 0 && (
            <div className="mt-10 rounded-lg border border-white/10 bg-agrosat-card/80 p-8 text-center">
              <p className="text-lg font-bold text-agrosat-text">Nenhum alerta encontrado</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Ajuste o filtro selecionado para visualizar outras ocorrências.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Alertas
