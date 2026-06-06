import cutout from '../assets/img/headshot.jpeg';
// import git from '../assets/img/git.png';

export default function About() {

    return (
        <section id="about-me">
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
                            My name is Ricardo Puma. I’m a computer science student interested in building clean, accessible, and practical web experiences. I enjoy working on projects that combine design and functionality, especially when I can take an idea and turn it into something people can actually use.
                        </p>
                        <br/>
                        <p>
                            My work mainly focuses on frontend development, responsive layouts, and creating reusable components. I’m currently improving my skills in React, TypeScript, and modern web development while continuing to explore how thoughtful design can make technology easier to understand and use.
                        </p>
                        <br/>
                        <p>
                            Outside of coding, I enjoy learning through hands-on projects, experimenting with new tools, and finding better ways to organize and present information. I’m always looking for opportunities to grow as a developer and build projects that feel both useful and polished.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}