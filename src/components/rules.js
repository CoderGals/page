import React from 'react';
import {Container, Row, Button} from "react-bootstrap";

export const Rules = () => {
    return (
        <div id="rules" className="rules-component">
            <Container>
                <Row>
                    <div className="rules-title">
                        <h1>Rules</h1>
                    </div>

                    <div className="rules-content">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt.</p>
                    </div>
                    <Button>Learn More</Button>
                </Row>
            </Container>
        </div>
    )
}

export default Rules;