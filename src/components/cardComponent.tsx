import { Link } from "react-router-dom";

type CardComponentProps = {
    id: string;
    image: string;
    title: string;
};

export default function CardComponent({ id, image, title }: CardComponentProps) {
    return (
        <div className="project-card glass">
            <Link className="link-to-project" to={`/project/${id}`}>
                <div className="project-image">
                    <img src={image} alt={`Click here to see ${title}`} />
                </div>
            </Link>
        </div>
    )
}