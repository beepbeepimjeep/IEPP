/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BtnPrimary from '../components/buttons/BtnPrimary';
import PageTitle from '../components/global/PageTitle';
import classes from './error.module.css';

function Error() {
    // Title dynamic
    PageTitle('Error - Ajux');
    return (
        <div id="error-page" className="error-page section">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8} sm={9}>
                        <div className={classes.errorContent}>
                            <div className={classes.errorTitle}>
                                <h2>404</h2>
                                <h3>PAGE NOT FOUND</h3>
                            </div>
                            <div className={classes.devider} />
                            <p>
                                The page you are looking for does not exist. It may have been moved,
                                or removed altogether. Perhaps you can return back to the site's
                                homepage and see if you can find what you are looking for.
                            </p>
                        </div>
                        <div className="mx-auto text-center pt-5">
                            <BtnPrimary title="Back to home" url="/" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Error;
