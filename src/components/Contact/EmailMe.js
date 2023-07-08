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
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I'D LOVE TO HEAR <span className="purple"> FROM YOU </span>
            </h1>
            <p className="home-about-body">
              You can find my contact info on my{" "}
              <span className="purple"> resume </span> or feel free to use the
              form below.
              <br />
              <br />I look forward to hearing from you about a job or just
              connecting to grow my network.
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
            <Button onClick={setShowSuccess(true)} className="mb-2">
              Toggle Toast <strong>with</strong> Animation
            </Button>
            <Toast show={showSuccess} onClose={setShowSuccess(false)}>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>
                Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast>
          </Col>
          {/* <Col md={6} className="mb-2">
            <Button onClick={setShowFail(true)} className="mb-2">
              Toggle Toast <strong>without</strong> Animation
            </Button>
            <Toast
              onClose={setShowFail(false)}
              show={showFail}
              animation={false}
            >
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>
                Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast>
          </Col>*/}
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
