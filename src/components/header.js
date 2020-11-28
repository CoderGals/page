import React from "react";
import {Container, Row} from "react-bootstrap";

import Navigation from "./navigation";

const Header = () => {
    return (
        <div className="header-component">
            <Container>
                <Row>
                    <Navigation/>
                </Row>
            </Container>
        </div>
    )
}

export default Header;
