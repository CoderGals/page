import React from 'react';
import {Container, Button, Row} from "react-bootstrap";
import ShopIlustration from '../images/shop-ilustration';
import Ilustration from "../images/event-illustration";

export const Shop = () => {
    return (
        // <div className="shop-component">
        //     <Container>
        //         <div className="shop-content">
        //             <ShopIlustration/>
        //             <div className="shop-text">
        //                 <h1>CoderGals Shop</h1>
        //                 <p>Keep contributing to open source & we will see you next year!</p>
        //             </div>
        //
        //             <div>
        //                 <Button>Check the products</Button>
        //             </div>
        //         </div>
        //     </Container>
        // </div>
        <div className="shop-component">
            <Container>
                <Row>
                    <div className="shop-content">
                        <div className="shop-text">
                            <p>CoderGals Shop</p>
                            <span>Keep contributing to open source & we will see you next year!  </span>
                            <div className={"btn-div"}>
                                <Button>Check the products</Button>
                            </div>
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

export default Shop;