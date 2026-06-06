import cutout from '../assets/img/headshot.jpeg';
// import git from '../assets/img/git.png';

export default function About() {

    return (
        <section id="about-me">
            <div className="left-panel">
                <div className="photo"><img src={cutout}/></div>
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