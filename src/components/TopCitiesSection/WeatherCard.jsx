import React from 'react';

const WeatherCard = () => {
  return (
    <div className='top__city__card'>
      <div>
        <img
          className='top__city__weather__icon'
          src='/sun.svg'
          alt='weather icon'
        />
        <p className='top__city__weather__temp'>29&#8451;</p>
        <p className='top__city__weather__type'>Sunny</p>
        <p className='top__city__card__city'>Mumbai, India</p>
      </div>
    </div>
  );
};

export default WeatherCard;
