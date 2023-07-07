import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send an email using EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };
  return (
    <Container fluid className="contact-section contact-left contact-right">
      <Particle />
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            I'D LOVE TO HEAR <span className="purple"> FROM YOU </span>
          </h1>
          <p className="home-about-body">
            I fell in love with programming during my undergrad in Mechatronics.
            <br />
            <br />I am most proficient in
            <i>
              <b className="purple"> Python, and TypeScript, </b>
            </i>
            having used these professionaly since graduation.
            <br />
            <br />I am also familiar with other languages from my studies and
            hobbying &nbsp;
            <br />
            <br />I am currently seeking a full time position, my best
            attributes have always been my
            <i>
              <b className="purple"> dedication and quick learning</b>
            </i>
          </p>
        </Col>
      </Row>
      <Row className="contact">
        <Form onSubmit={(e) => handleSubmit(e)} ref={form}>
          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
            />
            <Form.Label className="floating-label">Name</Form.Label>{" "}
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Control
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
            <Form.Label className="floating-label">Email</Form.Label>{" "}
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Your message"
              required
              style={{ resize: "none" }}
            />
            <Form.Label className="floating-label">Message</Form.Label>{" "}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              marginTop: "2rem",
              textTransform: "uppercase",
              borderRadius: "0",
              backgroundColor: "#444",
              borderColor: "#333",
              borderWidth: "0px",
            }}
          >
            Send Message
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
export default Contact;
