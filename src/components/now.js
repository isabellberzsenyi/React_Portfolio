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
                  Currently I'm living in <b>Boston, MA</b> and just finished my third year at Northeastern University.
                   
                </li>
                <li>
                  In my free time I love to slow down and practice
                  <b> yoga</b>.
                </li>
                <li>
                  My latest personal project is teaching myself <b>Ruby</b> through Codecademy and creating <b>Khoury Kalendar </b>  
                  in my Human Computer Interaction course.
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
                  Spending virtual quality time with friends and family near and far, overall connecting while apart.
                </li>
                <li>
                  Keeping myself sane while practicing social distancing, by journaling, working out, teaching myself Ruby
                   and cooking.
                </li>
                <li>
                  Practicing my headstand!
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
                  are <b>Girls Gotta Eat</b> and <b>Moden Love.</b>
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
