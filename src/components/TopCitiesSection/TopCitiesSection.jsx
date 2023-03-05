import React from 'react';
import WeatherCard from './WeatherCard.jsx';

const TopCitiesSection = () => {
  return (
    <div className='top__cities__section'>
      <WeatherCard city='Paris' />
      <WeatherCard city='New York' />
      <WeatherCard city='Tokyo' />
      <WeatherCard city='London' />
      <WeatherCard city='Dubai' />
    </div>
  );
};

export default TopCitiesSection;
