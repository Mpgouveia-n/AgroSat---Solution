# AgroSat Solution

## Monitoramento Inteligente de Plantações via Satélite

**Global Solution - FIAP**

O **AgroSat** é uma plataforma web desenvolvida para monitoramento inteligente de plantações utilizando dados obtidos por satélites, análise do índice **NDVI (Normalized Difference Vegetation Index)** e recursos de **Inteligência Artificial**.

A solução auxilia produtores rurais na tomada de decisão por meio de monitoramento remoto, alertas automáticos e análise da saúde da vegetação, aproximando tecnologia espacial da agricultura sustentável.

---

## Descrição do Projeto

O AgroSat utiliza imagens de satélite e dados espectrais para avaliar a saúde das lavouras. A partir do NDVI, a plataforma permite identificar áreas com possível estresse hídrico, queda de vigor vegetal, risco de pragas ou perda de produtividade.

Com uma interface moderna e responsiva, o sistema apresenta dashboards, indicadores, alertas e relatórios para apoiar pequenos e médios produtores rurais em decisões mais rápidas, inteligentes e sustentáveis.

---

## Problema

Produtores rurais enfrentam diversos desafios no acompanhamento das lavouras:

- Detecção tardia de pragas.
- Estresse hídrico não identificado rapidamente.
- Perda de produtividade por falta de monitoramento contínuo.
- Dificuldade de acesso a tecnologias avançadas.
- Dependência de inspeções manuais espaçadas.

Esses fatores podem gerar prejuízos significativos e dificultar o uso eficiente de recursos como água, insumos e mão de obra.

---

## Solução

O AgroSat propõe um fluxo de análise simples e inteligente:

```text
Satélite
↓
Captura de Dados
↓
NDVI
↓
Inteligência Artificial
↓
Alertas
↓
Tomada de Decisão
```

A plataforma transforma dados espaciais em informações visuais e acionáveis para o produtor rural.

---

## Tecnologias Utilizadas

### Front-End

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

### Back-End

- Java
- Quarkus
- REST API

### Banco de Dados

- Oracle Database

### Inteligência Artificial

- Python
- Machine Learning
- Classificação de Saúde Vegetal
- NDVI

### Infraestrutura

- GitHub
- Render
- Vercel

---

## Funcionalidades

### Home

Apresenta a proposta do AgroSat, seus benefícios e o fluxo geral da solução.

### Sobre

Explica o problema, a solução, o uso de tecnologia espacial, NDVI e Inteligência Artificial.

### FAQ

Página interativa com perguntas frequentes sobre o funcionamento do AgroSat, limitações do MVP e tecnologias utilizadas.

### Integrantes

Apresenta os membros da equipe, funções no projeto, RM, turma e links profissionais.

### Monitoramento

Exibe propriedades agrícolas, talhões monitorados, NDVI atual, capturas de satélite e status visual das áreas.

### Alertas

Central para visualização de alertas ativos, resolvidos, severidade e recomendações técnicas.

### Relatórios

Mostra evolução do NDVI, capturas orbitais analisadas e indicadores técnicos por talhão.

### Dashboard

Painel geral que consolida propriedades, talhões, alertas, capturas, NDVI médio e ações rápidas.

---

## Estrutura de Pastas

Estrutura principal do front-end:

```text
src/
├── assets/
├── components/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── services/
├── types/
└── utils/
```

---

## Autores

| Integrante | RM |
|---|---|
| Manuel Pedro de Gouveia Neto | RM 567458 |
| Vinicius Morrone | RM 566884 |
| Lucas Shida Rodrigues da Costa | RM 568194 |
| Carlos Aurelio Tolosa Bianchi | RM 567897 |

---

## Links Oficiais do Projeto

- **Front-End GitHub:** [AgroSat---Solution](https://github.com/Mpgouveia-n/AgroSat---Solution)
- **Back-End GitHub:** [AgroSat](https://github.com/viniciusmorrone/AgroSat)
- **API Render:** [https://agrosat-t056.onrender.com](https://agrosat-t056.onrender.com)
- **Deploy Vercel:** [https://agro-sat-solution.vercel.app](https://agro-sat-solution.vercel.app)

---

## Como Utilizar

### 1. Clonar o repositório

```bash
git clone https://github.com/Mpgouveia-n/AgroSat---Solution.git
```

### 2. Acessar a pasta do projeto

```bash
cd AgroSat---Solution
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com:

```env
VITE_API_BASE_URL=https://agrosat-t056.onrender.com
```

Para usar a API local:

```env
VITE_API_BASE_URL=http://localhost:8080
```

### 5. Executar em ambiente de desenvolvimento

```bash
npm run dev
```

### 6. Gerar build de produção

```bash
npm run build
```

---

## Imagens

Em breve serão adicionadas capturas de tela das principais funcionalidades do AgroSat.

---

## Vídeo Demonstrativo

Link do vídeo:

**A ser adicionado após publicação no YouTube.**

---

## Contato

- **GitHub Front-End:** [https://github.com/Mpgouveia-n/AgroSat---Solution](https://github.com/Mpgouveia-n/AgroSat---Solution)
- **GitHub Back-End:** [https://github.com/viniciusmorrone/AgroSat](https://github.com/viniciusmorrone/AgroSat)

### Manuel Pedro de Gouveia Neto

- **RM:** 567458
- **LinkedIn:** [manuel-pedro-gouveia-neto-89928638a](https://www.linkedin.com/in/manuel-pedro-gouveia-neto-89928638a/)
- **GitHub:** [Mpescorpion](https://github.com/Mpescorpion)

### Vinicius Morrone

- **RM:** 566884
- **LinkedIn:** [vinícius-morrone-lustosa](https://www.linkedin.com/in/vinícius-morrone-lustosa/)
- **GitHub:** [viniciusmorrone](https://github.com/viniciusmorrone)

### Lucas Shida Rodrigues da Costa

- **RM:** 568194
- **LinkedIn:** [lucas-shida](https://www.linkedin.com/in/lucas-shida/)
- **GitHub:** [LucasShida](https://github.com/LucasShida)

### Carlos Aurelio Tolosa Bianchi

- **RM:** 567897
- **LinkedIn:** [carlos-bianchi-6608a3272](https://www.linkedin.com/in/carlos-bianchi-6608a3272/)
- **GitHub:** [Carlos-Bianchi](https://github.com/Carlos-Bianchi)

---

## Global Solution FIAP

O AgroSat foi desenvolvido como projeto da **Global Solution FIAP**, com o tema:

> **Tecnologia Espacial aplicada à Agricultura Sustentável**

A proposta demonstra como dados orbitais, Inteligência Artificial e interfaces digitais podem apoiar a agricultura, reduzir perdas e promover decisões baseadas em dados.
