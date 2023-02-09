import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const Header = ({ handleShow }) => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Button variant="outline-success" onClick={handleShow}>Add</Button>
            </Container>
      </Navbar>
    )
};

export default Header;