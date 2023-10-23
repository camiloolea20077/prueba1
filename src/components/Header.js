import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FaShoppingCart } from 'react-icons/fa';

const Header = ({ showCart, setShowCart }) => {
  return (
    <Navbar bg="primary" data-bs-theme="white">
      <Container>
        <Navbar.Brand>Tienda</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="/productdetails">Detalles</Nav.Link>
          <Nav.Link onClick={() => setShowCart(!showCart)}>
            <FaShoppingCart /> Carrito
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
