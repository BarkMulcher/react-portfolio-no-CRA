import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';


export default function Header({ currentPage, pageChange }) {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand id='heading' href='/'>
                        Luke Haskell Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav classname='me-auto my-2 my-lg-0'>
                            <Link classname='nav-link' to='/'>
                                Home
                            </Link>
                            <Link className='nav-link' to='/about'>
                                About
                            </Link>
                            <Link className='nav-link' to='/portfolio'>
                                Portfolio
                            </Link>
                            <Link className='nav-link' to=''>
                                Resume
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

// className='col-md-1' src={planet_express_logo_by_pencilshade}