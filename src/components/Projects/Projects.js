import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
import linear_regression_carousel3 from "../../Assets/Projects/linear_regression/carouselPhoto3.png";
import flexsim from "../../Assets/Projects/flexsim/flexsim.png";
import flexsim_carousel1 from "../../Assets/Projects/flexsim/carouselPhoto1.png";
import flexsim_carousel2 from "../../Assets/Projects/flexsim/carouselPhoto2.png";
import localization from "../../Assets/Projects/localization/localization.png";
import localization_carousel1 from "../../Assets/Projects/localization/carouselPhoto1.png";
import localization_carousel2 from "../../Assets/Projects/localization/carouselPhoto2.png";
import bookstore from "../../Assets/Projects/bookstore/bookstore.png";
import carbon_calculator from "../../Assets/Projects/carbon_calculator/carbon_calculator.png";
import carbon_calculator_carousel1 from "../../Assets/Projects/carbon_calculator/carouselPhoto1.png";
import carbon_calculator_carousel2 from "../../Assets/Projects/carbon_calculator/carouselPhoto2.png";
import carbon_calculator_carousel3 from "../../Assets/Projects/carbon_calculator/carouselPhoto3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work</strong>
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
              description="I developed this next.js React web app from scratch to standardize and expedite the design process. 
              It utilizes a prisma db to store information on parts, manufacturers, vendors, and projects. Designers can build out hierarchical projects and populate them with parts.
              Project managers can then track the order and receipt of those parts. Finally, purchase orders and packing slips can be generated as PDFs."
              ghLink="https://github.com/christopherparker1923/liareports"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carbon_calculator}
              carouselImages={[
                carbon_calculator,
                carbon_calculator_carousel1,
                carbon_calculator_carousel2,
                carbon_calculator_carousel3,
              ]}
              isBlog={false}
              title="Carbon Footprint Calculator"
              description="The carbon calculator allows users to estimate their carbon footprint based on the specific make, model, and production year of the car they drive. This data comes from the Carbon Interface API. This app also uses React and next.js. "
              ghLink="https://github.com/christopherparker1923/carbon-footprint"
              demoLink="https://carbon-footprint-christopherparker1923.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={localization} //2020
              carouselImages={[
                localization,
                localization_carousel1,
                localization_carousel2,
              ]}
              isBlog={false}
              title="Autonomous Outdoor Localization"
              description="Used a pair of sensors to perform autonomous localization of a pylon in a fixed area. The solution read real time data from time-of-flight bluetooth sensors, and speed and acceleration data from an on board IMU. We implemented both a Kalman filter, and a particle filter in Python to determine an optimal estimate of position at each sensor reading interval. The combination of sensors enabled centimeter level accuracy in determining position. The algorithm was written in python and ran on ROS (Robot OS)."
              ghLink="https://github.com/christopherparker1923/localization"
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
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookstore} //July 2023
              isBlog={false}
              title="Book Information API"
              description="REST API built in Golang and tested using Postman."
              ghLink="https://github.com/christopherparker1923/learning-go"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flexsim} //2018
              carouselImages={[flexsim, flexsim_carousel1, flexsim_carousel2]}
              isBlog={false}
              title="Discrete Event Simulation"
              description="Discrete event simulation software use a combination of graphical and script programming to simulate outcomes. The partially visual nature means that the coresponding languages are heavily object oriented."
            />
          </Col>

          {/*<Col md={4} className="project-card">
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
