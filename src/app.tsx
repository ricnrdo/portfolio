import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import NavComponent from './components/navComponent'

createRoot(document.getElementById('header')!).render(
  <StrictMode>
    <>
      <NavComponent />
    </>
  </StrictMode>,
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <section id="home">

      </section>
    </>
  </StrictMode>,
)