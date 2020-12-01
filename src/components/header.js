import React from "react";
import { Navbar, Row } from "react-bootstrap";
import Navigation from "./navigation";

const Header = () => {
    return (
        <div className="header-component">
            <Navbar>
                    <img src="/assets/Logo.svg" alt="me" width="86px" height="86px" unoptimized/>
                <Row>
                    <Navigation/>
                </Row>
            </Navbar>
        </div>
    )
}

export default Header;
