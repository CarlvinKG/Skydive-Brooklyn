//import React from 'react';
import { BsFacebook, BsInstagram, BsTwitterX, BsTiktok, BsYoutube, BsPinterest } from 'react-icons/bs'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import {useNavigate} from 'react-router-dom'
import logo from '/logo.png'
import Links from '../NavBar/Links'
import './Footer.css'

const Footer = () => {
    const socials = [
        BsFacebook, BsInstagram, BsTwitterX, BsTiktok, BsYoutube, BsPinterest
    ].map((Icon) => ({ icon: <Icon size={25} /> }));

    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className="footer">
                <div className="footer-content">
                    <div className="left">
                        <img src={ logo } alt="logo" onClick={() => goToHome()} />
                        <div className="contact-info">
                            <div className="icon">
                                <FaLocationDot size={20} />
                            </div>
                            <div>
                                555 Skyway Ave<br/>
                                Brooklyn, New York 11213
                            </div>
                            <div className="icon">
                                <FaPhone size={20} />
                            </div>
                            <div>
                                (718) 995-8200
                            </div>
                            <div className="icon">
                                <IoIosMail size={20} />
                            </div>
                            <div>
                                info@skydivebrooklyn.com
                            </div>
                        </div>
                        <div className="socials">
                            {socials.map((social, index) => (
                                <div className="icon" key={index}>
                                    {social.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="right">
                        <div className="site-map">
                            <h4>Site Map</h4>
                            <Links />
                        </div>
                        <div className="legal">
                            <h4>Legal</h4>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">© 2025 Skydive Brooklyn LLC. All Rights Reserved.</div>
        </>
    );
};

export default Footer;