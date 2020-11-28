import React from "react";
import Link from 'next/link';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigation = () => {
    return (
        <div className="nav-component">
            <nav className="navbar" id="navbar">
                <div className="navbar-primary">
                    <Nav className="mr-auto">
                        <Link href="/" activeClassName="underline" className="nav-link" exact>Home page</Link>
                        <Link href="/about">About page</Link>
                        <Link href="/events">Events page</Link>
                    </Nav>
                </div>
            </nav>
        </div>

    )
}

export default Navigation;
