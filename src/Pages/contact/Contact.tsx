import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import UpworkIcon from '../../Components/UpworkIcon';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const Contact = () => {

  const iconStyle = {
    fontSize: "100px",
    margin: "30px",
    cursor: "pointer",
  }

  const toMail = () => {
    window.location.href = "mailto:rajmangukiya00@gmail.com?subject=business inquiry&body=Hello!";
    window.setTimeout(function () { window.location.href = "/#contact" }, 0);
  }

  return (
    <div id="contact" className="contact">
      <h1>Get in touch</h1>
      <div className="icons">
        <GitHubIcon style={iconStyle} />
        <UpworkIcon />
        <LinkedInIcon style={iconStyle} />
        <EmailIcon onClick={toMail} style={iconStyle} />
        <FacebookIcon style={iconStyle} />
        <InstagramIcon style={iconStyle} />
      </div>
      <p className="contact-info">
        IT company<br />
        1st floor- Opp Sarvoday Bank,<br />
        B/h Surat Railway Station,<br />
        Khandbazar, Varachha Road ,<br />
        Surat-395006.
      </p>
    </div>
  )
}

export default Contact
