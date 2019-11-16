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
      <VerticalTimelineElement
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
      </VerticalTimelineElement>
    );
  }
}

export default Work;
