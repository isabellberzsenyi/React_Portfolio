import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./navigation";

class Now extends Component {
  render() {
    return (
      <div>
        <Navigation active="about" />
        <Container>
          <Row>
            <Col>Now</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Now;
