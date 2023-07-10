import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  // SiSlack,
  SiVercel,
  // SiMacos,
  SiDiscord,
  SiPlanetscale,
  SiWireshark,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GrMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPlanetscale />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWireshark />
      </Col>
    </Row>
  );
}

export default Toolstack;
