import React from 'react'
import WorkBox from './WorkBox'

const Work = () => {
  return (
    <div id="work" className="work">
      <h1>What we do?</h1>
      <WorkBox
        heading={"Web Development"}
        icon={"web"}
        content={"Technological expertise developers with award-winning UX skills is what makes us the leading web development company in India."}
      />
      <WorkBox
        heading={"App development"}
        icon={"app"}
        content={"Our mobile app developers with expertise in developing outstanding mobile apps for iphone and android will help you to convert your vision into reality."}
      />
    </div>
  )
}

export default Work
