import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Inicio } from '../pages/Inicio/Inicio'
import { NotFound } from '../pages/NotFound/NotFound'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Conocenos } from '../pages/Conocenos/Conocenos'
import { Equipo } from '../pages/Equipo/Equipo'
import { Biblioteca } from '../pages/Biblioteca/Biblioteca'
import { Contactanos } from '../pages/Contactanos/Contactanos'
import { Servicios } from '../pages/Servicios/Servicios'
import { Proyectos } from '../pages/Proyectos/Proyectos'
import { Productos } from '../pages/Productos/Productos'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      {/* HEADER */}
      <Header />

      <Routes>
        <Route path='/' element={<Navigate to='/inicio' />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/conocenos' element={<Conocenos />} />
        <Route path='/nuestro-equipo' element={<Equipo />} />
        <Route path='/biblioteca-virtual' element={<Biblioteca />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/contactanos' element={<Contactanos />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/servicios' element={<Servicios />} />

        <Route path='*' element={<NotFound />} />
      </Routes>

      {/* FOOTER */}
      <Footer/>
    </BrowserRouter>
  )
}
