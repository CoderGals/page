import React from 'react';
import {Container, Row, Button, Card} from 'react-bootstrap';

export const Agenda = () => {
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
                        <Button>Day 1 - Friday 11.12.2020</Button>
                        <Button>Day 2 - Friday 12.12.2020</Button>
                        <Button>Day 3 - Friday 13.12.2020</Button>
                    </div>
                </Row>

                <div className="agenda-content-cards">
                    <Row>
                        <div className="agenda-content-card-first">
                            <div className="agenda-content-time">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="card-row">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Opening Ceremony:
                                        </Card.Title>
                                        <Card.Text>
                                            Welcoming words by the organizers, and kick off!
                                        </Card.Text>
                                        <Button>Read more</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Opening Ceremony:
                                        </Card.Title>
                                        <Card.Text>
                                            Welcoming words by the organizers, and kick off!
                                        </Card.Text>
                                        <Button>Read more</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Opening Ceremony:
                                        </Card.Title>
                                        <Card.Text>
                                            Welcoming words by the organizers, and kick off!
                                        </Card.Text>
                                        <Button>Read more</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Opening Ceremony:
                                        </Card.Title>
                                        <Card.Text>
                                            Welcoming words by the organizers, and kick off!
                                        </Card.Text>
                                        <Button>Read more</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className="agenda-content-card-second">
                            <div className="agenda-content-time">
                                <p>13:00 - 14:00</p>
                            </div>
                            <div className="card-row">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Mentoring:
                                        </Card.Title>
                                        <Card.Text>
                                            Mentors will join the teams and support them to get familiar with the
                                            project.
                                        </Card.Text>
                                        <Button>Read more</Button>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Set Up:
                                        </Card.Title>
                                        <Card.Text>
                                            Introduction to projects
                                        </Card.Text>
                                        <Button>Read more</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className="agenda-content-card-third">
                            <div className="agenda-content-time">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="card-row">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Opening Ceremony:
                                        </Card.Title>
                                        <Card.Text>
                                            Welcoming words by the organizers, and kick off!
                                        </Card.Text>
                                        <Button>Read more</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Row>

                    <Row>
                        <div className="agenda-content-card-fourth">
                            <div className="agenda-content-time">
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className="card-row">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>
                                            Opening Ceremony:
                                        </Card.Title>
                                        <Card.Text>
                                            Welcoming words by the organizers, and kick off!
                                        </Card.Text>
                                        <Button>Read more</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Agenda;