import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../../api/index.js';
import WeatherCard from './WeatherCard.jsx';

const TOP_CITIES = ['Paris', 'New York', 'Tokyo', 'London', 'Dubai'];

const TopCitiesSection = () => {
  const [weatherData, setWeatherData] = useState();

  const fetchWeathersHandler = async () => {
    try {
      let data = [];
      for (const city of TOP_CITIES) {
        const cityData = await fetchWeather(city);
        data.push(cityData);
      }
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeathersHandler();
  }, []);

  return (
    <div className='top__cities__section'>
      {TOP_CITIES.map((city, index) => {
        return (
          <WeatherCard
            key={index}
            city={city}
            weatherData={weatherData && weatherData[index]}
          />
        );
      })}
    </div>
  );
};

export default TopCitiesSection;
