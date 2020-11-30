import React from 'react';
import {Container, Row} from "react-bootstrap";
import Image from "next/image";
import FacebookIcon from '../images/facebook-icon';
import InstagramIcon from '../images/instagram-icon';

export const Footer = () => {
    return (
        <div className="footer-component">
            <Container>
                <div><Image src="/assets/logo.png" alt="me" width="86px" height="86px"/></div>
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