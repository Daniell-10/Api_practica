import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import listar from './componentes/listar'

function App() {

  return (
    <Router>

      <menu />

      <Routes>
        <Route path="/" element={<listar />} />
      </Routes>

    </Router>
  )
}

export default App
