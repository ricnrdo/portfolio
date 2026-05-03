import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import NavComponent from './components/navComponent'

// Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Project from './pages/Project';
import About from './pages/About';

import Home from './pages/Home';

createRoot(document.getElementById('header')!).render(
  <StrictMode>
    <>
      {/* {import.meta.env.DEV && <DevScrollToBottom />} */}
      <NavComponent />
    </>
  </StrictMode>
)

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/project/:id' element={<Project />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)