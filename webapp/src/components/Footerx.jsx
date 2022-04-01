import React from "react";
import {faFacebook,faTwitter,faGoogle,faInstagram,faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footerx = () => {
    return (
        <div>
        <footer className="text-center text-lg-start bg-light text-muted" style={{position:'fixed',bottom:0,width:window.outerWidth}}>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
                <span>Get connected with us on social networks:</span>
            </div>
            
            <div>
                <a href="" className="me-4 text-reset">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faGithub} />
                </a>
            </div>
        </section>            
    </footer>
    </div>
    
    );  
};

export default Footerx;