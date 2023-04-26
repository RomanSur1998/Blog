import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <div style={{ marginBottom: "80px" }}>
      <Navbar
        bg="dark"
        variant="dark"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          textDecoration: "none",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              textDecoration: "none",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              Home
            </Link>
            <Link
              to="/add"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              Add
            </Link>
            <Link
              to="/cont"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              Contact
            </Link>
            <Link
              to="/det"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              Details
            </Link>
            <Link
              to="/fav"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              Favorites
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              Aboit us
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
