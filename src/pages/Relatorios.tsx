import { useEffect, useMemo, useState } from 'react'
import CaptureCard from '../components/CaptureCard'
import NdviTimeline from '../components/NdviTimeline'
import ReportCard from '../components/ReportCard'
import ReportFilter from '../components/ReportFilter'
import SectionTitle from '../components/SectionTitle'
import SummaryCard from '../components/SummaryCard'
import {
  listarCapturasRelatorio,
  listarRelatoriosTalhao,
} from '../services/historicoNdviService'
import type {
  CapturaRelatorio,
  FiltroRelatorio,
  PeriodoRelatorio,
  RelatorioTalhao,
} from '../types/agrosat'

function Relatorios() {
  const [filtroSelecionado, setFiltroSelecionado] = useState<FiltroRelatorio>('todos')
  const [periodoSelecionado, setPeriodoSelecionado] = useState<PeriodoRelatorio>('30d')
  const [relatorios, setRelatorios] = useState<RelatorioTalhao[]>([])
  const [capturas, setCapturas] = useState<CapturaRelatorio[]>([])

  useEffect(() => {
    async function carregarDadosMockados() {
      const [relatoriosMock, capturasMock] = await Promise.all([
        listarRelatoriosTalhao(periodoSelecionado),
        listarCapturasRelatorio(),
      ])

      setRelatorios(relatoriosMock)
      setCapturas(capturasMock)
    }

    carregarDadosMockados()
  }, [periodoSelecionado])

  const relatoriosFiltrados = useMemo(() => {
    return relatorios.filter((relatorio) => {
      if (filtroSelecionado === 'saudaveis') {
        return relatorio.status === 'saudavel'
      }

      if (filtroSelecionado === 'atencao') {
        return relatorio.status === 'atencao'
      }

      if (filtroSelecionado === 'criticos') {
        return relatorio.status === 'critico'
      }

      return true
    })
  }, [relatorios, filtroSelecionado])

  const ndviMedioGeral = useMemo(() => {
    if (relatorios.length === 0) {
      return 0
    }

    const total = relatorios.reduce((sum, relatorio) => sum + relatorio.ndviMedio, 0)
    return total / relatorios.length
  }, [relatorios])

  const melhorTalhao = relatorios.reduce<RelatorioTalhao | null>((melhor, relatorio) => {
    if (!melhor || relatorio.ndviMedio > melhor.ndviMedio) {
      return relatorio
    }

    return melhor
  }, null)

  const talhoesRisco = relatorios.filter((relatorio) => relatorio.status !== 'saudavel').length

  const resumo = [
    {
      label: 'Média geral NDVI',
      value: ndviMedioGeral.toFixed(2),
      description: 'Média consolidada dos talhões no período selecionado.',
      tone: ndviMedioGeral < 0.3 ? ('critical' as const) : ndviMedioGeral < 0.6 ? ('alert' as const) : ('green' as const),
    },
    {
      label: 'Melhor desempenho',
      value: melhorTalhao?.talhao ?? '-',
      description: melhorTalhao ? `NDVI médio ${melhorTalhao.ndviMedio.toFixed(2)}` : 'Sem dados disponíveis.',
      tone: 'blue' as const,
    },
    {
      label: 'Talhões em risco',
      value: String(talhoesRisco),
      description: 'Talhões em atenção ou críticos que exigem acompanhamento.',
      tone: talhoesRisco > 0 ? ('alert' as const) : ('green' as const),
    },
    {
      label: 'Capturas analisadas',
      value: String(capturas.length),
      description: 'Registros orbitais considerados nos relatórios mockados.',
      tone: 'blue' as const,
    },
  ]

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.16),transparent_36%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
              Análise agrícola
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-agrosat-text sm:text-5xl lg:text-6xl">
              Relatórios Inteligentes
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Analise a evolução do NDVI, capturas de satélite e desempenho dos talhões monitorados
              pelo AgroSat.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5 shadow-2xl shadow-black/30">
            <div className="rounded-lg border border-agrosat-blue/30 bg-slate-950/70 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
                Relatório orbital
              </p>
              <p className="mt-3 text-4xl font-bold text-agrosat-text">
                {ndviMedioGeral.toFixed(2)}
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Média NDVI consolidada com base em histórico mockado e capturas de satélite.
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
          <div className="grid gap-8">
            <SectionTitle
              eyebrow="Filtros"
              title="Explore os relatórios por status e período"
              subtitle="A seleção simula o comportamento futuro de consultas aos endpoints de histórico NDVI e capturas."
            />
            <ReportFilter
              filtro={filtroSelecionado}
              periodo={periodoSelecionado}
              onFiltroChange={setFiltroSelecionado}
              onPeriodoChange={setPeriodoSelecionado}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Evolução NDVI"
            title="Timeline visual de desempenho dos talhões"
            subtitle="Visualização simples feita com Tailwind para simular a evolução do NDVI sem biblioteca externa de gráficos."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatoriosFiltrados.map((relatorio) => (
              <NdviTimeline
                key={relatorio.id}
                label={relatorio.talhao}
                values={relatorio.historico}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950/40 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Relatório por talhão"
            title="Indicadores técnicos consolidados"
            subtitle="Cada relatório resume status, amplitude de NDVI, última captura e recomendação técnica."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {relatoriosFiltrados.map((relatorio) => (
              <ReportCard key={relatorio.id} relatorio={relatorio} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Capturas de satélite"
            title="Imagens orbitais consideradas na análise"
            subtitle="Cards preparados para futura integração com GET /capturas e GET /capturas/{id}."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capturas.map((captura) => (
              <CaptureCard key={captura.id} captura={captura} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Relatorios
