import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./navigation";
import { FaEnvelope, FaLinkedinIn, FaGithub, FaFile } from "react-icons/fa";
import Resume from "./../RESUME.pdf";

class Contact extends Component {
  onResumeClick() {
    window.open(Resume);
  }

  render() {
    return (
      <div>
        <Navigation active="contact" />
        <Container style={{ paddingTop: "1.5em", textAlign: "center" }}>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h1>Contact Izzy</h1>
              <h4 style={{ paddingTop: "1em" }}>I'd love to hear from you!</h4>
            </Col>
          </Row>
          <Row style={{ paddingTop: "3em" }}>
            <Col md={{ size: 2, offset: 2 }}>
              <div className="icon-background">
                <FaEnvelope className="contact-icon" />
              </div>
            </Col>
            <Col md={{ size: 2 }}>
              <a
                href="https://www.linkedin.com/in/isabell-berzsenyi"
                target="_blank"
              >
                <div className="icon-background">
                  <FaLinkedinIn className="contact-icon" />
                </div>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              <a href="https://github.com/isabellberzsenyi" target="_blank">
                <div className="icon-background">
                  <FaGithub className="contact-icon" />
                </div>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              //{" "}
              <a onClick={this.onResumeClick} target="_blank">
                <div className="icon-background">
                  <FaFile className="contact-icon" />
                </div>
                //{" "}
              </a>
            </Col>
          </Row>

          <Row className="contact-second-row">
            <Col md={{ size: 2, offset: 2 }}>
              <h4 className="contact-links">Email</h4>
            </Col>
            <Col md={{ size: 2 }}>
              <a
                href="https://www.linkedin.com/in/isabell-berzsenyi"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <h4 className="contact-links">LinkedIn</h4>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              <a
                href="https://github.com/isabellberzsenyi"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <h4 className="contact-links">GitHub</h4>
              </a>
            </Col>
            <Col md={{ size: 2 }}>
              <a onClick={this.onResumeClick}>
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
