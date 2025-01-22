import React, { useState } from "react";
import WeatherInput from "./components/WeatherInput";
import WeatherDisplay from "./components/WeatherDisplay";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const API_KEY = "bf0f5f8fa4188d2e7bd66abeccd62130"; // Insira sua chave de API aqui

  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setError("");
        setSearchHistory((prev) => [city, ...prev.filter((c) => c !== city)]);
      } else {
        setWeatherData(null);
        setError(data.message || "Erro desconhecido.");
      }
    } catch (err) {
      console.error("Erro na API:", err);
      setError("Erro ao buscar os dados. Tente novamente.");
    }
  };

  const fetchWeatherByLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setError("");
      } else {
        setWeatherData(null);
        setError(data.message || "Erro desconhecido.");
      }
    } catch (err) {
      console.error("Erro na API:", err);
      setError("Erro ao buscar os dados. Tente novamente.");
    }
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByLocation(latitude, longitude);
        },
        () => setError("Não foi possível obter a localização.")
      );
    } else {
      setError("Geolocalização não é suportada pelo seu navegador.");
    }
  };

  return (
    <div className="app">
      <h1>Aplicação de Clima</h1>
      <button onClick={getUserLocation}>Usar Minha Localização</button>
      <WeatherInput onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
      <div>
        <h3>Histórico de Buscas</h3>
        <ul>
          {searchHistory.map((city, index) => (
            <li key={index} onClick={() => fetchWeather(city)}>
              {city}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
