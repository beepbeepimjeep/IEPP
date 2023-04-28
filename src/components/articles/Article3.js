/* eslint-disable camelcase */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './aboutServices.module.css';
const about_1 = require('../../assets/img/about-3.jpg');
import { Link } from 'react-router-dom';
import ArticleDetail from '../../pages/ArticleDetail';
import BtnPrimary from '../buttons/BtnPrimary';

function Article3() {
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
                                <span className="shape mobile-hide">Scamme</span>
                                <h2 className="mobile-hide">
                                Scammers use AI to enhance their family emergency schemes
                                </h2>
                                <p>
                                You get a call. There's a panicked voice on the line. It's your grandson. He says he's in deep trouble — he wrecked the car and landed in jail.You get a call. There's a panicked voice on the line. 
                                It's your grandson. He says he's in deep trouble — he wrecked the car and landed in jail.
                                </p>
                            </div>
                        <div className={`${classes.learnMore}`}>
                            <BtnPrimary title="Learn More" url="/article-details" />
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Article3;
