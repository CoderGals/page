import React, { Component } from "react";

import Slider from "react-slick";
import Pic1 from '../images/foto1.svg';

export default class SlickSlider extends Component {

    componentDidMount() {
        console.log(this.props.images);
    }

    render() {
        const settings = {
            // dots: true,
            buttons: false,
            infinite: true,
            speed: 500,
            slidesToShow: this.props.slidesToShow,
            slidesToScroll: this.props.slidesToScroll,
            autoplay: true,
            autoplaySpeed: 3000,
            // centerMode: true
        };
        return (
            <div className="slider-tow-component">
                <Slider {...settings}>
                    <div>
                        <Pic1/>
                    </div>
                    <div>
                        <Pic1/>
                    </div>
                    <div>
                        <Pic1/>
                    </div>
                    <div>
                        <Pic1/>
                    </div>
                </Slider >
            </div >
        );
    }
}


