import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/main.css'
import NavComponent from './components/navComponent'
import backgroundImage from './assets/img/background.jpg';

import CurvedText from './components/curvedText';
import ArrowDownIcon from './components/downArrow';
import cutout from './assets/img/cutout.png';

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
      <section id="about">
        <div className="text-box">
        <p>
          I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.<br/><br/>

          Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.<br/><br/>

          In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API
        </p>
        <a href="#home" className="glass">
          Learn More
        </a>
        </div>
        <div className="about-title">
          <div className="divider"></div>
          <h1 className="title">CS Student & Developer</h1>
        </div>
        <div className='cutout-container'>
          <img className="cutout" src={cutout} width={200}/>
        </div>
      </section>
    </>
  </StrictMode>,
)