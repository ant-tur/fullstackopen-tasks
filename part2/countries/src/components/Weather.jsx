import { useEffect, useState } from 'react';
import getWeather from '../services/weather';
import tempKelvinToCelsius from '../utils/temperature';

const Weather = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    getWeather(country.capital[0]).then(data => {
      setWeather(data);
    });
  }, [country]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  const tempCelsius = tempKelvinToCelsius(weather?.main?.temp);

  return (
    <>
      <h2>Weather in {country.capital[0]}</h2>
      <p>Temperature {tempCelsius} Celsius</p>

      <img
        src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
        alt={weather?.weather[0]?.main}
      />

      <p>Wind {weather?.wind?.speed} m/s</p>
    </>
  );
};

export default Weather;
