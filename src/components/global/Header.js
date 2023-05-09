/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useLocation } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
// import logo from '../../assets/img/favicon.ico';

function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const [headerClass, setHeaderClass] = useState('');
    const [homeActive, setHomeActive] = useState('');
    const [headerBtn, setHeaderBtn] = useState('');
    const location = useLocation();

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 400) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (location.pathname === '/') {
            setHeaderClass('home-one');
            setHeaderBtn('btnPrimary');
            setHomeActive('homeActive');
        } else if (location.pathname === '/hometwo') {
            setHeaderClass('home-two');
            setHeaderBtn('btnSecondary');
            setHomeActive('homeActive');
        } else if (location.pathname === '/homethree') {
            setHeaderClass('home-three');
            setHeaderBtn('btnBlue');
            setHomeActive('homeActive');
        } else {
            setHeaderClass('');
            setHeaderBtn('btnPrimary');
            setHomeActive('');
        }
    }, [location]);
    return (
        <header id="header" className={`${headerClass} header ${isSticky ? 'sticky' : ' '}`}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link exact to="/">
                            <img src={logo} alt="logo" className='logo-image'/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav me-end">
                        <Nav className="ms-auto align-items-center">
                            
                            {/* <NavDropdown
                                title="Home"
                                id="basic-nav-dropdown"
                                className="navLink"
                                className={homeActive}
                            >
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/">
                                        Home
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/hometwo">
                                        Home Two
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/homethree">
                                        Home Three
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown> */}

                            <NavLink className="navLink" exact to="/">
                                Home
                            </NavLink>

                            <NavLink className="navLink" exact to="/article-category">
                                Articles
                            </NavLink>

                            
                            {/* <NavLink className="navLink" exact to="/detect-page">
                                Detect
                            </NavLink> */}
                            <NavLink className="navLink" exact to="/DetectPageNew">
                                Detect
                            </NavLink>
                            <NavLink className="navLink" exact to="/simulator-page">
                                Simulator
                            </NavLink>

                            {/* <NavDropdown
                                title="Pages"
                                id="basic-pages-dropdown"
                                className="navLink"
                            >
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/servicedetails">
                                        Service Details
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/team">
                                        Team
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/pricing">
                                        Pricing
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/blog">
                                        Blog
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/blogthree">
                                        Blog Three Grid
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/blogfour">
                                        Blog Four Grid
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/blog/:title">
                                        Blog Details
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/faq">
                                        Faq
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/portfoliotwo">
                                        Portfolio 2 Column
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/portfoliothree">
                                        Portfolio 3 Column
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/commingsoon">
                                        Comming Soon
                                    </NavLink>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <NavLink className="navSubLink" exact to="/homethree">
                                        404 Page
                                    </NavLink>
                                </NavDropdown.Item>
                            </NavDropdown> */}

                            <NavLink className="navLink" exact to="/quiz">
                                Quiz
                            </NavLink>

                            {/* <Link to="/" className={`${headerBtn} mobile-hide`}>
                                Get Started
                            </Link> */}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
