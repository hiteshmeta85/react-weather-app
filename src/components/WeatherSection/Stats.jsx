const Stats = ({ feelsLike, humidity, speed }) => {
  return (
    <div className='weather__stat__section'>
      <div className='weather__stat'>
        <p>FEELS LIKE</p>
        <p>{feelsLike} &#8451;</p>
      </div>
      <div className='weather__stat'>
        <p>HUMIDITY</p>
        <p>{humidity} %</p>
      </div>
      <div className='weather__stat'>
        <p>WIND</p>
        <p>{speed} km/h</p>
      </div>
    </div>
  );
};

export default Stats;
