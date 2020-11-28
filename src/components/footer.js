import React from 'react';
import {Container, Button, Row} from "react-bootstrap";

export const Footer = () => {
    return (
        <div className="footer-component">
            <Container>
                <Row>
                    <div>
                        <img src="https://via.placeholder.com/150/f https://placeholder.com/"/>
                    </div>
                    <div>
                        <span>Text</span>
                    </div>
                    <div>
                        Social media
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;