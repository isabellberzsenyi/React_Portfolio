import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Education extends Component {
  render() {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="2017 - present"
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
      >
        <h3 className="vertical-timeline-element-title">
          Northeastern University
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
        <p>Bachelor of Science in Computer Science | Expected: Dec 2021</p>
        <p>GPA: 3.71</p>
      </VerticalTimelineElement>
    );
  }
}

export default Education;
