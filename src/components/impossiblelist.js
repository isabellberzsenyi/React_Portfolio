import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import Navigation from "./navigation";
import { CsvToHtmlTable } from "react-csv-to-table";

const sampleData = `
Category,Task,Status,Completed,Notes
Mind/Body, Meditate for 7 days straight, , ,
Mind/Body, Meditate for 30 days straight, , ,
Mind/Body, Run 2nd Half Marathon, , ,
Learning, Read 1 book/week for a month, , ,
Travel, Climb Machu Picchu, , ,
Travel, Hike the Santa Domingo trail, , ,
Travel, Solo trip around Europe, , ,
Travel, Trip to Asia, , ,
`;

class ImpossibleList extends Component {
  render() {
    return (
      <div>
        <Navigation active="about" />
        <Container style={{ paddingTop: "2.5em", textAlign: "center" }}>
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <h1
                style={{
                  textTransform: "uppercase",
                  padding: "0",
                  margin: "0",
                  fontWeight: "bold",
                  fontSize: "50px"
                }}
              >
                My Impossible List
              </h1>
              <h4 style={{ paddingTop: "1em" }}>
                It's only impossible until I get it done, this is all a work in
                progress.
              </h4>
            </Col>
          </Row>
          <Row style={{ marginTop: "2em" }}>
            <Col md={{ size: 10, offset: 1 }}>
              <CsvToHtmlTable
                data={sampleData}
                csvDelimiter=","
                tableClassName="table table-striped table-hover"
              />
              ;
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ImpossibleList;
