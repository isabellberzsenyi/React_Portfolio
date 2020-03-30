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
      <Container style={{ marginTop: ".5em" }}>
        <Row>
          <Col md={{ size: 7 }}>
            <h6 className="footer-right">
              Made with <FaHeart /> and <FaCoffee /> by Izzy
            </h6>
          </Col>
          <Col md={{ size: 5 }}>
            <h6 style={{ textAlign: "right" }}>
              //{" "}
              <a href="mailto:berzsenyi.i@husky.neu.edu">
                <FaEnvelope className="footer-icon" />
                //{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/isabell-berzsenyi"
                target="_blank"
              >
                <FaLinkedinIn className="footer-icon" />
              </a>
              <a href="https://github.com/isabellberzsenyi" target="_blank">
                <FaGithub className="footer-icon" />
              </a>
            </h6>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
