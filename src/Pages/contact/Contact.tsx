import React, { useEffect, useState } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import UpworkIcon from "../../Components/UpworkIcon";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {

  const [size, setSize] = useState(100);
  const height = window.innerWidth;

  const handleIcons = () => {
    console.log(height);

    if (height <= 1200 && height > 992) {
      setSize(80);
    }
    else if (height <= 992 && height > 768) {
      setSize(60);
    }
    else if (height <= 768 && height > 600) {
      setSize(50);
    }
    else if (height <= 600 && height > 400) {
      setSize(40);
    }
    else if (height <= 400 && height > 0) {
      setSize(30);
    }
  }


  const iconStyle = {
    fontSize: `${size}px`,
    margin: "10px",
    cursor: "pointer",
  };

  const toMail = () => {
    window.location.href =
      "mailto:rajmangukiya00@gmail.com?subject=business inquiry&body=Hello!";
    window.setTimeout(function () {
      window.location.href = "/#contact";
    }, 0);
  };

  useEffect(() => {
    handleIcons();
  }, [height])

  return (
    <div id="contact" className="contact">
      <Row>
        <Col md={12}>
          <h1 className="contact-title">Get in touch</h1>
        </Col>
      </Row>

      <p className="contact-info">
        Surat, Gujarat, India.
        <br />
        rajmangukiya00@gmail.com,
        <br />+91 9023460463,<br />
        skype -  live:.cid.427e58067e903920.
      </p>

      <div className="icons">
        <Row className="contact-row">
          <Col md={2} className="icon-col">
            <a href={'https://github.com/rajmangukiya'} target="_blank" >
              <GitHubIcon style={iconStyle} />
            </a>
          </Col>

          <Col md={2} className="icon-col">
            <a href={'https://www.linkedin.com/in/raj-mangukiya-6335431b4/'} target="_blank" >
              <LinkedInIcon style={iconStyle} />
            </a>
          </Col>

          <Col md={2} className="icon-col">
            <a href="#contact">
              <EmailIcon onClick={toMail} style={iconStyle} />
            </a>
          </Col>

          <Col md={2} className="icon-col">
            <a href="https://www.facebook.com/raj.mangukiya.967" target="_blank">
              <FacebookIcon style={iconStyle} />
            </a>
          </Col>

          <Col md={2} className="icon-col">
            <a href="https://www.instagram.com/raj__mangukiya/" target="_blank">
              <InstagramIcon style={iconStyle} />
            </a>
          </Col>

          <Col
            md={2}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a href="" target="_blank">
              <UpworkIcon />
            </a>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contact;
