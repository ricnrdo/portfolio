import { useParams } from "react-router-dom";
import cutout from '../assets/img/no-cutout.jpeg';
// import git from '../assets/img/git.png';

export default function Project() {
    const { id } = useParams();

    return (
        <section id="project">
            <div className="left-panel">
                <div className="title"><h1>/{id}</h1></div>
                <a className="image"><img src={cutout}/></a>
                <div className="links">
                    <a className="glass round-bttn"><span>Github</span></a>
                    <a className="glass round-bttn"><span>Demo</span></a>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta dolores ipsum laborum cumque et voluptatum aliquid? Veniam nihil corrupti facilis, dolor qui esse accusantium minima nobis? Eius corporis maiores placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ea ipsum excepturi repellat deleniti. Minima sunt aperiam quasi cupiditate, repellat optio impedit, ab accusantium asperiores inventore enim quos molestias. Eos.</p>
            </div>
            <div className="right-panel">
                <div className="dividers" id="divider-one">
                    <div className="title"><h1>My Role</h1></div>
                    <div className="description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non doloremque eum eius sit est laborum eos maiores minima incidunt molestias, voluptatibus ducimus fugiat explicabo modi commodi! Libero cum aspernatur eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quod placeat corrupti fugiat perferendis laboriosam rem ab veniam illum, maiores vero saepe accusamus, reiciendis, accusantium doloremque natus modi voluptatem commodi?</p>
                    </div>
                </div>
                <div className="dividers" id="divider-one">
                    <div className="title"><h1>Technologies Used</h1></div>
                    <div className="description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non doloremque eum eius sit est laborum eos maiores minima incidunt molestias, voluptatibus ducimus fugiat explicabo modi commodi! Libero cum aspernatur eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quod placeat corrupti fugiat perferendis laboriosam rem ab veniam illum, maiores vero saepe accusamus, reiciendis, accusantium doloremque natus modi voluptatem commodi?</p>
                    </div>
                </div>
                <div className="dividers" id="divider-one">
                    <div className="title"><h1>Key Features</h1></div>
                    <div className="description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non doloremque eum eius sit est laborum eos maiores minima incidunt molestias, voluptatibus ducimus fugiat explicabo modi commodi! Libero cum aspernatur eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quod placeat corrupti fugiat perferendis laboriosam rem ab veniam illum, maiores vero saepe accusamus, reiciendis, accusantium doloremque natus modi voluptatem commodi?</p>
                    </div>
                </div>
                <div className="dividers" id="divider-one">
                    <div className="title"><h1>My Role</h1></div>
                    <div className="description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non doloremque eum eius sit est laborum eos maiores minima incidunt molestias, voluptatibus ducimus fugiat explicabo modi commodi! Libero cum aspernatur eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quod placeat corrupti fugiat perferendis laboriosam rem ab veniam illum, maiores vero saepe accusamus, reiciendis, accusantium doloremque natus modi voluptatem commodi?</p>
                    </div>
                </div>
                <div className="dividers" id="divider-one">
                    <div className="title"><h1>What I Learned?</h1></div>
                    <div className="description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non doloremque eum eius sit est laborum eos maiores minima incidunt molestias, voluptatibus ducimus fugiat explicabo modi commodi! Libero cum aspernatur eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quod placeat corrupti fugiat perferendis laboriosam rem ab veniam illum, maiores vero saepe accusamus, reiciendis, accusantium doloremque natus modi voluptatem commodi?</p>
                    </div>
                </div>
                <div className="dividers" id="divider-one">
                    <div className="title"><h1>Screenshots</h1></div>
                    <div className="description">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non doloremque eum eius sit est laborum eos maiores minima incidunt molestias, voluptatibus ducimus fugiat explicabo modi commodi! Libero cum aspernatur eum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quod placeat corrupti fugiat perferendis laboriosam rem ab veniam illum, maiores vero saepe accusamus, reiciendis, accusantium doloremque natus modi voluptatem commodi?</p>
                    </div>
                </div>
            </div>
        </section>
    );
}