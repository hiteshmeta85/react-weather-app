import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../../api/index.js';
import Form from './Form.jsx';
import Stats from './Stats.jsx';
import Summary from './Summary.jsx';

const TODAY = new Date();
const DAY = TODAY.toLocaleString('default', { weekday: 'long' });
const DATE =
  TODAY.toLocaleString('default', { month: 'long' }) + ' ' + TODAY.getDate();

const WeatherSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [didWeatherDataLoad, setDidWeatherDataLoad] = useState(false);
  const [weatherData, setWeatherData] = useState();
  const [currentLocation, setCurrentLocation] = useState('Panvel');

  const fetchWeatherHandler = async () => {
    setIsLoading(true);
    try {
      const data = await fetchWeather(currentLocation);
      setWeatherData(data);
      setIsLoading(false);
      setDidWeatherDataLoad(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWeatherHandler();
  }, []);

  return (
    <div className='weather'>
      {isLoading ? (
        <p>Loading...</p>
      ) : didWeatherDataLoad ? (
        <Summary
          date={DATE}
          day={DAY}
          icon={weatherData.weather[0].icon}
          location={weatherData.name}
          temperature={weatherData.main.temp}
          type={weatherData.weather[0].main}
        />
      ) : (
        <p>Weather data not available</p>
      )}
      <div className='weather__right__section'>
        <Stats />
        <Form
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
          onSubmitHandler={fetchWeatherHandler}
        />
      </div>
    </div>
  );
};

export default WeatherSection;
