import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Education extends Component {
  render() {
    return (
      <div>
        <h3 className="vertical-timeline-element-title">
          Northeastern University
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
        <p>Bachelor of Science in Computer Science | Expected: Dec 2021</p>
        <p>GPA: 3.71</p>
      </div>
    );
  }
}

export default Education;
