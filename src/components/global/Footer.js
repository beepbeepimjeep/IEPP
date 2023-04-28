import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsArrowUp, BsPhone } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import logo from '../../assets/img/logoWhite.png';
import classes from './footer.module.css';

function Footer() {
    return (
        <footer id="footer" className="footer">
            <div className={classes.footerArea}>
                <Container>
                    <div className={classes.footerTop}>
                        <Row>
                            <Col lg={4} md={6} sm={6} className="mb-4 mb-lg-0">
                                <div className={`${classes.footerWidget}`}>
                                    <img
                                        src={logo}
                                        className={`${classes.footerLogo}  mb-4`}
                                        alt="footer-logo"
                                    />
                                    <p className={`${classes.footerText}`}>
                                        Creative Design & Development Agency in Canada.
                                    </p>
                                    <ul
                                        className={`${classes.footerSocialCollections} d-flex gap-3 mt-4`}
                                    >
                                        <li>
                                            <Link to="https://www.linkedin.com/">
                                                <FaLinkedinIn />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.instagram.com/">
                                                <FaInstagram />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="https://www.facebook.com/">
                                                <FaFacebookF />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={2} md={6} sm={6} className="mb-4 mb-lg-0">
                                <h4 className={`${classes.footerLinkTitle}`}>Support</h4>
                                <ul className={`${classes.footerLinkCollections}`}>
                                    <li>
                                        <Link to="/">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/">UX/UI Design</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Graphic Design</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Business Strategy</Link>
                                    </li>
                                    <li>
                                        <Link to="/">App Development</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={2} md={6} sm={6} className="mb-4 mb-lg-0">
                                <h4 className={`${classes.footerLinkTitle}`}>Services</h4>
                                <ul className={`${classes.footerLinkCollections}`}>
                                    <li>
                                        <Link to="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/services">Service</Link>
                                    </li>
                                    <li>
                                        <Link to="/portfolioTwo">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link to="/pricing">Pricing Plan</Link>
                                    </li>
                                    <li>
                                        <Link to="/conatact">Contact Us</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={4} md={6} sm={6}>
                                <h4 className={`${classes.footerLinkTitle}`}>Contact</h4>
                                <ul className={`${classes.footerLinkCollections}`}>
                                    <li>
                                        <span>
                                            <HiOutlineLocationMarker />
                                        </span>
                                        437 Melborne Ave #4, NY 13253, Australia
                                    </li>
                                    <li>
                                        <span>
                                            <BsPhone />
                                        </span>
                                        1-976-1178-9535
                                    </li>
                                    <li>
                                        <span>
                                            <MdAlternateEmail />
                                        </span>
                                        hello.Ajux@gmail.com
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div className="divider" />
                    <div className={`${classes.footerBottom} d-grid justify-content-center`}>
                        <p>Copyright Ajux 2023, All Rights Reserved By devsarray </p>
                    </div>
                </Container>
            </div>
            {/* Scroll to top */}
            <ScrollToTop
                smooth
                viewBox="0 0 24 24"
                component={<BsArrowUp />}
                classes={{
                    backgroundColor: '#096A62',
                    color: '#fff',
                    fontSize: '22px',
                }}
            />
        </footer>
    );
}

export default Footer;
