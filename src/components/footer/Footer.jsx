import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    // const navigationHandler = (type) => {
    //     if (type === "termsofuse") {
    //       navigate("/explore/movie");
    //     }
    //     else if(type === "privacypolicy"){
    //       navigate("/explore/tv");
    //     }
    //     else if(type === "about"){
    //         navigate("/explore/tv");
    //       }
    //     else if(type === "blog"){
    //         navigate("/explore/tv");
    //       }
    //     else{
    //         navigate("/explore/tv");
    //       }
    //     setMobileMenu(false);
    //   }
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                Welcome to RadiFlix, a premium on demand digital video streaming service owned and operated by Aditya Raj.
                This user agreement (“User Agreement”) is an electronic record in terms of Information Technology Act, 
                2000 ("Act") and rules thereunder as applicable and the amended provisions pertaining to electronic records 
                in various statutes as amended by the Information Technology (Amendment) Act, 2008, 
                and such other applicable amendments, from time to time. This User Agreement is generated by a computer system 
                and does not require any physical or digital signatures.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
                <div class="footer-rights">
            Copyright © 2023 https://adirajportfolio.netlify.app/ | All rights reserved
        </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;