import React from "react";
import Link from 'next/link';
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
    return (
        <>
            <div className="nav-component">
                <nav className="navbar" id="navbar">
                    <div className="navbar-primary">
                        <Nav className="mr-auto">
                            <Link href="#about-us" activeClassName="active" className="nav-link" exact>About Us</Link>
                            <Link href="#agenda">Agenda</Link>
                            <Link href="#event-details">Event details</Link>
                            <Link href="#rules">Rules</Link>
                        </Nav>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navigation;
