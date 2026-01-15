import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import NavComponent from './components/navComponent'
import backgroundImage from './assets/img/background.jpg';

import CurvedText from './components/curvedText';
import ArrowDownIcon from './components/downArrow';

createRoot(document.getElementById('header')!).render(
  <StrictMode>
    <>
      <NavComponent />
    </>
  </StrictMode>,
)

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <>
      <section id="home">
        <img src={backgroundImage}/>
        <CurvedText />
        <div className="guideButton">
          <h2>More About Me</h2>
          <ArrowDownIcon />
        </div>
      </section>
    </>
  </StrictMode>,
)