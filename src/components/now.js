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
                This section contains what I'm up to at the moment and my recent
                accomplishments. It balances out my goal-focused mindset seen
                <a href="/impossiblelist"> here</a>. This page is inspired by
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
                  Currently I'm living in <b>Boston, MA</b> and remotely interning at <b>AppFolio</b>, on the MyCase product.
                </li>
                <li>
                  I'm enjoying working out outside, while also learning to enjoy running again!
                </li>
                <li>
                  My newest personal project is creating a <b>Work Generator</b> with a cool name and code coming soon!
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
                  Living in the moment and spending quality time with my closest friends.
                </li>
                <li>
                  Focusing on eating whole foods and learning to cook delicious (and healtny) meals!
                </li>
                <li>
                  Learning work-life balance, while being challenged daily at my remote internship.
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
                  Recently finished reading <b>The Brain: The Story of You</b> by David Eagleman
                   and now I'm reading <b>The War Doctor</b>{" "}
                  by David Nott.
                </li>
                <li>
                  I have become obsessed with Podcasts, my favorites right now
                  are <b>Girls Gotta Eat</b> and <b>The Daily.</b>
                </li>
                <li>
                  I love to listen to music here are my favorite songs at the
                  moment:
                </li>
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
