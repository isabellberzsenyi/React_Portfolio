import React, { useState } from "react";
import { Container, Row, Col, Collapse, CardBody, Card } from "reactstrap";
import Navigation from "./navigation";
import Work from "./work";
import Skills from "./skills";
import School from "./school";
import Res from "./../RESUME.pdf";

const Resume = (props) => {
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
            <h6 style={{ fontWeight: "normal", textAlign: "center" }}>
              <b>
                I am a current Software Engineering Intern at MyCase, Inc. for the summer and fall
                of 2020.
              </b>
              <br />
              You can learn more about more about my experience below!
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
                      dates="July - December 2019"
                      compName="Thermo Fisher Scientific"
                      role="Software Engineering Co-op"
                      location="Boston, MA"
                      list1="Identified cybersecurity risks involving FTP, Telnet, and SSH and delivered new security features for gas analysis instruments"
                      list2="Curated solutions to address customer issues on released instruments, tracked issues in Jira, and wrote solutions in C++ and C"
                      list3="Performed regression testing for instrument security using a recently released firmware"
                    />
                    <Work
                      dates="May - August 2018"
                      compName="Luxfer Holdings, PLC"
                      role="Investor Relations Intern"
                      location="Milwaukee, WI"
                      list1="Designed and launched a new website with new look and updated content (https://www.luxfer.com/)"
                      list2="Proposed and implemented new architecture, organization, and design for the corporate website"
                      list3="Led communication with international vendors and collaborated with business unit managers on ideas to execute design"
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
                      list="Java, Ruby, C++, JavaScript, Python, MySQL, HTML, CSS, Command Line"
                    />
                    <Skills type="Frameworks" list="Ruby on Rails, React, MVC, Bootstrap, Agile" />
                    <Skills type="Tools" list="Git, SVN, Microsoft Office Suite" />
                    <Skills
                      type="Languages"
                      list="English (Native), Hungarian (Fluent), French (Intermediate)"
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
