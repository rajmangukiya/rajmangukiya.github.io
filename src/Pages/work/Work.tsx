import { Col, Container, Row } from "react-bootstrap";
import WorkBox from "./WorkBox";

const Work: React.FC<any> = ({ }) => {

  return (
    <div id="work" className="work">
      <Row className="work-row">
        <Col md={12}>
          <h1 className="work-title">What we do?</h1>
        </Col>
      </Row>

      <Row style={{ maxWidth: '90%', margin: 0 }}>
        <Col lg={6}>
          <WorkBox
            heading={"Web Development"}
            icon={"web"}
            content={
              "Technological expertise developers with award-winning UX skills is what makes us the leading web development company in India."
            }
          />
        </Col>

        <Col lg={6}>
          <WorkBox
            heading={"App development"}
            icon={"app"}
            content={
              "Our mobile app developers with expertise in developing outstanding mobile apps for iphone and android will help you to convert your vision into reality."
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default Work;
