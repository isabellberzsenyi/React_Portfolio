import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Skills extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "0" }}>
          <Row>
            <Col
              md={{ size: 4, offset: 1 }}
              style={{ textAlign: "left", border: "2px solid blue" }}
            >
              <b>Skills blah blah</b>
            </Col>
            <Col
              md={{ size: 6 }}
              style={{ textAlign: "right", border: "2px solid red" }}
            >
              Skills
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;
