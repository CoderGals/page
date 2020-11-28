import React from "react";
import { Navbar, Row } from "react-bootstrap";
import Image from 'next/image'
import Navigation from "./navigation";

const Header = () => {
    return (
        <div className="header-component">
            <Navbar>
                    <Image src="/assets/logo.png" alt="me" width="86px" height="86px"/>
                <Row>
                    <Navigation/>
                </Row>
            </Navbar>
        </div>
    )
}

export default Header;
