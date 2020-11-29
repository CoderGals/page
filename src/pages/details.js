import React from 'react';
import {Container, Row} from "react-bootstrap";
import SlickSlider from "../components/slick-slider";


export const Details = () => {
    return (
        <div className="details-component">
            <Container>
                <Row>
                    <div>
                        <SlickSlider slidesToShow={1} slidesToScroll={1}/>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Details;