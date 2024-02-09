import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./Benefitt.css";
import rocket from "../BenefitAssets/rocket.svg";
import ShopLook from "../BenefitAssets/ShopLook.svg";
import monitor from "../BenefitAssets/Monitor.svg";

export default function Colloboration() {
  return (
    <Container className="h-100">
      <Card
        style={{ maxWidth: "1240px", maxHeight: "640px" }}
        className="bg-color mt-3"
      >
        <Row className="g-0 ">
          <Col md="6" lg="5" className="d-flex align-items-center mr-5 ">
            <Card.Body className="text-left ">
              <Card.Title className="benefit-common-style">
                <h2 className="benefit-common-style">
                  Collaboration<span className="text-red">3D</span>
                </h2>
              </Card.Title>
              <Card.Text style={{ fontSize: "25px", wordSpacing: "3px" }}>
                <ul>
                  <li>Deep Engagement with buyer & seller</li>
                  <li>
                    Showcase your product in real time 3D Space with Audio and
                    Video chat
                  </li>
                </ul>
              </Card.Text>
              <div className="absolute">
                <h1 className="relative">relative</h1>
              </div>
            </Card.Body>
          </Col>

          <Col md="6" lg="5" className="d-flex justify-content-start mx-5">
            <div className="collo-image-container py-4">
              <Card.Img src={monitor} alt="..." fluid className="collo-image" />
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
