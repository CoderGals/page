import React from 'react';
import {Container, Row} from "react-bootstrap";
import FacebookIcon from '../images/facebook-icon';
import InstagramIcon from '../images/instagram-icon';

export const Footer = () => {
    return (
        <div className="footer-component">
            <Container>
                <div><img src="/assets/Logo.svg" alt="me" width="86px" height="86px" unoptimized/></div>
                <div><p>&copy; 2020 CoderGals. All rights reserved.</p></div>
                <div className="social-media">
                        <span>
                            <FacebookIcon/>
                        </span>
                    <span>
                            <InstagramIcon/>
                        </span>
                </div>
            </Container>
        </div>
    )
}

export default Footer;