import React from 'react';
import WeatherCard from "./WeatherCard.jsx";

const TopCitiesSection = () => {
  return (
    <div className='top__cities__section'>
      <WeatherCard/>
      <WeatherCard/>
      <WeatherCard/>
      <WeatherCard/>
      <WeatherCard/>
    </div>
  );
};

export default TopCitiesSection;
