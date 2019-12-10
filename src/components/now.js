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
                <a href="/impossiblelist">here</a>. This page is inspired by
                <a href="https://sivers.org/now">Derek Sivers</a>.
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
                  Currently I'm living in <b>Boston, MA</b> and finishing up my
                  six-month co-op working at Thermo Fisher Scientific as a
                  Software Engineer
                </li>
                <li>
                  In my free time I love to slow down and wind down and practice
                  <b> yoga</b> and meditation
                </li>
                <li>
                  I'm also pushing myself to train for my second{" "}
                  <b>half marathon</b> in March
                </li>
                <li>
                  My latest personal project is teaching myself <b>React</b> and
                  creating this website
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
                  Spending quality time with my friends, boyfriend and family,
                  and being the best friend/girlfriend/daughter/sister I can be
                </li>
                <li>
                  Listening to my body with how I stay active and what I eat
                </li>
                <li>
                  Personal projects, practicing coding problems and reading
                  about the programming community
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
                  Recently finished reading <b>The Defining Decade</b> by Meg
                  Jay and now reading <b>The Subtle Art of Not Giving a F*ck</b>{" "}
                  by Mark Manson
                </li>
                <li>
                  I have become obsessed with Podcasts, my favorites right now
                  are <b>Girls Gotta Eat</b> and <b>Beautiful/Anonymous</b>
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
