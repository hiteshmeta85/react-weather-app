const WeatherCard = ({ city, weatherData }) => {
  if (!weatherData) {
    return <p className='top__city__card'>Loading...</p>;
  }

  return (
    <div className='top__city__card'>
      <div>
        <img
          className='top__city__weather__icon'
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
          alt='weather icon'
        />
        <p className='top__city__weather__temp'>
          {weatherData.main.temp}&#8451;
        </p>
        <p className='top__city__weather__type'>
          {weatherData.weather[0].main}
        </p>
        <p className='top__city__card__city'>{city}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
