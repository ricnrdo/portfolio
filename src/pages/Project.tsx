import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function Project() {
    const { id } = useParams();
    const project = projects.find((item) => item.id === id);

    if (!project) {
        return (
            <section id="project">
                <div className="left-panel">
                    <div className="title"><h1>Project Not Found</h1></div>
                    <p>The project you are looking for does not exist.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="project">
            <div className="left-panel">
                <div className="title"><h1>{project.title}</h1></div>

                <a className="image" href={project.demo ?? project.github ?? "#"} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.title}/>
                </a>

                <div className="links">
                    {project.github && (
                        <a className="glass round-bttn" href={project.github} target="_blank" rel="noreferrer">
                            <span>GitHub</span>
                        </a>
                    )}

                    {project.demo && (
                        <a className="glass round-bttn" href={project.demo} target="_blank" rel="noreferrer">
                            <span>Demo</span>
                        </a>
                    )}
                </div>

                <p>{project.description}</p>
            </div>

            <div className="right-panel">
                <div className="dividers">
                    <div className="title"><h1>Why I Built It</h1></div>
                    <div className="description">
                        <p>{project.whyBuilt}</p>
                    </div>
                </div>

                <div className="dividers">
                    <div className="title"><h1>How it Works</h1></div>
                    <div className="description">
                        <p>{project.howItWorks}</p>
                    </div>
                </div>

                <div className="dividers">
                    <div className="title"><h1>Technologies Used</h1></div>
                    <div className="description">
                        <ul>
                            {project.technologies.map((tech) => (
                                <li key={tech}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="dividers">
                    <div className="title"><h1>Key Features</h1></div>
                    <div className="description">
                        <ul>
                            {project.features.map((feature) => (
                                <li key={feature}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="dividers">
                    <div className="title"><h1>Challenges</h1></div>
                    <div className="description">
                        <p>{project.challenges}</p>
                    </div>
                </div>

            </div>
        </section>
    );
}