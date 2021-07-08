import React from 'react'
import "./Footer.scss";
import logo from "../../assets/sampleLogo.svg"
import ellipse1 from "../../assets/ellipse1.svg"
import ellipse4 from "../../assets/ellipse4.svg"
import ellipse3 from "../../assets/ellipse3.svg"
import ellipse2 from "../../assets/ellipse2.svg"

function Footer() {
    return (
        <div className="footer">
            <ul className="footer__list">
                <li className="footer__listItem">Mobile App</li>
                <li className="footer__listItem">Community</li>
                <li className="footer__listItem">Company</li>
                <li className="footer__listItem"><img src={logo}/></li>
                <li className="footer__listItem">Help Desk</li>
                <li className="footer__listItem">Blog</li>
                <li className="footer__listItem">Resources</li>
            </ul>
            <div className="footer__bottom">
                <img className="footer__icons" src={ellipse1} alt="logo1" />
                <img className="footer__icons" src={ellipse2} alt="logo2" />
                <img className="footer__icons" src={ellipse3} alt="logo3" />
                <img className="footer__icons" src={ellipse4} alt="logo4" />
            </div>
        </div>
    )
}

export default Footer
