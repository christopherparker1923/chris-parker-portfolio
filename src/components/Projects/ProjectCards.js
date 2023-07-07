import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { CgWebsite } from "react-icons/cg";
import { BsFillCameraFill, BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [photoModal, setPhotoModal] = useState(false);

  // const renderCarouselItems = () => {
  //   return props.carouselImages.map((image, index) => (
  //     <div
  //       className={`carousel-item ${index === 0 ? "active" : ""}`}
  //       key={index}
  //     >
  //       <img src={image} className="d-block w-100" alt={`Slide ${index}`} />
  //     </div>
  //   ));
  // };

  return (
    <>
      <Modal show={photoModal}>
        <Modal.Header
          closeButton
          onHide={() => {
            setPhotoModal(false);
          }}
        >
          <Modal.Title>Photos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel className="carousel">
            {props.carouselImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  key={index}
                  className="d-block w-100"
                  src={image}
                  alt={`Photo ${index}`}
                />
                <Carousel.Caption>{`Photo ${index}`}</Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>

      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {(props.ghLink || props.isBlog) && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {"\n"}
          {"\n"}
          <Button
            style={{ marginLeft: "10px" }}
            variant="primary"
            onClick={() => {
              console.log("modalopen");
              setPhotoModal(true);
            }}
          >
            <BsFillCameraFill /> &nbsp;
            {"Photos"}
          </Button>

          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
export default ProjectCards;
