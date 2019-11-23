import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Work extends Component {
  render() {
    return (
      <div>
        <Container style={{ padding: "0" }}>
          <Row>
            <Col
              md={{ size: 4, offset: 1 }}
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              <h5>{this.props.compName}</h5>
            </Col>
            <Col
              md={{ size: 6 }}
              style={{
                textAlign: "right",
                padding: "0"
              }}
            >
              <b>{this.props.dates}</b>
            </Col>
          </Row>
          <br />

          <Row>
            <Col
              md={{ size: 4, offset: 1 }}
              style={{
                textAlign: "left",
                padding: "0"
              }}
            >
              <h5>{this.props.role}</h5>
            </Col>
            <Col
              md={{ size: 6 }}
              style={{
                textAlign: "right",
                padding: "0"
              }}
            >
              <b>{this.props.location}</b>
            </Col>
          </Row>
          <Row>
            <Col
              md={{ size: 8, offset: 2 }}
              style={{
                textAlign: "right",
                padding: "0"
              }}
            ></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Work;

{
  /*<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date={this.props.dates}
  iconStyle={{ background: "pink", color: "#fff" }}
>
  <h3 className="vertical-timeline-element-title">
    {this.props.compName}
  </h3>
  <h5 className="vertical-timeline-element-subtitle">
    {this.props.role} | {this.props.location}
  </h5>
  <p>
    <ul>
      <li>{this.props.list1}</li>
      <li>{this.props.list2}</li>
      <li>
        <b>Key Achievement: </b>
        {this.props.keyachieve}
      </li>
    </ul>
  </p>
</VerticalTimelineElement>*/
}
