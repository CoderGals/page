import React from 'react';
import {Container, Row} from "react-bootstrap";


export const ComingSoon = () => {
    return (
        <div className="coming-soon-page">
            <Container>
                <Row>
                    <div>
                        <h1>We will be publishing new events soon!</h1>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default ComingSoon;
