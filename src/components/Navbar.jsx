import { useEffect, useState } from "react"
import { navLinks } from "../constants";



export const Navbar = () => {


    const [isScrolled, setScrolled] = useState(false);


    useEffect (()=>{

        const handleScroll = ()=>{
            const isScrolled = window.scrollY>10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {window.removeEventListener("scroll", handleScroll)}

    },[])

    

    return(
        <header className={`navbar ${isScrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    James Tong
                </a>


                <nav className="desktop">
                    <ul>
                        {navLinks.map(({link, name}) => (
                            <li key={link} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </a>
                            </li>
                        ))}
                    

                    </ul>
                </nav>


                <a href="mailto:james77.tong@gmail.com" className="contact-btn group">
                    <div className="inner">
                        <span>Reach Out</span>
                    </div>
                </a>
            </div>
        </header>
    )
}