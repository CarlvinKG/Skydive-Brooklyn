//import React from 'react'
import logo from '/logo.png'
import { useNavigate } from 'react-router-dom'
import Links from './Links'
import HamburgerMenu from './HamburgerMenu'
import './NavBar.css'

const NavBar = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <header>
            <nav className="navbar">
                <div className="nav-left nav-logo">
                    <img src={ logo } alt="logo" onClick={() => goToHome()} />
                </div>
                <div className="nav-right nav-menu">
                    <HamburgerMenu />
                    <Links />
                </div>
            </nav>
            
        </header>
    );
};

export default NavBar;