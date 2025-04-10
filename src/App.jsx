import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Listar from './componentes/listar'
import Aleatorio from './componentes/aleatorio'
import Detalle from './componentes/detalle'
import Favoritos from './componentes/favoritos'
import Filtros from './componentes/filtros'
import Menu from './componentes/menu'
import Original from './componentes/original'
import Usuario from './componentes/usuario'

function App() {

  return (
    <Router>

      <Menu />

      <Routes>
        <Route path="/" element={<Listar />} />
        <Route path="/" element={<Aleatorio />} />
        <Route path="/" element={<Detalle />} />
        <Route path="/" element={<Favoritos />} />
        <Route path="/" element={<Filtros />} />
        <Route path="/" element={<Original />} />
        <Route path="/" element={<Usuario />} />
      </Routes>

    </Router>
  )
}

export default App
