import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


function Menu() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand navbar-dark bg-danger">
   
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="navbar-brand me-4" to="/">🏠 Home</Link>
            <Link className="navbar-brand" to="/contacto">📝 Contacto</Link>
            <span className="navbar-brand">Happy Cake 🍰</span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
