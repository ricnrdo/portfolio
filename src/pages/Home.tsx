import backgroundImage from '../assets/img/background.jpg';

// Assets to support design
import CurvedText from '../components/curvedText';
import ArrowDownIcon from '../components/downArrow';
import cutout from '../assets/img/cutout.png';
import Snowpile from '../assets/img/snowpile.svg?react';
import Logo from '../assets/img/logo.svg?react';

import SkillComponent from '../components/skillComponent';
import CardComponent from '../components/cardComponent';

import { projects } from "../data/projects";

function Home() {
  return (
    <>
      <section id="home">
        <img src={backgroundImage}/>
        <CurvedText />
        <div className="guideButton default-padding">
          <span className='h2'>More About Me</span>
          <a href='#about' className='glass'>
            <ArrowDownIcon />
          </a>
        </div>
      </section>
      <section id="about" className='grid default-padding'>
        <div className="multi-pg h2">
          <div className='text'>
            <p>
              I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.<br/><br/>

              Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.<br/><br/>

              In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API
              In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API
            </p>
          </div>
          <a href="/about" className="glass long-btn">
            Learn More
          </a>
        </div>
        <div className="about-title">
          <div className="divider"></div>
          <div className="h1">Aspiring Software Developer</div>
        </div>
        <div className='cutout'>
          <img src={cutout}/>
        </div>
      </section>
      <section id="skills" data-dev-section>
        <SkillComponent />
      </section>
      <section id="projects">
        <span className='h1'>Featured Projects</span>
        <div className='project-container default-padding'>
          {projects
            .filter(projects => projects.featured)
            .map((project) => (
                <CardComponent
                  key={project.id}
                  id={project.id}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                />
          ))}
        </div>
        <a href="/projects" className='long-btn h2 glass'>
          More Projects
        </a>
        <div className='snowpile'>
          <Snowpile className='pile1'/>
          <Snowpile className='pile2'/>
        </div>
      </section>
      <section id="contact" className='default-padding'>
        <span className='h1'>Contact Form</span>
        <form action="" method="post">
          <div>
            <input id='name1' className='glass-depth h3' type='text' placeholder='First Name'/>
            <input id='name2' className='glass-depth h3' type='text' placeholder='Last Name'/>
          </div>
          <input id='name3' className='glass-depth h3' type='text' placeholder='Subject'/>
          <textarea id='name4' className='glass-depth h3' placeholder='Email Body'></textarea>
          <input className='glass-depth long-btn h3' type='submit' id='submit-btn'/>
        </form>
      </section>
      <section id='footer' className='default-padding'>
        <div className="copyright">
          <a href="/">
            <Logo className='logo'/>
          </a>
          <p className='h3'>© 2026 Ricardo Puma. All rights reserved.</p>
        </div>
        <div className="socials">
          <a className='icon' href="https://instagram.com/ricnrdo">
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248m0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008m4.807-8.875a1.078 1.078 0 1 0 0 2.156 1.078 1.078 0 1 0 0-2.156"></path><path d="M20.533 6.111A4.6 4.6 0 0 0 17.9 3.479a6.6 6.6 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.6 6.6 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.6 6.6 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71s0 2.753.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.6 6.6 0 0 0 2.186-.419 4.6 4.6 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.6 6.6 0 0 0-.421-2.217m-1.218 9.532a5 5 0 0 1-.311 1.688 3 3 0 0 1-1.712 1.711 5 5 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a5 5 0 0 1-1.669-.311 3 3 0 0 1-1.719-1.711 5.1 5.1 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654s0-2.686.053-3.655a5 5 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5 5 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a5 5 0 0 1 1.67.311 3 3 0 0 1 1.712 1.712 5.1 5.1 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655s0 2.698-.043 3.654z"></path>
            </svg>
          </a>
          <a className='icon' href="https://github.com/ricnrdo">
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path fill-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.6 9.6 0 0 1 2.496-.336 9.6 9.6 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a className='icon' href="https://linkedin.com/in/ricnrdo">
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
              fill="currentColor" viewBox="0 0 24 24" >
              <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376m4.254 6.034v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path>
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}

export default Home;