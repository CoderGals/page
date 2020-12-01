import React from 'react';
import {Container, Button, Card} from "react-bootstrap";
import history from "../data/history";
import data from "../data/footer";
export const History = () => {

    const _goTo = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="history-component">
            <Container>
                <div className="history-title">
                    <h1>Last Hackathon</h1>
                </div>

                <div className="history-content">
                    {history.map((project) => (
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {project.title}
                                </Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Button onClick={() => _goTo(project.link) }>Read more</Button>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <div className="btn-div">
                    <Button>OUR BLOG</Button>
                </div>
            </Container>
        </div>
    )
}

export default History;