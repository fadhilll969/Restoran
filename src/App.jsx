import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// import
import Home from './page/Home';
import Menu from './page/Menu';

function App() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark navbar-dark">
        <Container fluid>
          <Navbar.Brand href="#" className="  ml-15">🍽 Restoran</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex gap-4 mr-13 text-white">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="#action2">Cart</Nav.Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App