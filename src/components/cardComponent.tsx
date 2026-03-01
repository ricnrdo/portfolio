import ProjectPP from "../assets/img/project-pp.png";

type CardComponentProps = {
    img: string;
    link: string;
    description: string;
    title: string;
}

// export default function CardComponent({ img, link, description, title } : CardComponentProps) {
//     return (
//         <>

//         </>
//     )
// };

export default function CardComponent() {
    return (
        <div className="project-card glass">
            <a className="link-to-project">
                <div className="project-image">
                    <img src={ProjectPP} alt="Click here to see Personal Portfolio Project" />
                </div>
            </a>
            <div className="project-title">
                Personal Portfolio
            </div>
            <div className="project-description">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum tempore, iusto, doloremque aperiam dolores repellat nesciunt obcaecati deleniti fuga sequi suscipit ex iure. Architecto eligendi accusamus earum sit, unde dicta.</p>
            </div>
        </div>
    )
}