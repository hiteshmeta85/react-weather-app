import { useEffect, useState } from 'react';
import { fetchWeather } from '../../api';
import Form from './Form';
import Stats from './Stats';
import Summary from './Summary';

const TODAY = new Date();
const DAY = TODAY.toLocaleString('default', { weekday: 'long' });
const DATE =
  TODAY.toLocaleString('default', { month: 'long' }) + ' ' + TODAY.getDate();

const WeatherSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState('Panvel');

  const fetchWeatherHandler = async () => {
    setIsLoading(true);
    const data = await fetchWeather(currentLocation);
    setWeatherData(data.cod === 200 ? data : null);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeatherHandler();
  }, []);

  return (
    <div className='weather'>
      {isLoading || !weatherData ? (
        <p className='weather__summary__section'>
          {isLoading ? 'Loading...' : 'Weather data not available'}
        </p>
      ) : (
        <Summary
          date={DATE}
          day={DAY}
          icon={weatherData.weather[0].icon}
          location={weatherData.name}
          temperature={weatherData.main.temp}
          type={weatherData.weather[0].main}
        />
      )}
      <div className='weather__right__section'>
        {!isLoading && weatherData && (
          <Stats
            feelsLike={weatherData.main.feels_like}
            humidity={weatherData.main.humidity}
            speed={weatherData.wind.speed}
          />
        )}
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
