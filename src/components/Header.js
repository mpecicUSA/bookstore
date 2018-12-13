import React, { Component } from "react"
import {
    Navbar,
    NavbarBrand,
    Nav
} from 'reactstrap';


class Header extends Component {
    render = () => {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/">Da Amazon Rainforest</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default Header 