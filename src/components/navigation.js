import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Navbar,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import LandingPage from "./landingpage";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

const activeStyle = { color: "purple" };
const nonActiveStyle = { color: "lightblue" };
const hoverStyle = { color: "teal" };

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }} style={{ textAlign: "center" }}>
            <h1
              className="navigation-header"
              style={{ paddingBottom: "1%", paddingTop: "1%" }}
            >
              <a href="/" style={{ textDecoration: "none" }}>
                Isabell Berzsenyi
              </a>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8, offset: 2 }} style={{ paddingTop: "0" }}>
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
              <Dropdown
                nav
                onMouseOver={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}
              >
                <DropdownToggle
                  nav
                  className={
                    this.props.active === "about"
                      ? "navLinkActive"
                      : "navLinkNonActive"
                  }
                >
                  About
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem className="d" href="/">
                    <p className="dropdown">Meet Izzy</p>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="/now">
                    <p className="dropdown">What I'm up to now</p>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href="impossiblelist">
                    <p className="dropdown">Impossible List</p>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <NavItem>
                <NavLink
                  className={
                    this.props.active === "projects"
                      ? "navLinkActive"
                      : "navLinkNonActive"
                  }
                  href="/projects"
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    this.props.active === "resume"
                      ? "navLinkActive"
                      : "navLinkNonActive"
                  }
                  href="/resume"
                >
                  Resume
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    this.props.active === "contact"
                      ? "navLinkActive"
                      : "navLinkNonActive"
                  }
                  href="/contact"
                >
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
