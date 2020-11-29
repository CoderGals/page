import React, { useState } from 'react';
import { Container, Row, Button, Card, Modal } from 'react-bootstrap';
import agenda, { DEFAULT_SELECTED } from '../data/agenda';

export const Agenda = () => {
    const [activeDay, setActiveDay] = useState(DEFAULT_SELECTED);
    const [activity, setActivity] = useState();

    const day = agenda[activeDay];
    console.log('activitiy')
    return (
        <>
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
                                                    <Button onClick={() => setActivity(activity) }>Read more</Button>
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
        {activity && (
            <Modal show={true} onHide={() => setActivity(null) }>
                <Modal.Header closeButton>
                    <Modal.Title>{ activity.title }</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>{ activity.long_description }</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={() => setActivity(null) } variant="secondary">Close</Button>
                </Modal.Footer>
            </Modal>
        )}
        </>
    )
}

export default Agenda;