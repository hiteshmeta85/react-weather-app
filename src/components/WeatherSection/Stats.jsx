import React from 'react';

const Stats = () => {
  return (
    <div className='weather__stat__section'>
      <div className='weather__stat'>
        <p>PRECIPITATION</p>
        <p>0%</p>
      </div>
      <div className='weather__stat'>
        <p>HUMIDITY</p>
        <p>42%</p>
      </div>
      <div className='weather__stat'>
        <p>WIND</p>
        <p>3 km/h</p>
      </div>
    </div>
  );
};

export default Stats;
