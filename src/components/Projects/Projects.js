import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import liareports from "../../Assets/Projects/liareports/liareports.png";
import liareports_carousel1 from "../../Assets/Projects/liareports/carouselPhoto1.png";
import liareports_carousel2 from "../../Assets/Projects/liareports/carouselPhoto2.png";
import liareports_carousel3 from "../../Assets/Projects/liareports/carouselPhoto3.png";
import liareports_carousel4 from "../../Assets/Projects/liareports/carouselPhoto4.png";
import liareports_carousel5 from "../../Assets/Projects/liareports/carouselPhoto5.png";
import linear_regression from "../../Assets/Projects/linear_regression/linear_regression.png";
import linear_regression_carousel1 from "../../Assets/Projects/linear_regression/carouselPhoto1.png";
import linear_regression_carousel2 from "../../Assets/Projects/linear_regression/carouselPhoto2.png";
import linear_regression_carousel3 from "../../Assets/Projects/linear_regression/carouselphoto3.png";
import flexsim from "../../Assets/Projects/flexsim/flexsim.png";
import flexsim_carousel1 from "../../Assets/Projects/flexsim/carouselPhoto1.png";
import flexsim_carousel2 from "../../Assets/Projects/flexsim/carouselPhoto2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liareports} //Jan 2023
              carouselImages={[
                liareports,
                liareports_carousel1,
                liareports_carousel2,
                liareports_carousel3,
                liareports_carousel4,
                liareports_carousel5,
              ]}
              isBlog={false}
              title="LIAReports"
              description="I developed this next.js React web app from scratch to standardize and expedite the design process. It utilizes a prisma db to store information on parts, manufacturers, vendors, and projects. Designers can build out hierarchical projects and populate them with parts, and project managers can track the order and receipt of those parts. Additonally, purchase orders and packing slips can be generated as PDFs."
              ghLink="https://github.com/christopherparker1923/liareports"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linear_regression} //July 2023
              carouselImages={[
                linear_regression,
                linear_regression_carousel1,
                linear_regression_carousel2,
                linear_regression_carousel3,
              ]}
              isBlog={false}
              title="Linear Regression"
              description="This is a tool I built using PySimpleGUI, matplotlib, and scikit. The user can choose a csv with an x vector and a y vector to determine the level of corellation between the data sets. "
              ghLink="https://github.com/christopherparker1923/linear-regression"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flexsim}
              carouselImages={[flexsim, flexsim_carousel1, flexsim_carousel2]}
              isBlog={false}
              title="Discrete Event Simulation"
              description="Discrete event simulation software use a combination of graphical and script programming to simulate outcomes. The partially visual nature means that the coresponding languages are heavily object oriented."
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          {/*<Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
