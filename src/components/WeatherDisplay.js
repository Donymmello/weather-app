import React from "react";

function WeatherDisplay({ data }) {
  return (
    <div>
      <h2>{data.name}, {data.sys.country}</h2>
      <p>Temperatura: {data.main.temp}°C</p>
      <p>Humidade: {data.main.humidity}%</p>
      <p>Vento: {data.wind.speed} km/h</p>
    </div>
  );
}

export default WeatherDisplay;
