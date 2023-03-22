import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';


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
                        <Nav className='me-auto my-2 my-lg-0'>
                            <CustomLink className='nav-link' to='/'>
                                Home
                            </CustomLink>
                            <CustomLink className='nav-link' to='/about'>
                                About
                            </CustomLink>
                            <CustomLink className='nav-link' to='/portfolio'>
                                Portfolio
                            </CustomLink>
                            <CustomLink className='nav-link' to='/contact'>
                                Contact
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <ul className={isActive ? "active" : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </ul>
    )
}