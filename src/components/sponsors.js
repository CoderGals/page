import React from 'react';
import {Container, Row} from "react-bootstrap";
import ICK from '../images/ick';
import Rubiv from '../images/rubiv';
import Wetech from '../images/we-tech';
import Zombie from '../images/zombie';
import Vianova from '../images/vianova';

export const Sponsors = () => {
    return (
        <div className="sponsor-component">
            <Row>
                <div className="us-emb col-lg-4 text-center">
                    <img src="/assets/us-emb.jpg" width="170px" alt="me" unoptimized/>
                </div>
                <div className="col-lg-4 d-flex justify-content-center">
                    <img src="/assets/linux.jpg" width="450px" height="" alt="me" unoptimized/>
                </div>
                <div className="col-lg-4 text-center">
                    <img src="/assets/kusa.png" width="260px" alt="me" unoptimized/>
                </div>
            </Row>

            <Row>
                <div className="col-3 text-center d-flex justify-content-center">
                    <Wetech/>
                </div>
                <div className="col-lg-3 text-center align-items-center d-flex justify-content-center">
                    <img src="/assets/LogoPLM.jpg" width="300px" height="50px" alt="me" unoptimized/>
                </div>
                <div className="col-3 text-center align-items-center d-flex justify-content-center">
                    <img src="/assets/shef.png" width="200px" alt="me" unoptimized/>
                </div>
                <div className="col-3 text-center align-items-center  d-flex justify-content-center">
                    <Rubiv/>
                </div>
            </Row>

            <Row>
                <div className="col-4 text-center d-flex align-items-center justify-content-center">
                    <ICK/>
                </div>
                <div className="col-4 text-center ">
                    <Zombie/>
                </div>
                <div className="col-4 text-center align-items-center d-flex justify-content-center">
                    <Vianova/>
                </div>
            </Row>

        </div>
    )
}

export default Sponsors;