import React, { useState } from "react";
import { Container, Row, Col, Collapse, CardBody, Card } from "reactstrap";
import Header from "./header";
import Education from "./education";
import Navigation from "./navigation";
import "../App.css";
import Work from "./work";
import Skills from "./skills";
import School from "./school";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Resume = props => {
  const [isOpen1, setIsOpen1] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);

  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);

  const [isOpen3, setIsOpen3] = useState(false);
  const toggle3 = () => setIsOpen3(!isOpen3);
  return (
    <div>
      <Navigation active="resume" />
      <Container style={{ paddingTop: "2.5em", textAlign: "center" }}>
        <Row style={{ marginBottom: "2em", marginTop: "2em" }}>
          <Col>
            <h1 className="resume-collapse education" onClick={toggle1}>
              Education
            </h1>
            <Collapse isOpen={isOpen1}>
              <Col md={{ size: 10, offset: 1 }}>
                <Card>
                  <CardBody>
                    <School />
                  </CardBody>
                </Card>
              </Col>
            </Collapse>
          </Col>
        </Row>

        <Row style={{ marginBottom: "2em", marginTop: "2em" }}>
          <Col>
            <h1 className="resume-collapse work" onClick={toggle3}>
              Work Experience
            </h1>
            <Collapse isOpen={isOpen3}>
              <Col md={{ size: 10, offset: 1 }}>
                <Card>
                  <CardBody>
                    <Work
                      dates="July 2019 - Dec 2019"
                      compName="Thermo Fisher Scientific"
                      role="Software Engineering Co-op"
                      location="Boston, MA"
                      list1="Curate solutions to bugs and customer issues on released gas chemical analysis instruments, issues tracked in Jira and solutions written in C++ and C"
                      list2="Perform regression testing before releasing new quarterly software"
                      list3="Participate and contribute in daily sprint meetings, bi-weekly planning and retrospective meetings"
                      keyachieve=" Analyze code to understand where bugs are and problem solve to cultivate a solution that does not disrupt the rest of the programs"
                    />
                    <Work
                      dates="May 2018 - Aug 2018"
                      compName="Luxfer Holdings, PLC"
                      role="Investor Relations Intern"
                      location="Milwaukee, WI"
                      list1="Proposed and implemented new architecture, organization and design for corporate website"
                      list2="Revised and developed written content to make information more readable and current"
                      list3="Led communication with international vendors and business unit managers to collaborate on ideas and execute design"
                      keyachieve=" Designed the company website to have a new look and up-to-date content, see luxfer.com"
                    />
                  </CardBody>
                </Card>
              </Col>
            </Collapse>
          </Col>
        </Row>

        <Row style={{ marginBottom: "2em", marginTop: "2em" }}>
          <Col>
            <h1 className="resume-collapse skills" onClick={toggle2}>
              Skills
            </h1>
            <Collapse isOpen={isOpen2}>
              <Col md={{ size: 10, offset: 1 }}>
                <Card>
                  <CardBody>
                    <Skills
                      type="Programming Languages"
                      list="C++, Java, JavaScript (Intermediate), HTML, CSS, Command Line, Dr. Racket"
                    />
                    <Skills
                      type="Frameworks"
                      list="React (Intermediate), Bootstrap"
                    />
                    <Skills
                      type="Tools"
                      list="Git, SVN, Microsoft Office Suite"
                    />
                    <Skills type="Methodologies" list="Agile" />
                    <Skills
                      type="Languages"
                      list="Hungarian (Fluent), French (Intermediate)"
                    />
                  </CardBody>
                </Card>
              </Col>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
