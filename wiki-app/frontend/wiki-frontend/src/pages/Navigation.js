import React, { Component } from 'react';
import {
    Navbar,
    MenuItem,
    NavItem,
    NavDropdown,
    Nav
}
     from 'react-bootstrap';


class Navigation extends Component {
    constructor(props){
        super(props)
}
    render(){
        return(
            <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                <a href="http://localhost:3001/">Wiki</a>
                </Navbar.Brand>
            </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="http://localhost:3001/newpage">
                        New page
                    </NavItem>
                    <NavItem eventKey={2} href="http://localhost:3001/pages">
                        All pages
                    </NavItem>
                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                    <MenuItem eventKey={3.1}>Action</MenuItem>
                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey={3.4}>Separated link</MenuItem>
                </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}
export default Navigation
