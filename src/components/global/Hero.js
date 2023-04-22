/* eslint-disable camelcase */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import {
//     dot,
//     heroCircle,
//     heroOne_1,
//     heroOne_2,
//     heroOne_lg,
//     hero_img,
//     line,
// } from '../../assets/img';

import bgimage from '../../assets/img/bgimage.jpg';
import BtnPrimary from '../buttons/BtnPrimary';
import classes from './hero.module.css';

// import { useCallback } from "react";
// import { useNavigate } from "react-router-dom";

function Hero() {
    // const navigate = useNavigate();

    // const onButtonsContainerClick = useCallback(() => {
    //   navigate("/article-category");
    // }, [navigate]);
  
    // const onLabelTextClick = useCallback(() => {
    //   navigate("/article-category");
    // }, [navigate]);
  
    // const onButtonsContainer1Click = useCallback(() => {
    //   navigate("/detect-page");
    // }, [navigate]);
  
    // const onLabelText1Click = useCallback(() => {
    //   navigate("/detect-page");
    // }, [navigate]);


    return (
        <div id="hero" className="hero pt-100 pb-70 position-relative">
            {/* <img src={dot} className={classes.dot} alt="dot" />
            <img src={line} className={classes.line} alt="line" /> */}
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col lg={5} className="order-lg-2">
                        <div className={`${classes.heroContentBox} mobile-show`}>
                            {/* <p className={`${classes.topSmallTitle} shape`}>
                                Welcome to <span>Ajux</span>
                            </p> */}
                            <h1 className={`${classes.heroTitle}`}>
                                Impact the World by Taking Action
                            </h1>
                        </div>
                        <div className={`${classes.heroImgBox}`}>
                            <Row className="mobile-hide ImageWeb">
                                {/* <div className={`${classes.heroImgWrapper}`}>
                                    <div className={`${classes.smallImg}`}>
                                        <img src={heroOne_1} alt="" />
                                        <img src={heroOne_2} alt="" />
                                    </div>
                                    <div className={`${classes.bigImg}`}>
                                        <img src={heroOne_lg} alt="" />
                                        <img
                                            src={heroCircle}
                                            className={classes.heroCircle}
                                            alt="hero-circle"
                                        />
                                    </div>
                                    <img src={bgimage} alt="" className='ImageWeb'/>
                                </div> */}
                                <img src={bgimage} alt="" />
                            </Row>
                            <div className={`${classes.heroImg} mobile-show`}>
                                <img src={bgimage} alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={`${classes.heroContentBox}`}>
                            {/* <p className={`${classes.topSmallTitle} shape mobile-hide`}>
                                Welcome to <span>Ajux</span>
                            </p> */}
                            <h1 className={`${classes.heroTitle} mobile-hide`}>
                                How much you know about online Security
                            </h1>
                            <p className={classes.heroText}>
                                Here is some articles about online security, explore by below button.<br/>
                                A great Tool for you to detect Web URL with simple click.
                                
                            </p>
                            <BtnPrimary url="/article-category" title="Lern More About internet fraud" />
                            <BtnPrimary url="/detect-page" title="Detect Web URL for free" />

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
