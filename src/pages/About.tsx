import cutout from '../assets/img/cutout.png';
import plattsLogo from '../assets/img/plattsburgh-logo.png';
import diploma from '../assets/img/diploma.jpg';
import nyuLogo from '../assets/img/nyu-logo.png';

import {GitHubCalendar} from "react-github-calendar";
// import git from '../assets/img/git.png';

export default function About() {

    return (
        <div>
            <section id='begin' className='default-padding'>
                <span className='h1'>Ready To Get<br/>To Know Me?</span>
                <span className="h2">Lets Start with My Education</span>
                <div className="cutout">
                    <img src={cutout}/>
                </div>
            </section>
            <section id='education' className='default-padding'>
                <div className="multi-pg">
                    <img className='red-logo' src={plattsLogo}/>
                    <div className='h2'>
                        <p>August 2023 - May 2026</p><br/>
                        <p>Graduated from SUNY Plattsburgh with a Bachelor of Science in Computer Science.</p><br/>
                        <p>During my academic years at Plattsburgh, I was involved in clubs such as Mail-A-Hug and the Association for Computing Machinery. Holding positions such as Treasurer and President.</p><br/>
                        <p>I also became a Community Advocate in my sophomore year until graduation. Demonstrating strong support towards my community.</p><br/>
                        <p>To verify my credential use CeDiD: 262Y-9Q4P-RZAV</p><br/>
                    </div>
                </div>
                <div className='certification'>
                    <img src={diploma}/>
                    <a href="https://www.plattsburgh.edu/about/offices-divisions/registrar/cediploma/validate.html" className='glass long-btn'>Verify Credentials</a>
                </div>
            </section>
            <section id='education' className='ed2 default-padding'>
                <div className="multi-pg">
                    <span className='h1'>Starting Fall 2026</span>
                    <span className='h3'>Master of Science in Emerging Technologies</span>
                </div>
                <img src={nyuLogo}/>
            </section>
            <section id="motivation">
                <span className="h1">What Motivates Me?</span>
            </section>
            {/* <section id="about-me">
                <div className="wrapper flex columns">
                    <div className="left-panel">
                        <div className="photo"><img src={cutout}/></div>
                        <a href="https://linkedin.com/in/ricnrdo" className="glass round-bttn">
                            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                                fill="currentColor" viewBox="0 0 24 24" >
                                <path d="M4.983 2.821a2.188 2.188 0 1 0 0 4.376 2.188 2.188 0 1 0 0-4.376m4.254 6.034v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66zm-6.142 0H6.87v12.139H3.095z"></path>
                            </svg>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <div className="right-panel">
                        <div className="dividers" id="divider-default">
                            <div className="title"><h1>About Me</h1></div>
                            <div className="description">
                                <p>
                                    Hey There! My name is Ricardo Puma. I recently graduated with my Bachelor of Science in Computer Science. I actually started getting interest in Computer Science at a relatively young age. During my robotics course in High School, I realized I may be interested in tech afterall. And a couple years after, I followed that path and now I can proudly say I accomplished my dream.
                                </p>
                                <br/>
                                <p>
                                    A valuable lesson I learned is that meaningful things are often built from pieces that may seem insignificant on their own. Whether it is ideas, opportunities, or people, I enjoy finding ways to bring those pieces together and create something with purpose. Through my experience in community service and leadership, I learned that even the smallest contributions can become part of something much greater. That is a mindset I hope to carry into my work as an aspiring Software Engineer.
                                </p>
                                <br/>
                                <p>
                                    After graduation, I have found myself working on this portfolio website, and thereafter will continue on building many of the ideas that I have came up for the last couple of years. It's time to make those a reality.
                                </p>
                            </div>
                        </div>
                        <div className="dividers" id="divider-default">
                            <div className="title"><h1>Education</h1></div>
                            <div className="description">
                                <p>
                                    NYU Tandon - September 2026 to May 2028 <br/>
                                    Master of Science in Emerging Technologies
                                </p>
                                <br/>
                                <p>
                                    SUNY Plattsburgh - Aug 2023 to May 2026 <br/>
                                    Bachelor of Science in Computer Science
                                </p>
                            </div>
                        </div>
                        <div className="dividers" id="divider-default">
                            <div className="title"><h1>Technologies</h1></div>
                            <div className="description">
                                <p>
                                    React Native
                                </p>
                                <p>
                                    Javascript
                                </p>
                                <p>
                                    Python
                                </p>
                            </div>
                        </div>
                        <div className="dividers" id="divider-default">
                            <div className="title"><h1>Current Goals</h1></div>
                            <div className="description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam deleniti a id quis. Saepe, iste assumenda libero cumque ducimus eveniet distinctio odit itaque voluptates natus doloremque possimus aliquam labore minus?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wrapper resume">
                    <div className="title">
                        <h1>Resume</h1>
                    </div>
                    <iframe
                        src="/resume.pdf"
                        width="100%"
                        height="600"
                        title="Resume"
                    />
                </div>
                <div className="wrapper git">
                    <div className="title">
                        <h1>GitHub Activity</h1>
                    </div>
                    <GitHubCalendar username="ricnrdo" />
                </div>
            </section> */}
        </div>
    );
}