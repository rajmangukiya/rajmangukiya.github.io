import React from 'react'
import WebIcon from '@material-ui/icons/Web';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const WorkBox: React.FC<any> = ({ heading, icon, content }) => {

  const style = {
    fontSize: "150px",
    color: "rgb(162, 162, 162)",
    marginRight: "50px",
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
      <div>
        {icons[icon]}
        <p>{content}</p>
      </div>
    </div>
  )
}

export default WorkBox
