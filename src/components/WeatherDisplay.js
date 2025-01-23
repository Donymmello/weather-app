import React from "react";

function WeatherDisplay({ data }) {
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div>
      <h2>{data.name}, {data.sys.country}</h2>
      <img src={iconUrl} alt={data.weather[0].description} />
      <p>{data.weather[0].description}</p>
      <p>Temperatura: {data.main.temp}°C</p>
      <p>Humidade: {data.main.humidity}%</p>
      <p>Vento: {data.wind.speed} km/h</p>
    </div>
  );
}

export default WeatherDisplay;
