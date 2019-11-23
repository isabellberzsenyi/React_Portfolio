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
        <Row style={{ marginBottom: "2em" }}>
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

        <Row style={{ marginBottom: "2em" }}>
          <Col>
            <h1 className="resume-collapse" onClick={toggle3}>
              Work Experience
            </h1>
            <Collapse isOpen={isOpen3}>
              <Card>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </Col>
        </Row>

        <Row style={{ marginBottom: "2em" }}>
          <Col>
            <h1 className="resume-collapse" onClick={toggle2}>
              Skills
            </h1>
            <Collapse isOpen={isOpen2}>
              <Col md={{ size: 10, offset: 1 }}>
                <Card>
                  <CardBody>
                    <Skills />
                  </CardBody>
                </Card>
              </Col>
            </Collapse>
          </Col>
        </Row>
      </Container>
      {/*<div style={{ paddingTop: "2em" }}>
          <VerticalTimeline>
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
        </div>*/}
    </div>
  );
};

export default Resume;
