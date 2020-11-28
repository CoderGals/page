import React from 'react';
import {Row} from "react-bootstrap";
import BannerPhoto from '../images/banner';
import { Button } from "react-bootstrap";

export const Banner = () => {
    return (
        <div className="banner-component">
            <div className="banner-content">
                <div>
                    <p>CoderGals Hackathon 2020</p>
                    <span>.CONNECT THE DOTS.</span>
                </div>
                <Button variant="light">Apply Now</Button>
            </div>
            <div>
                <BannerPhoto/>
            </div>
        </div>
    )
}

export default Banner;