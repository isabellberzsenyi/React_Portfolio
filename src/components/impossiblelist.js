import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import Navigation from "./navigation";
import { CsvToHtmlTable } from "react-csv-to-table";

const impList = `
Category,Task,Status,Completed
Mind/Body, Meditate for 7 days straight, ,
Mind/Body, Meditate for 30 days straight, ,
Mind/Body, Run 2nd Half Marathon, ,
Learning, Read 1 book/week for a month, ,
Travel, Climb Machu Picchu, ,
Travel, Hike the Santa Domingo trail, ,
Travel, Solo trip around Europe, ,
Travel, Trip to Asia, ,
`;

const working = `
Category,Task
Mind/Body, Meditate for 7 days straight
Learning, Read 1 book/week for a month
`;

const completed = `
Category,Task, Completed
Mind/Body, Meditate for 7 days straight,

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
              <h4 style={{ paddingTop: "1em" }}>
                It's only impossible until I get it done, this is all a work in
                progress.
              </h4>
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
