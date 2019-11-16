import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <Container
        style={{
          margin: "0"
        }}
      >
        <h1
          style={{
            textTransform: "uppercase",
            padding: "0",
            textAlign: "left",
            margin: "0"
          }}
        >
          {this.props.content}
        </h1>
      </Container>
    );
  }
}

export default Header;
