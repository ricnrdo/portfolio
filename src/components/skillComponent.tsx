// Import all languages logoos for Skilled section
import typescript from '../assets/img/typescript.png';
import javascript from '../assets/img/javascript.png';
import react from '../assets/img/react.png';
import python from '../assets/img/python.png';
import git from '../assets/img/git.png';
import github from '../assets/img/github.png';
import c from '../assets/img/c.png';

type SkillComponentProps = {
    ariaHidden?: boolean;
}

export default function SkillComponent({ ariaHidden }: SkillComponentProps) {
    return (
        <div aria-hidden={ariaHidden} className="group">
            <img className="card" src={typescript} alt='TypeScript'/>
            <img className="card" src={javascript} alt='JavaScript'/>
            <img className="card" src={react} alt='React/React Native'/>
            <img className="card" src={git} alt='Git'/>
            <img className="card" src={github} alt='GitHub'/>
            <img className="card" src={c} alt='C Language'/>
            <img className="card" src={python} alt='Python'/>
        </div>
    )
};