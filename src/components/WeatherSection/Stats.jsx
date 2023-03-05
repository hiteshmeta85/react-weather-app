import React from 'react';

const Stats = ({ weatherData }) => {
  return (
    <div className='weather__stat__section'>
      <div className='weather__stat'>
        <p>FEELS LIKE</p>
        <p>{weatherData.main.feels_like} &#8451;</p>
      </div>
      <div className='weather__stat'>
        <p>HUMIDITY</p>
        <p>{weatherData.main.humidity} %</p>
      </div>
      <div className='weather__stat'>
        <p>WIND</p>
        <p>{weatherData.wind.speed} km/h</p>
      </div>
    </div>
  );
};

export default Stats;
