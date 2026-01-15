import logo from "../assets/img/logo-figma.svg";
import { useEffect, useState } from "react";

function NavComponent() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 0)
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`nav-container glass ${scrolled ? "scrolled" : ""}`}>
            <ul className="navigation">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <img src={logo}/>
        </nav>
    )
}

export default NavComponent