import React from 'react';
import {Container, Button, Row} from "react-bootstrap";
import SlickSlider from "../components/slick-slider";


export const Details = () => {
    return (
        <div className="details-component">
            <Container>
                <Row>
                    <div>
                        {/*<SlickSlider slidesToShow={1} slidesToScroll={1}/>*/}
                    </div>
                </Row>
                <Row>
                    <div>
                        <div>
                            <h1>Event details</h1>
                        </div>
                        <div>
                            <img src="https://via.placeholder.com/200C/f https://placeholder.com/"/>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Details;