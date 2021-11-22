import React from "react";
import {Container, Row} from "react-bootstrap";

export const About = () => {
    return (
        <div id="about-us" className="about-us">
            <Container>
                <Row>
                    <div className="pt-3">
                        <div><h2>Who are we?</h2></div>
                        <div><p>We are <strong>CoderGals</strong>, an organization which represents a group of people
                            coming from a
                            development country, with the enthusiasm of building exciting things using technology.</p>
                        </div>
                        <div><p>Our initial goal was to enhance the presence of girls/women in the IT field, empower
                            them to be part of the tech industry, but due to the extensive requests for our events,
                            we've started to include all the enthusiasts in one place, no matter the gender :) </p>
                        </div>
                        <div>
                            <p>We've started with the official events in 2017 with our first competitive event, take a
                                look <a href="https://qendresahoti.wordpress.com/blogs/" target="_blank">here</a>.
                            </p>
                        </div>
                        <div>
                            <p>Many interesting things have happen since then :)</p>
                            <p>Please take a look at these links to learn more about us:</p>
                            <a href="https://dev.to/codergalsks/debian-os-conference-2021-in-kosovo-4om8"
                               target="_blank">CoderGals
                                wins the bid for DebConf21</a>, <a
                            href="https://codergals.github.io/Remembrance-day-hackathon/" target="_blank">CoderGals
                            hosts Remembrance
                            day hackathon</a>, <a href="https://dev.to/codergalsks/connect-the-dots-hackathon-2020-42ah"
                                                  target="_blank">CoderGals
                            hosts Connect the Dots hackathon</a>
                        </div>

                        <div>
                            <p>Other important resources: <a href="https://twitter.com/codergalsks" target="_blank">CoderGals
                                in twitter</a></p>
                        </div>
                    </div>
                </Row>

                <Row>
                    <div className="col-lg-6">
                        {/*<div>testi qend</div>*/}
                    </div>
                </Row>
            </Container>


        </div>
    )
}

export default About;
