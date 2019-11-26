import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./navigation";

class Now extends Component {
  render() {
    return (
      <div>
        <Navigation active="about" />
        <Container style={{ paddingTop: "2.5em", textAlign: "center" }}>
          <Row>
            <Col>
              <h1
                style={{
                  textTransform: "uppercase",
                  padding: "0",
                  margin: "0",
                  fontWeight: "bold",
                  fontSize: "50px"
                }}
              >
                What I'm Doing NOW
              </h1>
              <h4 style={{ paddingTop: "1em" }}>
                Life changes a lot but here's what's going on now.
              </h4>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col md={{ size: 10, offset: 1 }}>
              <h3>
                Here's What I'm Doing <b>Now</b>
              </h3>
              <ul style={{ textAlign: "left", marginLeft: "2em" }}>
                <li>
                  Be superior tuxedo cats always looking dapper but cat gets
                  stuck in tree firefighters try to get cat
                </li>
                <li>
                  Be superior tuxedo cats always looking dapper but cat gets
                  stuck in tree firefighters try to get cat
                </li>
                <li>
                  Be superior tuxedo cats always looking dapper but cat gets
                  stuck in tree firefighters try to get cat
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col md={{ size: 10, offset: 1 }}>
              <h3>
                Here's What I'm Reading/Watching <b>Now</b>
              </h3>
              <ul style={{ textAlign: "left", marginLeft: "2em" }}>
                <li>
                  Be superior tuxedo cats always looking dapper but cat gets
                  stuck in tree firefighters try to get cat
                </li>
                <li>
                  Be superior tuxedo cats always looking dapper but cat gets
                  stuck in tree firefighters try to get cat
                </li>
                <li>
                  Be superior tuxedo cats always looking dapper but cat gets
                  stuck in tree firefighters try to get cat
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col md={{ size: 10, offset: 1 }}>
              <h3>
                Here's What I'm Listening to <b>Now</b>
              </h3>
              <ul style={{ textAlign: "left", marginLeft: "2em" }}>
                <li>
                  Be superior tuxedo cats always looking dapper but cat gets
                  stuck in tree firefighters try to get cat
                </li>
                <li>
                  Be superior tuxedo cats always looking dapper but cat gets
                  stuck in tree firefighters try to get cat
                </li>
                <li>
                  Be superior tuxedo cats always looking dapper but cat gets
                  stuck in tree firefighters try to get cat
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Now;
