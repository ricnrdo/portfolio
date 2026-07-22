import backgroundImage from '../assets/img/background.jpg';

// Assets to support design
import CurvedText from '../components/curvedText';
import ArrowDownIcon from '../components/downArrow';
import cutout from '../assets/img/cutout.png';
import Snowpile from '../assets/img/snowpile.svg?react';
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
    </>
  )
}

export default Home;