import cutout from '../assets/img/cutout.png';
import plattsLogo from '../assets/img/plattsburgh-logo.png';
import diploma from '../assets/img/diploma.jpg';
import nyuLogo from '../assets/img/nyu-logo.png';

import imageSec from '../assets/img/headshot.jpeg';

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
            <section id="motivation" className='default-padding'>
                <span className="h1">What Motivates Me?</span>
                <div className='project-container'>
                    <div>
                        <a className='h3 glass long-btn'>Professional Advancement</a>
                        <img src={imageSec}/>
                    </div>
                    <div>
                        <a className='h3 glass long-btn'>Community</a>
                        <img src={imageSec}/>
                    </div>
                    <div>
                        <a className='h3 glass long-btn'>Family</a>
                        <img src={imageSec}/>
                    </div>
                    <div>
                        <a className='h3 glass long-btn'>Locations</a>
                        <img src={imageSec}/>
                    </div>
                </div>
            </section>
            <section id="certifications" className='default-padding'>
                <span className='h1'>Certifications</span>
                <div className="multi-pg">
                    <a href="" className="card glass">
                        <img src={diploma}/>
                    </a>
                    <a href="" className="card glass">
                        <img src={imageSec}/>
                    </a>
                </div>
            </section>
            <section id="github" className='default-padding'>
                <span className='h1'>GitHub Activity</span>
                <GitHubCalendar blockSize={18} blockMargin={6} blockRadius={3} fontSize={15} className='git-activity' username="ricnrdo" />
            </section>
            <section id="resume" className='default-padding'>
                <div className="multi-pg">
                    <span className="h2">Get Access To My Detailed Resume Here:</span>
                    <a href="" className="h3 glass long-btn">Download Resume</a>
                </div>
            </section>
        </div>
    );
}