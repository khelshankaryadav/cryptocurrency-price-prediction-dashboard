import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Feedback from "./Feedback";
import Home from "./Home";

const NavMenu = ({ clicked }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => clicked(<Home />)}>
            CryptoDash
          </Navbar.Brand>
          <Nav className="me-auto"></Nav>
          <button onClick={() => clicked(<Home />)}>Home</button>
          <button onClick={() => clicked(<Feedback />)}>Feedback</button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavMenu;
