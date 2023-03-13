import React from 'react';
import reactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, NavDropdown, Container, Image } from 'react-bootstrap';
import planet_express_logo_by_pencilshade from '../img/planet_express_logo_by_pencilshade-d6ob7af-2931764163.png'

export default function Header({ currentPage, pageChange }) {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar id='heading' href='/'>
                            <Image className='col-md-1' src={planet_express_logo_by_pencilshade} />
                    </Navbar>
                </Container>
            </Navbar>
        </>
    );
}