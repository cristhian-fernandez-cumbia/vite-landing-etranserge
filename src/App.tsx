import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import { Inicio, Nosotros, Programas, Proyectos, Equipos, Contactanos } from './pages'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/programas" element={<Programas />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/equipos" element={<Equipos />} />
            <Route path="/contactanos" element={<Contactanos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}