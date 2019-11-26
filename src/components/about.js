import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./header";
import Navigation from "./navigation";

class About extends Component {
  render() {
    return (
      <div>
        <Navigation active="about" />
        <Container style={{ paddingTop: "3em" }}>
          <Row style={{ listStyle: "none", paddingTop: "0" }}>
            <Col md={{ size: 6, offset: 1, paddingTop: "0" }}>
              <img
                src={require("./../img/me2.jpg")}
                alt="izzy"
                className="izzy-picture"
                style={{ width: "500px", height: "250px" }}
              />
            </Col>
            <Col
              md={{ size: 4 }}
              style={{ textAlign: "center", paddingTop: "0" }}
            >
              <h2 style={{ textTransform: "uppercase" }}>Meet izzy!</h2>
              <ul style={{ textAlign: "left", paddingLeft: "2em" }}>
                <li style={{ marginBottom: ".5em" }}>
                  <p>
                    <b>Major: </b> Computer Science
                  </p>
                </li>
                <li style={{ marginBottom: "1em" }}>
                  <p>
                    <b>Currently in:</b> Boston, MA
                  </p>
                </li>
                <li style={{ marginBottom: "1em" }}>
                  <p>
                    <b>Hometown: </b>Milwaukee, WI
                  </p>
                </li>
                <li style={{ marginBottom: "1em" }}>
                  <p>
                    <b>Hobbies: </b>Yoga, Traveling, Reading, Lattes
                  </p>
                </li>
                <li style={{ marginBottom: "1em" }}>
                  <p>
                    <b>Song on repeat: </b>Lovers Rock by TV Girl
                  </p>
                </li>
              </ul>
            </Col>
          </Row>

          <Row>
            <Col
              md={{ size: 10, offset: 1 }}
              style={{ marginTop: "1em", textAlign: "justify" }}
            >
              <h3>Hi I'm Izzy Berzsenyi!</h3>
              <p>
                I'm a third year Computer Science student at Northeastern
                University. Currently, I am finishing up my fall semester
                working at Thermo Fisher Scientific, as a Software Engineering
                co-op. My love for programming can be traced back to my first
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
