import React from 'react';
import PropTypes from 'prop-types';

const RoundText: React.FC<any> = ({ text, arc, radius, classNm }) => {
  const characters = text.split('');
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
            fontSize: '30px',
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
