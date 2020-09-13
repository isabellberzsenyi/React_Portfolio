import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./navigation";
import Player from "./player";

class Now extends Component {
  render() {
    return (
      <div>
        <Navigation active="about" />
        <Container style={{ paddingTop: "1.5em", textAlign: "center" }}>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h1>What I'm Doing NOW</h1>
              <h4 style={{ paddingTop: "1em" }}>
                Life changes a lot but here's what's going on now.
              </h4>
              <h6>
                This section contains what I'm up to at the moment and my recent accomplishments.
                This page is inspired by
                <a href="https://sivers.org/now"> Derek Sivers</a>.
              </h6>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col md={{ size: 10, offset: 1 }}>
              <h3>
                What I'm Doing <b>Now</b>
              </h3>
              <ul>
                <li>
                  Currently I'm living in <b>Milwaukee, WI</b> and working remotely full-time as a
                  Software Engineering Intern at <b>MyCase, Inc.</b> on the Payments team.
                </li>
                <li>
                  My newest personal project is creating <b>Work It</b>, a work out generator. It's
                  currently a work in progress where I can improve my Python and React skills. You
                  can check out my code{" "}
                  <a href="https://github.com/isabellberzsenyi/Work-It">here</a>.
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col md={{ size: 10, offset: 1 }}>
              <h3>
                My top priorities <b>Now</b>
              </h3>
              <ul>
                <li>
                  Living in the moment and spending quality time with my closest friends and family.
                </li>
                <li>
                  Improving my Python skills, specifically learning how to create a full-stack
                  application.
                </li>
                <li>
                  Learning work-life balance, while being challenged daily at my remote internship,
                  networking with colleagues and beating the Zoom burnout.
                </li>
              </ul>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col md={{ size: 10, offset: 1 }}>
              <h3>
                What I'm Reading/Listening to <b>Now</b>
              </h3>
              <ul>
                <li>
                  Recently finished reading <b>The Brain: The Story of You</b> by David Eagleman and
                  now I'm reading <b>The War Doctor</b> by David Nott.
                </li>
                <li>
                  I have become obsessed with podcasts, my favorite right now is <b>The Daily.</b>
                </li>
                <li>I love to listen to music here are my favorite songs at the moment:</li>
              </ul>
            </Col>
            <Col md={{ size: 6, offset: 3 }}>
              <Player />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Now;
