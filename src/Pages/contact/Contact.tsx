import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import UpworkIcon from "../../Components/UpworkIcon";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  const iconStyle = {
    fontSize: "100px",
    margin: "30px",
    cursor: "pointer",
  };

  const toMail = () => {
    window.location.href =
      "mailto:rajmangukiya00@gmail.com?subject=business inquiry&body=Hello!";
    window.setTimeout(function () {
      window.location.href = "/#contact";
    }, 0);
  };

  return (
    <div id="contact" className="contact">
      <Row>
        <Col md={12}>
          <h1 className="contact-title">Get in touch</h1>
        </Col>
      </Row>

      <div className="icons">
        <Row className="contact-row">
          <Col md={2} className="icon-col">
            <GitHubIcon style={iconStyle} />
          </Col>

          <Col md={2} className="icon-col">
            <LinkedInIcon style={iconStyle} />
          </Col>

          <Col md={2} className="icon-col">
            <EmailIcon onClick={toMail} style={iconStyle} />
          </Col>

          <Col md={2} className="icon-col">
            <FacebookIcon style={iconStyle} />
          </Col>

          <Col md={2} className="icon-col">
            <InstagramIcon style={iconStyle} />
          </Col>

          <Col
            md={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <UpworkIcon />
          </Col>
        </Row>
      </div>

      <p className="contact-info">
        IT company
        <br />
        1st floor- Opp Sarvoday Bank,
        <br />
        B/h Surat Railway Station,
        <br />
        Khandbazar, Varachha Road ,<br />
        Surat-395006.
      </p>
    </div>
  );
};

export default Contact;
