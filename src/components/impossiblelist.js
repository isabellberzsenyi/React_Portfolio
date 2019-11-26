import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import Navigation from "./navigation";

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
              <Table hover>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Impossible List</th>
                    <th>Status</th>
                    <th>Date Completed</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ImpossibleList;
