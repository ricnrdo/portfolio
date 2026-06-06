import backgroundImage from '../assets/img/background.jpg';

import CurvedText from '../components/curvedText';
import ArrowDownIcon from '../components/downArrow';
import cutout from '../assets/img/u_headshot.jpeg';
import SkillComponent from '../components/skillComponent';
import CardComponent from '../components/cardComponent';

import { projects } from "../data/projects";

function Home() {
  return (
    <>
      <section id="home">
        <img src={backgroundImage}/>
        <CurvedText />
        <div className="guideButton">
          <h2>More About Me</h2>
          <a href='#about'>
            <ArrowDownIcon />
          </a>
        </div>
      </section>
      <section id="about">
        <div className="text-box">
        <p>
          I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering. My favorite work lies at the intersection of design and development, creating experiences that not only look great but are meticulously built for performance and usability.<br/><br/>

          Currently, I'm a Senior Front-End Engineer at Klaviyo, specializing in accessibility. I contribute to the creation and maintenance of UI components that power Klaviyo’s frontend, ensuring our platform meets web accessibility standards and best practices to deliver an inclusive user experience.<br/><br/>

          In the past, I've had the opportunity to develop software across a variety of settings — from advertising agencies and large corporations to start-ups and small digital product studios. Additionally, I also released a comprehensive video course a few years ago, guiding learners through building a web app with the Spotify API
        </p>
        <a href="/about" className="glass round-bttn">
          Learn More
        </a>
        </div>
        <div className="about-title">
          <div className="divider"></div>
          <h1 className="title">CS Student & Developer</h1>
        </div>
        <div className='cutout-container'>
          <img className="cutout" src={cutout}/>
        </div>
      </section>
      <section id="skills" data-dev-section>
        <div className='skill-title glass'><span>Worked With</span></div>
        <div className="carousel">
          <SkillComponent />
          <SkillComponent ariaHidden />
        </div>
      </section>
      <section id="projects">
        <span className="center">Recent Projects</span>
        <div className="project-container">
          {projects.map((project) => (
            <CardComponent
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
            />
          ))}
        </div>
        <div className="load-more">
          <a href="#home" className='glass round-bttn'>
            More Projects
          </a>
        </div>
      </section>
      <section id="contact">
        <span className="center">Contact Form</span>
        <form action="" method="post">
          <div>
            <input className='glass-depth' type='text' placeholder='First Name'/>
            <input className='glass-depth' type='text' placeholder='Last Name'/>
          </div>
          <input className='glass-depth' type='text' placeholder='Subject'/>
          <textarea className='glass-depth' placeholder='Email Body'></textarea>
          <input className='glass' type='submit' id='submit-btn'/>
        </form>
      </section>
    </>
  )
}

export default Home;