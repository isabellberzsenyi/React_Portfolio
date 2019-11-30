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
import Calculator from "./../projects/calculator/Calculator";
import TicTacToe from "./../projects/tictactoe/TicTacToe";
import WeatherApp from "./../projects/weatherapp/WeatherApp";
import ToDoList from "./../projects/todolist/ToDoListApp";

const ProjectCardReact = props => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="project-card">
      <Card>
        <CardBody>
          <CardTitle style={{ fontWeight: "bolder" }}>
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
                backgroundColor: "#d9cccc",
                border: "2px solid #d9cccc",
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
              {props.project === "calculator" ? (
                <Calculator />
              ) : (
                <div>
                  {props.project === "tictactoe" ? (
                    <TicTacToe />
                  ) : (
                    <div>
                      {props.project === "weatherapp" ? (
                        <WeatherApp />
                      ) : (
                        <div>
                          {props.project === "todolist" ? (
                            <ToDoList />
                          ) : (
                            <div> "eek"</div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
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
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  <a
                    style={{ color: "#8c2c16" }}
                    href="mailto:iberzsenyi@yahoo.com"
                  >
                    To prevent plagiarism, the code to this project is hidden.
                    To get more information please contact me.
                  </a>
                </div>
              )}
            </ModalFooter>
          </Modal>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectCardReact;
