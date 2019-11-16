import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Header from "./header";
import Education from "./education";
import "../App.css";
import Work from "./work";
import Skills from "./skills";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

class Resume extends Component {
  render() {
    return (
      <div>
        <VerticalTimeline style={{ paddingTop: "2em" }}>
          <Education />
          <Work
            dates="July 2019 - Dec 2019"
            compName="Thermo Fisher Scientific"
            role="Software Engineering Co-op"
            location="Boston, MA"
            list1="Be superior tuxedo cats always looking dapper but cat gets stuck in tree firefighters try to get cat"
            list2="Be superior tuxedo cats always looking dapper but cat gets stuck in tree firefighters try to get cat"
            keyachieve="Be superior tuxedo cats always looking dapper but cat gets stuck in tree firefighters try to get cat"
          />
          <Work
            dates="May 2018 - Aug 2018"
            compName="Luxfer Holdings, PLC"
            role="Investor Relations Intern"
            location="Milwaukee, WI"
            list1="Be superior tuxedo cats always looking dapper but cat gets stuck in tree firefighters try to get cat"
            list2="Be superior tuxedo cats always looking dapper but cat gets stuck in tree firefighters try to get cat"
            keyachieve="Be superior tuxedo cats always looking dapper but cat gets stuck in tree firefighters try to get cat"
          />
        </VerticalTimeline>
      </div>
    );
  }
}

export default Resume;
