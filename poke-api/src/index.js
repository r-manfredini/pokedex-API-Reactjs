import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Search from './pages/Search'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pokemon/:id" element={<Pokemon />}></Route>
        <Route path="/search" element={<Search />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
reportWebVitals()
