import React from "react";
import { Col, Row } from "react-bootstrap";
import RoundText from "../../Components/RoundText";

const About = () => {
  return (
    <div id="about" className="about">
      <Row style={{ margin: 0 }}>
        <Col md={12}>
          <h1 className="about-title">Who we are ?</h1>
        </Col>
      </Row>

      <Row style={{ margin: 0 }}>
        <Col md={12}>
          <div className="about-container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            unde nemo illo aut ad voluptates? Veritatis, et eveniet ex explicabo
            aut nobis sint blanditiis officiis nostrum laudantium maiores quae
            dolorem?
          </div>
        </Col>
      </Row>
      <div className="profile-container">
        <Row className="profile-container-row1">
          <Col md={4} style={{ display: "flex", justifyContent: "center" }}>
            <div className="about-profile-1">
              {/* <RoundText
                text="front-end developer"
                classNm={`round-text-1`}
                arc={300}
                radius={150}
              /> */}
            </div>
          </Col>

          <Col md={4} style={{ display: "flex", justifyContent: "center" }}>
            <div className="about-profile-2">
              {/* <RoundText
                text="full-stack developer"
                classNm={`round-text-2`}
                arc={300}
                radius={150}
              /> */}
            </div>
          </Col>
        </Row>

        <Row className="profile-container-row2">
          <Col md={4} style={{ display: "flex", justifyContent: "center" }}>
            <div className="about-profile-3">
              {/* <RoundText
                text="backend developer"
                classNm={`round-text-3`}
                arc={300}
                radius={150}
              /> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
