import React from 'react';
import BannerPhoto from '../images/banner';
import { Button } from "react-bootstrap";
import data from '../data/banner';

export const Banner = () => {
    return (
        <div className="banner-component">
            <div className="banner-content">
                <div>
                    <p>CoderGals Hackathon 2020</p>
                    <span>.CONNECT THE DOTS.</span>
                </div>
                <Button
                    variant="light"
                    onClick={() => {
                        window.open(data.apply_now, '_blank');
                    }}
                >Apply Now</Button>
            </div>
            <div>
                <BannerPhoto/>
            </div>
        </div>
    )
}

export default Banner;