import { Link } from "react-router-dom";

type CardComponentProps = {
    id: string;
    image: string;
    title: string;
    description: string;
};

export default function CardComponent({ id, image, title, description }: CardComponentProps) {
    return (
        <div className="project-card glass">
            <Link className="link-to-project" to={`/project/${id}`}>
                <div className="project-image">
                    <img src={image} alt={`Click here to see ${title}`} />
                </div>
            </Link>
            <span className='h2'>{title}</span>
            <p className='h4'>{description}</p>
            <a className='long-btn glass'>See More</a>
        </div>
    )
}