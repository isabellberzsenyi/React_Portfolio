import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./navigation";

class About extends Component {
  render() {
    return (
      <div style={{ marginBottom: "-1em" }}>
        <Navigation active="about" />
        <Container style={{ paddingTop: "1em", textAlign: "center" }}>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h1>About</h1>
            </Col>
          </Row>

          <Row style={{ paddingTop: "0" }}>
            <Col md={{ size: 6 }} style={{ margin: "auto" }}>
              <div>
                <img
                  src={require("./../img/me2.jpg")}
                  alt="izzy"
                  style={{ width: "100%", height: "250px" }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ size: 10, offset: 1 }}
              style={{
                marginTop: "1em",
                textAlign: "justify",
                marginBottom: "-.5em"
              }}
            >
              <h3>Hi I'm Izzy Berzsenyi!</h3>
              <p>
                I'm a fourth year Computer Science student at Northeastern University, and a Software Engineering
                Intern at AppFolio for the Summer and Fall of 2020. During my third year, I completed a six month co-op 
                during my fall semester at Thermo Fisher Scientific, as a Software Engineering
                co-op. Then in the spring semester I took courses towards my major, including Computer Systems, Human 
                Computer Interaction and Algorithms and Data. My love for programming can be traced back to my first
                semester of freshman year and I have not looked back since. I
                enjoy applying various programming languages to solve
                challenging problems. In addition, I love to explore my interest
                in front-end development, seen by me creating this website! When
                I'm not behind a computer, you can find me on a plane to a new
                country. I have gotten the amazing opportunity to spend over 6
                years living abroad in Europe. During my times abroad, I have
                learned to be appreciative, adaptable and fully immersed in
                different cultures.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
