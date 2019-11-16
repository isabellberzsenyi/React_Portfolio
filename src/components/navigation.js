import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Navbar,
  Container,
  Row,
  Col
} from "reactstrap";
import LandingPage from "./landingpage";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

class Navigation extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }} style={{ textAlign: "center" }}>
            <h1 style={{ paddingTop: "5%", paddingBottom: "2%" }}>
              <a href="/">Isabell Berzsenyi</a>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <Nav
              className="ml-auto"
              justified
              style={{
                fontSize: "20px",
                borderBottom: "2px solid black",
                paddingBottom: "10px",
                marginBottom: "0"
              }}
            >
              {/*<NavItem>
                <NavLink className="navLink" href="/">
                  Home
                </NavLink>
              </NavItem>*/}
              <NavItem>
                <NavLink className="navLink" href="/">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" href="/projects">
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" href="/resume">
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navLink" href="/contact">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
