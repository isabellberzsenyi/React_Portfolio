import React, { useState, Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
  CardBody,
  CardSubtitle
} from "reactstrap";

const ProjectCard = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="project-card">
      <Card>
        <CardBody>
          <CardTitle>
            <h4 className="cardTitle">{props.title}</h4>
          </CardTitle>
          <img
            width="50%"
            height="150px"
            src={props.image}
            required
            alt={props.alt}
          />
          <CardSubtitle
            style={{
              marginTop: ".5em",
              marginBottom: ".5em",
              textAlign: "left"
            }}
          >
            <b
              style={{
                backgroundColor: "#c09f9e",
                border: "2px solid #c09f9e",
                borderRadius: "20%",
                padding: "2px",
                marginRight: "5px"
              }}
            >
              Tags:
            </b>
            {props.attributes}
          </CardSubtitle>
          <h5
            style={{
              margin: "auto",
              fontSize: "20px"
            }}
            onClick={toggle}
          >
            Learn More...
          </h5>
          <Modal
            isOpen={modal}
            toggle={toggle}
            className={props.classname}
            size="lg"
          >
            <ModalHeader toggle={toggle}>
              <h1>{props.title}</h1>
            </ModalHeader>
            <ModalBody style={{ margin: "auto" }}>
              <div
                style={{
                  textAlign: "justify",
                  width: "90%",
                  margin: "auto",
                  wordWrap: "break-word",
                  wordBreak: "normal"
                }}
              >
                <p>{props.modalDescription}</p>
                {props.modalDescription2 ? (
                  <p>{props.modalDescription2}</p>
                ) : null}
              </div>

              <img
                style={{
                  textAlign: "center",
                  margin: "auto",
                  width: "30%",
                  height: "30%",
                  marginLeft: "35%"
                }}
                src={props.modalImg}
                required
                alt="Image for animator project."
              />
            </ModalBody>
            <ModalFooter
              style={{ margin: "auto", width: "100%", textAlign: "center" }}
            >
              {props.codeBol ? (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <p>
                    <a
                      style={{ color: "#8c2c16" }}
                      href={props.codeLink}
                      target="_blank"
                    >
                      View Code
                    </a>
                    <br />
                    <a
                      style={{ color: "#8c2c16" }}
                      href={props.demoLink}
                      target="_blank"
                    >
                      View Demo
                    </a>
                  </p>
                </div>
              ) : (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <p>
                    <a
                      style={{ color: "#8c2c16" }}
                      href="mailto:iberzsenyi@yahoo.com"
                    >
                      To prevent plagiarism, the code to this project is hidden.
                      To get more information please contact me.
                    </a>
                  </p>
                </div>
              )}
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCard;
