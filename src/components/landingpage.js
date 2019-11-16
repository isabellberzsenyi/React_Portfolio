import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav, NavItem, NavLink } from "reactstrap";
import Header from "./header";
import "./../App.css";
import Navigation from "./navigation";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row style={{ paddingTop: "10%" }}>
            <Col
              md={{ size: 7, offset: 1 }}
              style={{
                margin: "auto",
                paddingLeft: "0"
              }}
            >
              <ul>
                <li>
                  <p>
                    OEWRKAJFAKFJAKFJDSALFSDJAFLDJFLDAJFLDSAJFLDJFLDSAJFLADJFALFJLADFJDLFJDSLFJALDSFDSALFJADLFJDSALFJSDFL
                    LOEWRKAJFAKFJAKFJDSALFSDJAFLDJFLDAJFLDSAJFLDJFLDSAJFLADJFALFJLADFJDLFJDSLFJALDSFDSALFJADLFJDSALFJSDFL
                  </p>
                </li>
                <li>
                  LOEWRKAJFAKFJAKFJDSALFSDJAFLDJFLDAJFLDSAJFLDJFLDSAJFLADJFALFJLADFJDLFJDSLFJALDSFDSALFJADLFJD{" "}
                  <a href="/about">about</a>
                </li>
                <li>
                  LOEWRKAJFAKFJAKFJDSALFSDJAFLDJFLDAJFLDSAJFLDJFLDSAJFLADJFALFJLADFJDLFJDSLFJALDSFDSALFJADLFJD{" "}
                  <a href="/projects">projects</a>
                </li>
                <li>
                  LOEWRKAJFAKFJAKFJDSALFSDJAFLDJFLDAJFLDSAJFLDJFLDSAJFLADJFALFJLADFJDLFJDSLFJALDSFDSALFJADLFJD{" "}
                  <a href="/resume">resume</a>
                </li>
                <li>
                  LOEWRKAJFAKFJAKFJDSALFSDJAFLDJFLDAJFLDSAJFLDJFLDSAJFLADJFALFJLADFJDLFJDSLFJALDSFDSALFJADLFJD{" "}
                  <a href="/contact">contact</a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LandingPage;
