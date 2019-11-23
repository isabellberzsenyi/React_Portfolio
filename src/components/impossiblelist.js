import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./navigation";

class ImpossibleList extends Component {
  render() {
    return (
      <div>
        <Navigation active="about" />

        <Container>
          <Row>
            <Col>ImpossibleList</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ImpossibleList;
