import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Alertas from '../pages/Alertas'
import Dashboard from '../pages/Dashboard'
import FAQ from '../pages/FAQ'
import Home from '../pages/Home'
import Monitoramento from '../pages/Monitoramento'
import Relatorios from '../pages/Relatorios'
import Sobre from '../pages/Sobre'
import Tecnologia from '../pages/Tecnologia'

function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="tecnologia" element={<Tecnologia />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="monitoramento" element={<Monitoramento />} />
        <Route path="alertas" element={<Alertas />} />
        <Route path="relatorios" element={<Relatorios />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
