import React from 'react'
import WebIcon from '@material-ui/icons/Web';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import { Row, Col } from 'react-bootstrap';

const WorkBox: React.FC<any> = ({ heading, icon, content }) => {

  const style = {
    fontSize: "150px",
    color: "rgb(162, 162, 162)",
    marginRight: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
    padding: "40px"
  }

  const icons: any = {
    web: <WebIcon style={style} />,
    app: <PhoneAndroidIcon style={style} />
  }

  return (
    <div className="work-box">
      <h1>{heading}</h1>
      <Row>
        <Col md={6} style={{ display: 'flex',  justifyContent: 'center', alignItems: 'flex-start' }}>
        {icons[icon]}
        </Col>

        <Col md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <p>{content}</p>
        </Col>
      </Row>
    </div>
  )
}

export default WorkBox
