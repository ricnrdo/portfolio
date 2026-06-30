import logo from "../assets/img/logo.svg";
import { useEffect, useState } from "react";

function NavComponent() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 9)
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={`default-padding ${scrolled ? "glass scrolled" : ""}`}>
            <ul className="links">
                <li><a href="/about">About</a></li>
                <li><a href="/#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <img className="logo" src={logo}/>
        </nav>
    )
}

export default NavComponent