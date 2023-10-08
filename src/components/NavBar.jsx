import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };
    return (
        <>
            <div className={`container ${navbarOpen ? "open" : ""}`}>
                <div className="logo">
                    <img src="./logo.png" alt="logo" />
                    <a href="/">
                        <span>INIT.AI</span>
                    </a>
                </div>
                <div className={`navbar ${navbarOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <Link className="nav-link ani-1" to="/" onClick={() => toggleNavbar()}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link ani-1" to="/blog" onClick={() => toggleNavbar()}>
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link ani-1" to="/team" onClick={() => toggleNavbar()}>
                                Team
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link ani-1" to="/contact" onClick={() => toggleNavbar()}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="main">
                    <ul>
                        <li><i class="fa-solid fa-cart-shopping"></i></li>
                        <li className="hamburger" onClick={() => toggleNavbar()}>
                            <i class="fa-solid fa-bars"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;