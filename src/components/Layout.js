import React, {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../main.css';

const Layout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleNavbar = () => setCollapsed(!collapsed);

    return ( 
        <>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Not Ko-fi</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Log In</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Explore</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Features</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Gold</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">Blog</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Header />
            <main>{ children }</main>
            <Footer />
        </>
    );
}
 
export default Layout;