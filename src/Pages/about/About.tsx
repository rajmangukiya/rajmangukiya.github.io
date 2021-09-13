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
            I'm full-stack web developer and freelancer with 2 years of experiance.<br />I also do work on mobile applications.<br />
            I provides end-to-end web development.
          </div>
        </Col>
      </Row>
      <div className="profile-container">
        {/* <Row className="profile-container-row1">
          <div className="about-profile-1">
            <RoundText
              text="front-end developer"
              classNm={`round-text-1`}
              arc={300}
              radius={150}
            />
          </div>

          <div className="about-profile-2">
            <RoundText
              text="full-stack developer"
              classNm={`round-text-2`}
              arc={300}
              radius={150}
            />
          </div>
        </Row> */}

        <Row className="profile-container-row2">
          <Col md={4} style={{ display: "flex", justifyContent: "center" }}>
            <div className="about-profile-3">
              <RoundText
                text="full-stack developer"
                classNm={`round-text-3`}
                arc={300}
                radius={150}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
