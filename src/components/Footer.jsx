import React from "react";
import "./Footer.css"


const Footer = () => {
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
                        <button className="ft-btn">Go to Top</button>
                        {/* add onClick to Go to Top button  */}
                </nav>
            </footer>
        
        
        
        </>

    )
}


export default Footer;