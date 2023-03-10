import { useEffect, useState } from 'react';
import { fetchWeather } from '../../api';
import WeatherCard from './WeatherCard';

const TOP_CITIES = ['Paris', 'New York', 'Tokyo', 'London', 'Dubai'];

const TopCitiesSection = () => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeathersHandler = async () => {
    const data = [];
    for (const city of TOP_CITIES) {
      const cityData = await fetchWeather(city);
      if (cityData.cod === 200) {
        data.push(cityData);
      }
    }
    setWeatherData(data);
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
            weatherData={weatherData[index]}
          />
        );
      })}
    </div>
  );
};

export default TopCitiesSection;
