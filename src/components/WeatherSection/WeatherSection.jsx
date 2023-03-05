import React, {useEffect, useState} from 'react';
import Summary from "./Summary.jsx";
import Form from "./Form.jsx";
import Stats from "./Stats.jsx";

const WeatherSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [didWeatherDataLoad, setDidWeatherDataLoad] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [currentLocation, setCurrentLocation] = useState('Mumbai');

  const fetchData = async (location) => {
    setIsLoading(true);
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fcc8de7015bbb202209bbf0261babf4c`)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
        setIsLoading(false);
        setDidWeatherDataLoad(true);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchData(currentLocation);
  }, []);

  const today = new Date();
  const day = today.toLocaleString('default', {weekday: 'long'});
  const date = today.toLocaleString('default', {month: 'long'}) + ' ' + today.getDate();

  return (
    <div className='weather'>
      {isLoading ? <p>Loading...</p> : didWeatherDataLoad ?
        <Summary
          date={date}
          day={day}
          icon={weatherData.weather[0].icon}
          location={weatherData.name}
          temperature={weatherData.main.temp}
          type={weatherData.weather[0].main}
        />
        : <p>Weather data not available</p>
      }
      <div className='weather__right__section'>
        <Stats/>
        <Form/>
      </div>
    </div>
  );
};

export default WeatherSection;
