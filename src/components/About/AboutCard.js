import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is <span className="purple">Chris Parker </span>
            from <span className="purple"> Stratford, Ontario.</span>
            <br /> I have several years of programming experience in different
            capacities.
            <br />
            Additionally, I am currently employed as a software developer at
            Lineside Industrial Automation.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Kite surfing/skiing
            </li>
            <li className="about-activity">
              <ImPointRight /> Pickelball
            </li>
            <li className="about-activity">
              <ImPointRight /> 3D design in Blender
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
