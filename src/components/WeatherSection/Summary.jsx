import React from 'react';

const Summary = () => {
  return (
    <div className='weather__summary__section'>
      <div>
        <p className='weather__day'>Friday</p>
        <p className='weather__date'>3 March 2022</p>
        <div className='weather__location'>
          <img src='/src/assets/location-marker.svg' alt='marker icon'/>
          <p>Mumbai, India</p>
        </div>
      </div>
      <div>
        <img className='weather__icon' src='/src/assets/sun.svg' alt='weather icon'/>
        <p className='weather__temp'>29&#8451;</p>
        <p className='weather__type'>Sunny</p>
      </div>
    </div>
  );
};

export default Summary;
