import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { FaHeart, FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <Container style={{ marginTop: "2em" }}>
        <Row>
          <Col md={{ size: 7 }}>
            <h5 className="footer-right">
              Made with <FaHeart /> by Izzy
            </h5>
          </Col>
          <Col md={{ size: 5 }} style={{ textAlign: "right" }}>
            <h5>
              <FaEnvelope className="footer-icon" />{" "}
              <FaLinkedinIn className="footer-icon" />{" "}
              <FaGithub className="footer-icon" />
            </h5>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
