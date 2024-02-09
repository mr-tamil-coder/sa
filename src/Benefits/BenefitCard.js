import { Card, Row, Col, Container } from "react-bootstrap";
import Building from "../BenefitAssets/Building.svg";
import Increase from "../BenefitAssets/Increase.svg";
import Decrease from "../BenefitAssets/Decrease.svg";
import "./Benefits.css"

const BenefitCard = () => {
  return (
    <Container className="overflow-hidden">
      <Row>
        <Col xs={12}>
          <Card className="card-style mt-3">
            <Card.Body>
              <Row>
                <Col xs={8}>
                  <Card.Title className="benefit-title">Reduce</Card.Title>
                  <Card.Subtitle className="benefit-subtitle mb-2">
                    Order return
                  </Card.Subtitle>
                </Col>
                <Col xs={4} className="text-right">
                  <img
                    src={Decrease}
                    alt="Small Image"
                    style={{ width: "50%", height: "auto" }}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
              <Col lg={4}></Col>
                <Col xs={12} lg={5} className="text-right mt-3">
                  <img
                    src={Building}
                    alt="Another Small Image"
                    style={{ width: "50%", height: "70%" }}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default BenefitCard;
