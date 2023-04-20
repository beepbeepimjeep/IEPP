/* eslint-disable camelcase */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
/* import { about_1, heroCircle } from '../../assets/img'; */
import classes from './aboutServices.module.css';
const about_1 = require('../../assets/img/about-1.jpg');
import { Link } from 'react-router-dom';
import ArticleDetail from '../../pages/ArticleDetail';
import BtnPrimary from '../buttons/BtnPrimary';

function AboutSerivces() {
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
                                <span className="shape mobile-hide">Online Shopping</span>
                                <h2 className="mobile-hide">
                                Buy Now, Pay Later, Rent-to-Own, Lease-to-Own, and Layaway
                                </h2>
                                <p>
                                    “Buy now, pay later,” rent-to-own, lease-to-own, 
                                    and layaway plans let you buy things without paying in full right away.
                                </p>
                            </div>
                        <div className={`${classes.learnMore}`}>
                        
                        <BtnPrimary title="Learn More" url="/article-detail" />
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutSerivces;
