import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./header";
import Navigation from "./navigation";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaFile } from "react-icons/fa";

class Contact extends Component {
  render() {
    return (
      <div>
        <Navigation active="contact" />
        <Container style={{ paddingTop: "2.5em", textAlign: "center" }}>
          <Row style={{ padding: "0", margin: "0" }}>
            <Col style={{ padding: "0", margin: "0" }}>
              <h1
                style={{
                  textTransform: "uppercase",
                  padding: "0",
                  margin: "0",
                  fontWeight: "bold",
                  fontSize: "50px"
                }}
              >
                Contact Izzy
              </h1>
              <h4 style={{ paddingTop: "1em" }}>I'd love to hear from you!</h4>
            </Col>
          </Row>
          <Row style={{ paddingTop: "3em" }}>
            <Col md={{ size: 2, offset: 2 }}>
              <a href="http://www.google.com">
                <div className="icon-background">
                  <FaEnvelope className="contact-icon" />
                </div>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              <a href="http://www.google.com">
                <div className="icon-background">
                  <FaLinkedinIn className="contact-icon" />
                </div>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              <a href="http://www.google.com">
                <div className="icon-background">
                  <FaGithub className="contact-icon" />
                </div>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              <a href="http://www.google.com">
                <div className="icon-background">
                  <FaFile className="contact-icon" />
                </div>
              </a>
            </Col>
          </Row>

          <Row style={{ paddingTop: "2em" }}>
            <Col md={{ size: 2, offset: 2 }}>
              <a
                href="http://www.google.com"
                style={{ textDecoration: "none" }}
              >
                <h4 className="contact-links">Email</h4>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              <a
                href="http://www.google.com"
                style={{ textDecoration: "none" }}
              >
                <h4 className="contact-links">LinkedIn</h4>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              <a
                href="http://www.google.com"
                style={{ textDecoration: "none" }}
              >
                <h4 className="contact-links">GitHub</h4>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              <a
                href="http://www.google.com"
                style={{ textDecoration: "none" }}
              >
                <h4 className="contact-links">Resume</h4>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;