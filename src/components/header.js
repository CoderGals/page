import React from "react";
import {Nav, Navbar, Row} from "react-bootstrap";

const Header = () => {
    return (
        <div className="header-component">
            <Navbar  expand="lg">
                <img src="/assets/Logo.svg" alt="me" width="86px" height="86px" unoptimized/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={"nav-component"}>
                    <Nav className="mr-auto ml-5">
                        <Nav.Link href="#about-us" activeClassName="active" className="nav-link" exact>About us</Nav.Link>
                        <Nav.Link href="#agenda">Agenda</Nav.Link>
                        <Nav.Link href="#event-details">Event details</Nav.Link>
                        <Nav.Link href="#rules">Rules</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
