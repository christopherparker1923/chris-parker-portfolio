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
            {/* TODO add epic sailing picture, bouncing ball of paddle pickleball shot, a couple 3D designs in blender */}
            <li className="about-activity">
              <ImPointRight /> Sailing
            </li>
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
          <p style={{ textAlign: "justify" }}>
            3 books that had an impact on me:
          </p>
          <ul>
            {/* TODO add epic sailing picture, bouncing ball of paddle pickleball shot, a couple 3D designs in blender */}
            <li className="about-activity">
              <ImPointRight /> The Ministry for the Future
            </li>
            <li className="about-activity">
              <ImPointRight /> The Death of Ivan Ilyich
            </li>
            <li className="about-activity">
              <ImPointRight /> Limits to Growth
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
