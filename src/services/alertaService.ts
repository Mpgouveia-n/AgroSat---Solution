import type { AlertaGerado } from '../types/agrosat'

const alertasMock: AlertaGerado[] = [
  {
    id: 1,
    tipo: 'Queda acentuada de NDVI',
    descricao:
      'O Talhão Sul apresentou queda abaixo do padrão esperado para a cultura monitorada.',
    recomendacao:
      'Priorizar inspeção em campo e verificar sinais de pragas, falhas de irrigação ou compactação do solo.',
    severidade: 'alta',
    status: 'ATIVO',
    dataGeracao: '2025-03-07T10:30:00',
    idTalhao: 8,
    talhao: 'Área Experimental',
    propriedade: 'Chácara Vale Azul',
  },
  {
    id: 2,
    tipo: 'Possível estresse hídrico',
    descricao:
      'A leitura orbital indica redução de vigor vegetal em uma faixa central do talhão.',
    recomendacao:
      'Conferir umidade do solo e ajustar o planejamento de irrigação nos próximos ciclos.',
    severidade: 'media',
    status: 'ATIVO',
    dataGeracao: '2025-03-06T14:15:00',
    idTalhao: 4,
    talhao: 'Talhão Leste',
    propriedade: 'Sítio Horizonte Verde',
  },
  {
    id: 3,
    tipo: 'Área com risco de baixa produtividade',
    descricao:
      'O NDVI médio do talhão permanece em faixa de atenção por duas capturas consecutivas.',
    recomendacao:
      'Comparar o histórico NDVI e avaliar adubação, irrigação e presença de plantas daninhas.',
    severidade: 'media',
    status: 'ATIVO',
    dataGeracao: '2025-03-05T09:40:00',
    idTalhao: 10,
    talhao: 'Bloco Raiz',
    propriedade: 'Sítio Raiz Forte',
  },
  {
    id: 4,
    tipo: 'Vegetação abaixo do padrão esperado',
    descricao:
      'O talhão apresentou variação pontual de vigor, mas ainda sem indicativo crítico.',
    recomendacao:
      'Manter acompanhamento por satélite e revisar a próxima captura antes de abrir manejo corretivo.',
    severidade: 'baixa',
    status: 'RESOLVIDO',
    dataGeracao: '2025-03-02T11:10:00',
    idTalhao: 5,
    talhao: 'Talhão Oeste',
    propriedade: 'Sítio Horizonte Verde',
  },
  {
    id: 5,
    tipo: 'Anomalia localizada em borda de talhão',
    descricao:
      'Uma área periférica mostrou resposta espectral inferior ao restante da zona monitorada.',
    recomendacao:
      'Verificar sombreamento, bordadura, falhas de plantio ou interferências na imagem orbital.',
    severidade: 'baixa',
    status: 'RESOLVIDO',
    dataGeracao: '2025-02-28T16:20:00',
    idTalhao: 2,
    talhao: 'Talhão Central',
    propriedade: 'Fazenda Boa Esperança',
  },
  {
    id: 6,
    tipo: 'NDVI crítico detectado automaticamente',
    descricao:
      'Registro de NDVI inferior a 0.30, compatível com a regra crítica documentada para geração automática de alertas.',
    recomendacao:
      'Acionar responsável técnico e validar a condição da vegetação no ponto indicado pelo monitoramento.',
    severidade: 'alta',
    status: 'ATIVO',
    dataGeracao: '2025-02-27T08:50:00',
    idTalhao: 8,
    talhao: 'Área Experimental',
    propriedade: 'Chácara Vale Azul',
  },
]

export async function listarAlertas() {
  return alertasMock
}

export async function listarAlertasAtivos() {
  return alertasMock.filter((alerta) => alerta.status === 'ATIVO')
}

export async function resolverAlerta(id: number) {
  const alerta = alertasMock.find((item) => item.id === id)

  if (!alerta) {
    throw new Error('Alerta não encontrado.')
  }

  return {
    ...alerta,
    status: 'RESOLVIDO' as const,
  }
}
