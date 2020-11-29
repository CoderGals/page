import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Ilustration from '../images/event-illustration';

export const Event = () => {
    return (
        <div className="event-component">
            <Container>
                <Row>
                    <div className="event-content">
                        <div className="event-text">
                            <p>Event details</p>
                            <span>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                               Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                               Lorem ipsumLorem ipsum
                                Lorem ipsumLorem ipsumLorem ipsum
                           </span>
                        </div>
                        <div>
                            <Ilustration/>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Event;