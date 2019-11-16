import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Footer extends Component {
  render() {
    return (
      <Container
        style={{
          marginTop: "4em",
          marginBottom: "1em"
        }}
      >
        <Row>
          <Col md={{ size: 10 }}>
            <h1
              style={{
                fontSize: "25px",
                bottom: "0",
                margin: "0",
                padding: "0",
                textAlign: "left"
              }}
            >
              Made by izzy
            </h1>
          </Col>
          <Col md={{ size: 2 }} style={{ textAlign: "right" }}>
            <h4> icon1 // icon2 </h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
