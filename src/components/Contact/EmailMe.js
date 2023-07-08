import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Toast from "react-bootstrap/Toast";

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);

  // const toggleShowSuccess = () => setShowSuccess(!showSuccess);
  // const toggleShowFail = () => setShowFail(!showFail);

  const form = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send an email using EmailJS
    emailjs
      .sendForm(
        "service_huu9tne",
        "template_573vg41",
        form.current,
        "8RTMXyLFwVP1DbVUp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowSuccess();
        },
        (error) => {
          console.log(error.text);
          setShowFail();
        }
      );
    event.target.reset();
  };
  return (
    <Container fluid className="contact-section contact-left contact-right">
      <Particle />
      <Container>
        <Row>
          <Col className="contact-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I'D LOVE TO HEAR <span className="purple"> FROM YOU </span>
            </h1>
            <p className="contact-about-body">
              You can email me at{" "}
              <span className="purple"> christopher.parker1923@gmail.com </span>{" "}
              or feel free to use the form below
              <br />
              <br />I look forward to hearing from you about a job, or just
              connecting to grow our respective networks
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
        <Row>
          <Col md={6} className="mb-2">
            <Toast
              className="fixed-bottom-right"
              show={showSuccess}
              onClose={() => {
                setShowSuccess(false);
              }}
              delay={2000}
              autohide
              bg="success"
            >
              <Toast.Body>Email sent!</Toast.Body>
            </Toast>
          </Col>
          <Col md={6} className="mb-2">
            <Toast
              className="fixed-bottom-right"
              show={showFail}
              onClose={() => {
                setShowFail(false);
              }}
              delay={2000}
              autohide
              bg="danger"
            >
              <Toast.Body>Error sending, please try again.</Toast.Body>
            </Toast>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
