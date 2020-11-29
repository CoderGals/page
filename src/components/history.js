import React from 'react';
import {Container, Button, Card} from "react-bootstrap";

export const History = () => {
    return (
        <div className="history-component">
            <Container>
                <div className="history-title">
                    <h1>Last Hackathon</h1>
                </div>

                <div className="history-content">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Project title
                            </Card.Title>
                            <Card.Text>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium. </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Project title
                            </Card.Title>
                            <Card.Text>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                Project title
                            </Card.Title>
                            <Card.Text>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="btn-div">
                    <Button>OUR BLOG</Button>
                </div>

            </Container>
        </div>
    )
}

export default History;