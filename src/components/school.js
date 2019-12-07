import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class School extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col
              md={{ size: 4, offset: 1 }}
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              <b>Northeastern University | Boston, MA</b>
            </Col>
            <Col
              md={{ size: 6 }}
              style={{
                textAlign: "right",
                padding: "0"
              }}
            >
              <b>Expected: Dec 2021</b>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ size: 4, offset: 1 }}
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              <i>Bachelor of Science in Computer Science</i>
            </Col>
            <Col
              md={{ size: 6 }}
              style={{
                textAlign: "right",
                padding: "0"
              }}
            >
              <i>GPA: 3.7</i>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ size: 10, offset: 1 }}
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              <p>
                <b>Relevant Courses:</b> Object-Oriented Design, Logic and
                Computation, Embedded Design, Fundamentals of Computer Science,
                Algorithms and Data Structures, Computer Systems
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ size: 10, offset: 1 }}
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              <p>
                <b>Awards:</b>
                <ul style={{ marginLeft: "1em" }}>
                  <li>Dean's List, 2017 - 2019</li>
                  <li>William DiPietro Scholarship 2017-2019</li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ size: 10, offset: 1 }}
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              <p>
                <b>Student Leadership:</b>
                <ul style={{ marginLeft: "1em" }}>
                  <li>
                    <i>NU Women in Technology 09/2018 - Present:</i> Member
                  </li>
                  <li>
                    <i>Sigma Kappa Sorority 09/2017 - Present:</i> Triangle
                    Correspondent (01/2019-05/2019), Webmaster (01/2020-05/2020)
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default School;
