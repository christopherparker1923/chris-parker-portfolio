import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
            <p style={{ color: "rgb(155 126 172)" }}>
              “If you wish to build a ship, don’t drum up the people to gather
              wood, divide work, and give orders. Instead, teach them to yearn
              for the vast and endless sea“{" "}
            </p>
            <footer className="blockquote-footer">
              Antoine de Saint-Exupery
            </footer>
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          My <strong className="purple">Toolkit</strong>
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
