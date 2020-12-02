import React from 'react';
import BannerPhoto from '../images/banner';
import {Button} from "react-bootstrap";
import data from '../data/banner';
import Slogan from '../images/slogan';

export const Banner = () => {
    return (
        <>
            <div className="banner-component  d-none d-lg-block">
                <div className="banner-content">
                    <div>
                        <p>CoderGals Hackathon 2020</p>
                        <span><Slogan/> </span>
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
            {/*<div className="banner-mobile">*/}
            {/*    <div className="banner-content">*/}
            {/*        <Button*/}
            {/*            variant="light"*/}
            {/*            onClick={() => {*/}
            {/*                window.open(data.apply_now, '_blank');*/}
            {/*            }}*/}
            {/*        >Apply Now</Button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default Banner;