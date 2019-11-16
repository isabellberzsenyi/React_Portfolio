import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./header";
import Navigation from "./navigation";

class Contact extends Component {
  render() {
    return (
      <Container style={{ paddingTop: "1em" }}>
        <Row>
          <Col>
            <Header content="contact" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;
