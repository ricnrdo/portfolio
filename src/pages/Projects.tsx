import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import CardComponent from '../components/cardComponent';

export default function Projects() {
    return (
        <section id="project" className="default-padding">
            <div className="search-bar glass long-btn">
                <span>Filter</span>
                <div className="glass search">
                    <input type="search" name="search" placeholder="Search Project" id="search" />
                </div>
            </div>
            <div className="all-projects">
                <div className='project-container'>
                    {projects
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
            </div>
        </section>
    );
}