import React, { useState } from 'react';
import {Container, Row, Button, Card} from 'react-bootstrap';
import agenda, { DEFAULT_SELECTED } from '../data/agenda';

export const Agenda = () => {
    const [activeDay, setActiveDay] = useState(DEFAULT_SELECTED);
    const day = agenda[activeDay];

    return (
        <div className="agenda-component">
            <Container>
                <Row>
                    <div className="agenda-title">
                        <h1>Agenda</h1>
                    </div>
                </Row>
                <Row>
                    <div className="agenda-content">
                        {
                            Object.keys(agenda).map(key => (
                                <Button className={key === activeDay ? 'active-agenda': ''} onClick={() => setActiveDay(key) }>{agenda[key].label}</Button>
                            ))
                        }
                    </div>
                </Row>

                <div className="agenda-content-cards">
                    {
                        day.slots.map(slot => (
                            <Row>
                                <div className="agenda-content-card-first">
                                    <div className="agenda-content-time">
                                        <p>{slot.time}</p>
                                    </div>
                                    <div className="card-row">
                                        {slot.activities.map(activity => (
                                            <Card>
                                                <Card.Body>
                                                    <Card.Title>
                                                        {activity.title}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        {activity.description}
                                                    </Card.Text>
                                                    <Button>Read more</Button>
                                                </Card.Body>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </Row>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Agenda;