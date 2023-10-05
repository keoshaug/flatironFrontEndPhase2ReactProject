import React from "react";
import "./Footer.css"


const Footer = () => {
    function handleGoToTop () {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <footer className="footer">
                <h2>Links</h2>
                <br/>
                <nav>
                        <a href="https://keoshaug.github.io/" target='_blank'>My Portfolio</a>
                        <br/>
                        <a href="https://www.linkedin.com/in/kevinoshaughnessy/" target='_blank'>Linkedin</a>
                        <br/>
                        <br/>
                        <button className="ft-btn" onClick={handleGoToTop}>Go to Top</button>
                </nav>
            </footer>
        
        
        
        </>

    )
}


export default Footer;