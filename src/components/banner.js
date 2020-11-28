import React from 'react';
import {Container, Button, Row} from "react-bootstrap";

export const Banner = () => {
    return (
        <div className="banner-component">
            <Container>
                <Row>
                    <div>
                        <Button variant="light">Apply Here</Button>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Banner;