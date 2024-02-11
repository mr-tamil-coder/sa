import { Row, Col, Container } from "react-bootstrap";
import Building from "../BenefitAssets/Building.svg";
import Build1 from "../BenefitAssets/Build1.svg";
import small from "../BenefitAssets/SmallComputer.svg";
import Increase from "../BenefitAssets/Increase.svg";
import Decrease from "../BenefitAssets/Decrease.svg";
import "./Benefits.css";

const BenefitCard = () => {
  return (
    <Container>
      <Row className="justify-content-start">
        <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3">
          <div className="card-style p-3 mt-3">
            <div className="card-body">
              <Row>
                <Col xs={8}>
                  <h5 className="benefit-title">Reduce</h5>
                  <p className="benefit-subtitle mb-2">Order return</p>
                </Col>
                <Col xs={4} className="text-right">
                  <img src={Decrease} alt="Small Image" className="img-fluid" />
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="mt-3 text-center">
                  <img
                    src={Building}
                    alt="Another Small Image"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3">
          <div className="card-style p-3 mt-3">
            <div className="card-body">
              <Row>
                <Col xs={8}>
                  <h5 className="benefit-title">Reduce</h5>
                  <p className="benefit-subtitle mb-2">Order value</p>
                </Col>
                <Col xs={4} className="text-right">
                  <img src={Increase} alt="Small Image" className="img-fluid" />
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="mt-3 text-center">
                  <img
                    src={Build1}
                    alt="Another Small Image"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} xl={4} className="mb-3">
          <div className="card-style p-3 mt-3">
            <div className="card-body">
              <Row>
                <Col xs={8}>
                  <h5 className="benefit-title">Reduce</h5>
                  <p
                    className="benefit-subtitle mb-2 "
                    style={{ fontSize: "25px" }}
                  >
                    with 3DCollaboration
                  </p>
                </Col>
                <Col xs={4} className="text-right">
                  <img src={Increase} alt="Small Image" className="img-fluid" />
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="mt-3 text-center">
                  <img
                    src={small}
                    alt="Another Small Image"
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default BenefitCard;
