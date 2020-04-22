import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Work extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "0" }}>
          <Row>
            <Col
              md={{ size: 5, offset: 1 }}
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              <h4>{this.props.compName}</h4>
            </Col>
            <Col
              md={{ size: 5 }}
              style={{
                textAlign: "right",
                padding: "0"
              }}
            >
              <b>{this.props.dates}</b>
            </Col>
          </Row>

          <Row>
            <Col
              md={{ size: 5, offset: 1 }}
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              <b>{this.props.role}</b>
            </Col>
            <Col
              md={{ size: 5 }}
              style={{
                textAlign: "right",
                padding: "0"
              }}
            >
              <b>{this.props.location}</b>
            </Col>
          </Row>

          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <ul style={{ textAlign: "left" }}>
                <li>{this.props.list1}</li>
                <li>{this.props.list2}</li>
                <li>{this.props.list3}</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Work;
