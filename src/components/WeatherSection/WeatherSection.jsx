import React from 'react';
import Summary from "./Summary.jsx";
import Form from "./Form.jsx";
import Stats from "./Stats.jsx";

const WeatherSection = () => {
  return (
    <div className='weather'>
      <Summary/>
      <div className='weather__right__section'>
        <Stats/>
        <Form/>
      </div>
    </div>
  );
};

export default WeatherSection;
