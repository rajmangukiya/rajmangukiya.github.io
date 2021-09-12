import React from 'react';
import PropTypes from 'prop-types';

const RoundText: React.FC<any> = ({ text, arc, radius, classNm }) => {
  const characters = text.split('');
  let font = 30;
  
  if(window.innerWidth <= 400) {
    arc = 300;
    radius = 50;
    font = 12;
  }
  else if(window.innerWidth <= 600) {
    arc = 300;
    radius = 70;
    font = 15;
  }
  else if(window.innerWidth <= 768) {
    arc = 300;
    radius = 100;
    font = 20;
  }
  const degree = arc / characters.length;

  return (
    <div className={classNm}>
      {characters.map((char: any, i: any) => {
        
        return (<div
          key={`heading-span-${i}`}
          style={{
            height: `${radius}px`,
            position: 'absolute',
            color: 'rgb(0, 187, 255)',
            fontSize: `${font}px`,
            transform: `rotateZ(${degree * i - arc / 2}deg)`,
            transformOrigin: `0 ${radius}px 0`,
          }}>
          {char}
        </div>)
      }
      )}
    </div>
  );
}

RoundText.propTypes = {
  text: PropTypes.string.isRequired,
  arc: PropTypes.number, // how curved do you want the text
  radius: PropTypes.number, // how big do you want the curve
};

RoundText.defaultProps = {
  arc: 120,
  radius: 400,
};

export default RoundText;
