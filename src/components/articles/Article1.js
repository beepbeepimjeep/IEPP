
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './aboutServices.module.css';
import Button from '@mui/material/Button';

function AboutSerivces({ article = {}, imageIndex }) {
 
    const imagePath = require(`../../assets/img/about-${imageIndex}.jpg`);

    const handleClick = () => {
        window.open(article.URL, "_blank");
      };


    return (
        <div id="aboutServices" className="aboutServices section">
            <Container>
            
                <Row className="align-items-center">
                    <Col lg={6} md={12} className="order-lg-2">
                        <div className={`${classes.aboutServicesImg}`}>
                        <img src={imagePath} alt={`about-${imageIndex}`} />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className={`${classes.aboutServicesLeft}`}>
                            <div className="sectionTopDescription">
                                <span className="shape mobile-hide">{article.Type}</span>
                                <h2 className="mobile-hide">
                                {article.Title}
                                </h2>
                                <p>
                                {article.Desc}
                                </p>
                            </div>
                            <div className={`${classes.learnMore}`}>
                            {/* <ArticleLinkButton title="Learn More" url={article.URL} /> */}
                            <Button 
                            variant="contained" 
                            color="primary" 
                            title="Learn More" 
                            onClick={handleClick}
                            sx={{
                                backgroundColor: "#347336",
                                color: "#ffffff",
                                fontWeight: "bold",
                                textTransform: "uppercase",
                                padding: "8px 16px",
                                borderRadius: "4px",
                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
                                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                                marginTop: "16px",
                                "&:hover": {
                                  transform: "translateY(-2px)",
                                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                                },
                              }}
                            >
                                Learn More
                            </Button>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default AboutSerivces;
