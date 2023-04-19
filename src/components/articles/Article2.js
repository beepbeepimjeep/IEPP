/* eslint-disable camelcase */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './aboutServices.module.css';
const about_1 = require('../../assets/img/about-2.jpg');
import { Link } from 'react-router-dom';
import ArticleDetail from '../../pages/ArticleDetail';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Article2() {
    return (
        <div id="aboutServices" className="aboutServices section">
            <Container>
                <Row>
                    <div className="sectionCenterTitle mobile-show">
                        <span className="shape">About services</span>
                        <h2>Create Your Own Best Portfolio Website</h2>
                    </div>
                </Row>
                <Row className="align-items-center">
                    <Col lg={6} md={12} className="order-lg-2">
                        <div className={`${classes.aboutServicesImg}`}>
                            <img src={about_1} alt="about-1" />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className={`${classes.aboutServicesLeft}`}>
                            <div className="sectionTopDescription">
                                <span className="shape mobile-hide">About WIFI</span>
                                <h2 className="mobile-hide">
                                Are Public Wi-Fi Networks Safe? What You Need To Know
                                </h2>
                                <p>
                                Public Wi-Fi networks, or hotspots, in coffee shops, malls, airports, hotels, 
                                and other places are convenient. In the early days of the internet, they often weren’t secure.
                                </p>
                            </div>
                        <div className={`${classes.learnMore}`}>
                        <Link to="/article-detail">
                                <Button variant="contained">Learn More</Button>
                        </Link>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Article2;
