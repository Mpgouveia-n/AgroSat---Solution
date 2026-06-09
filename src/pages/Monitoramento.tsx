import { useEffect, useMemo, useState } from 'react'
import MonitoringCard from '../components/MonitoringCard'
import PropertyCard from '../components/PropertyCard'
import SectionTitle from '../components/SectionTitle'
import SummaryCard from '../components/SummaryCard'
import { listarCapturas } from '../services/capturaService'
import { listarPropriedadesMonitoradas } from '../services/propriedadeService'
import { listarTalhoesMonitorados } from '../services/talhaoService'
import type {
  CapturaSatelite,
  PropriedadeMonitoramento,
  TalhaoMonitoramento,
} from '../types/agrosat'

function Monitoramento() {
  const [propriedades, setPropriedades] = useState<PropriedadeMonitoramento[]>([])
  const [talhoes, setTalhoes] = useState<TalhaoMonitoramento[]>([])
  const [capturas, setCapturas] = useState<CapturaSatelite[]>([])

  useEffect(() => {
    async function carregarDadosMockados() {
      const [propriedadesMock, talhoesMock, capturasMock] = await Promise.all([
        listarPropriedadesMonitoradas(),
        listarTalhoesMonitorados(),
        listarCapturas(),
      ])

      setPropriedades(propriedadesMock)
      setTalhoes(talhoesMock)
      setCapturas(capturasMock)
    }

    carregarDadosMockados()
  }, [])

  const ndviMedio = useMemo(() => {
    if (talhoes.length === 0) {
      return 0
    }

    const totalNdvi = talhoes.reduce((total, talhao) => total + talhao.ndviAtual, 0)
    return totalNdvi / talhoes.length
  }, [talhoes])

  const resumo = [
    {
      label: 'Propriedades Monitoradas',
      value: String(propriedades.length),
      description: 'Áreas agrícolas cadastradas para acompanhamento orbital.',
      tone: 'green' as const,
    },
    {
      label: 'Talhões Monitorados',
      value: String(talhoes.length),
      description: 'Zonas de cultivo acompanhadas por indicadores de vegetação.',
      tone: 'blue' as const,
    },
    {
      label: 'Capturas Registradas',
      value: String(capturas.length),
      description: 'Imagens e leituras orbitais disponíveis no ciclo atual.',
      tone: 'alert' as const,
    },
    {
      label: 'NDVI Médio',
      value: ndviMedio.toFixed(2),
      description: 'Média mockada dos talhões monitorados na plataforma.',
      tone: ndviMedio < 0.3 ? ('critical' as const) : ndviMedio < 0.6 ? ('alert' as const) : ('green' as const),
    },
  ]

  return (
    <>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.18),transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-18 md:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-agrosat-green">
              Visão orbital da lavoura
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-agrosat-text sm:text-5xl lg:text-6xl">
              Monitoramento Agrícola
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
              Acompanhe propriedades, talhões e indicadores NDVI obtidos através de monitoramento
              por satélite.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-agrosat-card/80 p-5 shadow-2xl shadow-black/30">
            <div className="rounded-lg border border-agrosat-blue/30 bg-slate-950/70 p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-agrosat-blue">
                    NDVI orbital
                  </p>
                  <p className="mt-2 text-2xl font-bold text-agrosat-text">{ndviMedio.toFixed(2)}</p>
                </div>
                <span className="rounded-md bg-agrosat-green/15 px-3 py-1 text-xs font-bold text-agrosat-green">
                  {capturas.length} capturas
                </span>
              </div>

              <div className="mt-5 grid grid-cols-5 gap-2">
                {talhoes.map((talhao) => {
                  const color =
                    talhao.status === 'critico'
                      ? 'bg-agrosat-critical'
                      : talhao.status === 'atencao'
                        ? 'bg-agrosat-alert'
                        : 'bg-agrosat-green'

                  return (
                    <div
                      key={talhao.id}
                      className={`aspect-square rounded ${color} opacity-85`}
                      title={`${talhao.identificacaoBloco}: ${talhao.ndviAtual.toFixed(2)}`}
                    />
                  )
                })}
              </div>
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
          <SectionTitle
            eyebrow="Propriedades"
            title="Propriedades agrícolas monitoradas"
            subtitle="Cards preparados para consumir futuramente o endpoint GET /propriedades e listar os talhões por propriedade."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {propriedades.map((propriedade) => (
              <PropertyCard key={propriedade.id} propriedade={propriedade} />
            ))}
          </div>
        </div>
      </section>

      <section id="talhoes-monitorados" className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Talhões"
            title="Indicadores NDVI por talhão"
            subtitle="Cada talhão exibe a leitura atual de NDVI, área monitorada, última captura orbital e satélite utilizado."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {talhoes.map((talhao) => (
              <MonitoringCard key={talhao.id} talhao={talhao} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Monitoramento
