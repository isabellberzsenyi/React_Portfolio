import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navigation from "./navigation";
import { CsvToHtmlTable } from "react-csv-to-table";

const impList = `
Category,Task,Status,Completed
Mind/Body, Meditate for 7 days straight, Done, Yes
Mind/Body, Complete 8 weeks of Sweat It To Shred It, Working,
Learning, Create a blog, Working,
Art, Paint jeans, ,
Learning, Create Khoury Kalendar in Ruby, ,
Learning, Listen to a french podcast, ,
Learning, Watch a Ted Talk, , 
Learning, Complete Ruby on Codecademy, Done, Yes
Art, Create a Self-Portrait, ,
Personal, Write letters, ,
Personal, Create a Post-Quarantine list, ,
`;

const working = `
Category,Task
Mind/Body, Week 1 of Sweat It To Shred It
Learning, Create a blog
Art, Paint jeans
`;

const completed = `
Category,Task
Mind/Body, Meditate for 7 days straight
Learning, Complete Ruby on Codecademy
`;

class ImpossibleList extends Component {
  render() {
    return (
      <div>
        <Navigation active="about" />
        <Container style={{ paddingTop: "1.5em", textAlign: "center" }}>
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <h1>My Impossible List</h1>
              {/* <h4 style={{ paddingTop: "1em" }}>
                It's only impossible until I get it done, this is all a work in
                progress.
              </h4> */}
              <h4 style={{ paddingTop: "1em" }}>Quarantine Edition - April 21, 2020</h4>
              <h6>
                A normal bucket list is boring, consisting of things that seem
                possible. But an impossible list is the opposite, all the things
                I have dreamed to do and will do. This page is inspired by
                <a href="https://impossiblehq.com/impossible-list/">
                  Joel Runyon
                </a>
                . Enjoy!
              </h6>
            </Col>
          </Row>
          <Row style={{ marginTop: "1em" }}>
            <Col md={{ size: 5, offset: 1 }}>
              <h4 style={{ color: "#8c2c16", marginBottom: ".5em" }}>
                Working on now
              </h4>
              <CsvToHtmlTable
                data={working}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
              />
            </Col>
            <Col md={{ size: 5 }}>
              <h4 style={{ color: "#8c2c16", marginBottom: ".5em" }}>
                Recently completed
              </h4>
              <CsvToHtmlTable
                data={completed}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "2em" }}>
            <Col md={{ size: 10, offset: 1 }}>
              <h4 style={{ color: "#8c2c16", marginBottom: ".5em" }}>
                Complete Impossible List
              </h4>
              <CsvToHtmlTable
                data={impList}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ImpossibleList;
