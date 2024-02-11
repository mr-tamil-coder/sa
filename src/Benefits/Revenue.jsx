import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Benefitt.css";
import hdImage from "../BenefitAssets/HdImage.svg";
import Bookshelf from "../BenefitAssets/Bookshelf.svg";
import Chair from "../BenefitAssets/Chair.svg";
import DiningTable from "../BenefitAssets/DiningTable.svg";

export default function Revenue() {
  return (
    <Container className="mt-5 h-100 text-white bg-dark">
      <Row className="h-100">
        {/* Left */}
        <Col xs={12} md={6} className="d-flex align-items-center">
          <div className="card-body text-left">
            <div className="card-title benefit-common-style">
              <h2>New Revenue system</h2>
              <h5>with high quality HD Renders</h5>
            </div>
            {/* Four boxes */}
            <Row className="d-flex flex-wrap justify-content-between">
              <Col xs={6} className="mb-3">
                <div className="box bg-grey bg-danger d-flex justify-content-center align-items-center">
                  <img src={DiningTable} alt="" className="box-img img-fluid" />
                </div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className="box bg-grey">
                  <h1>Your Products</h1>
                  <h5>
                    Add to Showroom3D and create HD Rendered Images & Videos
                  </h5>
                </div>
              </Col>
              <Col xs={6} className="mb-3">
                <div className="box bg-grey">
                  <img src={Bookshelf} alt="" className="box-img img-fluid" />
                </div>
              </Col>
              <Col xs={6}>
                <div className="box bg-grey">
                  <img src={Chair} alt="" className="box-img img-fluid" />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        {/* Right */}
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center"
        >
          <div className="collo-image-container py-4">
            <img src={hdImage} alt="..." className="d-flex justify-content-center align-items-center collo-image img-fluid" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
