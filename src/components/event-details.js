import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Ilustration from '../images/event-illustration';

export const Event = () => {
    return (
        <div id="event-details" className="event-component">
            <Container>
                <Row>
                    <div className="event-content">
                        <div className="event-text">
                            <p>Our Themes!</p>
                            <span>Connect the dots Hackathon will be based on three main themes described below.</span>
                            <br/>
                            <br/>
                            <strong>Open Source</strong>
                            <br/>
                            <br/>
                            <span>
                                On Open Source we work and learn how to contribute, launch a new project, make a PR, browse data,  and build a healthy community of contributors.
                                Whether you are new to code or ready to contribute to a big project, there are a few ways to get involved, one of them is to become part of Connect the Dots hackathon.
                                This time, contributing is a competition and a learning space, coding on an open source project it's going to be fun!
                           </span>
                            <br/>
                            <br/>
                            <br/>
                            <strong>Corporate</strong>
                            <br/>
                            <br/>
                            <span>
                                "Do not deploy on Friday!"
                                As Software Engineers, we keep looking for opportunities to learn and grow, because working in big teams can teach us many things we do not experience on our own projects.
                                Now, we are learning step by step about the scalable projects, different user roles, and user stories.
                                Coding on corporate challenge it's going to be fun too!
                           </span>
                            <br/>
                            <br/>
                            <br/>
                            <strong>MVP</strong>
                            <br/>
                            <br/>
                            <span>
                                Code your idea out!
                                We know that 48hours are more than enough for a software geek to publish out the prototype as a solution for an existing problem, or a new one, who knows!
                                The best thing is that you can come up with your own project or select one from the event.
                                Coding on MVP project it's going to be fun for real!
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