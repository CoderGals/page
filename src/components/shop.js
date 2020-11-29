import React from 'react';
import {Container, Button} from "react-bootstrap";
import ShopIlustration from '../images/shop-ilustration';

export const Shop = () => {
    return (
        <div className="shop-component">
            <Container>
                <div className="shop-content">
                    <ShopIlustration/>
                    <div className="shop-text">
                        <h1>CoderGals Shop</h1>
                        <p>Keep contributing to open source & we will see you next year!</p>
                    </div>

                    <div>
                        <Button>Check the products</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Shop;