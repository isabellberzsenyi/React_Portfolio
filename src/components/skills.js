import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Skills extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "0", textAlign: "left" }}>
          <Row>
            <Col md={{ size: 3, offset: 1 }}>
              <h6>
                <b>{this.props.type}:</b>
              </h6>
            </Col>
            <Col md={{ size: 7 }}>
              <p
                style={{
                  paddingTop: "1em",
                  paddingBottom: "1em"
                }}
              >
                {this.props.list}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Skills;
