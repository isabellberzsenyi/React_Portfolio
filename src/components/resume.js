import React, { useState } from "react";
import { Container, Row, Col, Collapse, CardBody, Card } from "reactstrap";
import Education from "./education";
import Navigation from "./navigation";
import Work from "./work";
import Skills from "./skills";
import School from "./school";
import Res from "./../RESUME.pdf";

const Resume = props => {
  const onResumeClick = () => {
    window.open(Res);
  };

  // Constants to open/close category drawers
  const [isOpen1, setIsOpen1] = useState(false);
  const toggle1 = () => setIsOpen1(!isOpen1);

  const [isOpen2, setIsOpen2] = useState(false);
  const toggle2 = () => setIsOpen2(!isOpen2);

  const [isOpen3, setIsOpen3] = useState(false);
  const toggle3 = () => setIsOpen3(!isOpen3);

  return (
    <div>
      <Navigation active="resume" />
      <Container style={{ paddingTop: "1em", textAlign: "center" }}>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <h1>Resume</h1>
            <h6 style={{ fontWeight: "normal" }}>
              <b>
                I am now applying for a fall (July 2020 - Jan 2020) Software
                Engineering/Developping co-op.
              </b>
              <br />
              You can learn more about my experience below or download my resume
              <a onClick={onResumeClick}> here</a>!
            </h6>
          </Col>
        </Row>
        <Row className="res-drawers">
          <Col>
            <h1 className="resume-collapse" onClick={toggle1}>
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

        <Row className="res-drawers">
          <Col>
            <h1 className="resume-collapse" onClick={toggle2}>
              Work Experience
            </h1>
            <Collapse isOpen={isOpen2}>
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

        <Row className="res-drawers">
          <Col>
            <h1 className="resume-collapse" onClick={toggle3}>
              Skills
            </h1>
            <Collapse isOpen={isOpen3}>
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
