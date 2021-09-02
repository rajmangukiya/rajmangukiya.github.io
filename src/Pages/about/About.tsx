import React from 'react'
import RoundText from '../../Components/RoundText'

const About = () => {
  return (
    <div id="about" className="about">
      <h1>Who we are ?</h1>
      <div className="about-container">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, unde nemo illo aut ad voluptates? Veritatis, et eveniet ex explicabo aut nobis sint blanditiis officiis nostrum laudantium maiores quae dolorem?
      </div>
      <div className="profile-container">
        <div className="about-profile-1"></div>
        <RoundText
          text="front-end developer"
          classNm={`round-text-1`}
          arc={300}
          radius={150}
        />
        <div className="about-profile-2"></div>
        <RoundText
          text="full-stack developer"
          classNm={`round-text-2`}
          arc={300}
          radius={150}
        />
        <div className="about-profile-3"></div>
        <RoundText
          text="backend developer"
          classNm={`round-text-3`}
          arc={300}
          radius={150}
        />
      </div>
    </div>
  )
}

export default About
