import React from 'react'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import WaveBackground from './WaveBackground';
import ParticlesBg from 'particles-bg'

const Home = () => {

  return (
    <div className="home">
      <div className="home-heading">
        <h1>
          <span>We are<br /></span>
          <span>Software solution<br /></span>
          <span>to grow<br /></span>
          <span>your business</span>
        </h1>
      </div>
      <a className="down-arrow" href="#work">
        <ArrowDownwardIcon style={{
          fontSize: '70px',
          color: 'rgb(3, 24, 32)'
        }} />
      </a>
      {/* <WaveBackground /> */}
      <ParticlesBg color="#00bbff" num={50} type="cobweb" bg={false} />
    </div>
  )
}

export default Home
