import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class ReactSlickDemo extends React.Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: true,
            centerPadding: '30px'
        };
        return (
            <div className="slider-component">
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dgmiisxcn/image/upload/c_scale,w_433/v1606580932/codergals1_lfhsk8.jpg"/>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dgmiisxcn/image/upload/c_scale,w_433/v1606581421/codergals/codergals2_yzrkvi.jpg"/>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dgmiisxcn/image/upload/c_scale,w_433/v1606583938/codergals/codergals3_lumwqc.jpg"/>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dgmiisxcn/image/upload/c_scale,w_433/v1606583950/codergals/codergals4_xba5h1.jpg"/>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dgmiisxcn/image/upload/c_scale,w_433/v1606583968/codergals/codergals5_jd84tq.jpg"/>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dgmiisxcn/image/upload/c_scale,w_433/v1606583981/codergals/codergals6_vgijub.jpg"/>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dgmiisxcn/image/upload/c_scale,w_433/v1606583989/codergals/codergals7_pbgpdd.jpg"/>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dgmiisxcn/image/upload/c_scale,w_433/v1606584007/codergals/codergals9_qfxb4x.jpg"/>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dgmiisxcn/image/upload/c_scale,w_433/v1606584019/codergals/codergals10_jcqzgq.jpg"/>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default ReactSlickDemo;
