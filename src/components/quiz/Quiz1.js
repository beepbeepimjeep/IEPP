/* eslint-disable camelcase */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
/* import { about_1, heroCircle } from '../../assets/img'; */
import classes from './aboutServices.module.css';
const quiz_1 = require('../../assets/img/quiz-1.jpg');
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
                            <img src={quiz_1} alt="quiz-1" />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className={`${classes.aboutServicesLeft}`}>
                            <div className="sectionTopDescription">
                                <span className="shape mobile-hide">QUIZ</span>
                                <h2 className="mobile-hide">
                                Online Security
                                </h2>
                                <p>
                                This quiz consists of 5 multiple-choice questions. To be successful with the quizzes, it’s important to conversant with the topics. Keep the following in mind:

Timing - You need to complete each of your attempts in one sitting, as you are allotted 30 minutes to each attempt.

Answers - You may review your answer-choices and compare them to the correct answers after your final attempt.

To start, click the "Start" button. When finished, click the "Submit " button.
                                </p>
                            </div>
                        <div className={`${classes.learnMore}`}>
                        
                        <BtnPrimary title="START" url="/quiz-security" />
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutSerivces;
