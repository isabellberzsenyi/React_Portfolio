import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  FaHeart,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaCoffee
} from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <Container style={{ marginTop: "1em" }}>
        <Row>
          <Col md={{ size: 7 }}>
            <h6 className="footer-right">
              Made with <FaHeart /> and <FaCoffee /> by Izzy
            </h6>
          </Col>
          <Col md={{ size: 5 }}>
            <h6 style={{ textAlign: "right" }}>
              <FaEnvelope className="footer-icon" />{" "}
              <FaLinkedinIn className="footer-icon" />{" "}
              <FaGithub className="footer-icon" />
            </h6>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
