import React from 'react';
import {Container, Row, Button} from "react-bootstrap";

export const Rules = () => {
    return (
        <div id="rules" className="rules-component">
            <Container>
                <Row>
                    <div className="col-lg-6">
                        <div className="rules-content">
                            <strong>Can I apply?</strong>
                            <br/>
                            <span>If you're a Software Engineer with up to 2 years of experience in Web/Mobile development, than YES!.
                                    <br/>
                                    <br/>
                                    <br/>
                                   If you're a Software Engineer who's excited to be part of competitions and events where the diversity is the key, than YES!
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rules-content">
                            <strong>Are there any limitations?</strong>
                            <br/>
                            <span>The only limitation is that we will be accepting applications only from these countries:
                                <br/>
                                <br/>
                                1. Kosovo
                                <br/>
                                2. Albania
                                <br/>
                                3. North Macedonia
                                <br/>
                                4. Montenegro.
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Rules;