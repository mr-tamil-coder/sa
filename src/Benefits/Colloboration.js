import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Benefitt.css";
import Collab3D from "../BenefitAssets/Collab3D.svg";
import monitor from "../BenefitAssets/Monitor.svg";

export default function Colloboration() {
  return (
    <Container className="h-100 text-white py-5">
      <div style={{ maxWidth: "1240px" }} className="mt-3 card">
        {/* Left */}
        <Row className="g-0">
          <Col xs={12} md={6} className="d-flex align-items-center">
            <div className="card-body text-left">
              <div className="card-title benefit-common-style">
                <h2 className="benefit-common-style">
                  Collaboration<span className="text-red">3D</span>
                </h2>
              </div>
              <div style={{ fontSize: "25px", wordSpacing: "3px" }}>
                <ul>
                  <li>Deep Engagement with buyers & sellers</li>
                  <li>Showcase your product in real-time 3D Space with Audio and Video chat</li>
                </ul>
              </div>
              <div className="mt-3">
                <img src={Collab3D} alt="" className="img-fluid" />
              </div>
            </div>
          </Col>
          {/* Right */}
          <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
            <div className="collo-image-container py-4">
              <img src={monitor} alt="..." className="collo-image img-fluid" />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
