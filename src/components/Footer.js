import React, { Component } from "react"
import {
    Navbar,
    NavbarBrand,
    Nav
} from 'reactstrap';

class Footer extends Component {
    render = () => {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Not Copyright 2018</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Footer;