import { socialImgs } from "../constants"

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center">
                    <a href="/James Tong - Resume - Hardware.pdf" download="James Tong - Resume - Hardware.pdf"className="contact-btn group">
                        <div className="inner">
                            <span>My Resume</span>
                        </div>
                    </a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath}/>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">

                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} James Tong. All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    )
}