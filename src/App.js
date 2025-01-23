import React, { useState, useEffect } from "react";
import WeatherInput from "./components/WeatherInput";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [forecastData, setForecastData] = useState(null); // Previsao estendida
  

  const API_KEY = "Insert_ur_key_here"; // Insira sua chave de API aqui

  const fetchWeather = async (city) => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;


    try {
      // Buscar clima atual
      const weatherResponse = await fetch(weatherUrl);
      const weather = await weatherResponse.json();

      // Buscar previsão estendida
      const forecastResponse = await fetch(forecastUrl);
      const forecast = await forecastResponse.json();

      if (weatherResponse.ok && forecastResponse.ok) {
        setWeatherData(weather);
        setForecastData(forecast);
        setError("");
        setSearchHistory((prev) => [city, ...prev.filter((c) => c !== city)]);
      } else {
        setWeatherData(null);
        setForecastData(null);
        setError(weather.message || "Erro desconhecido.");
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

  useEffect(() => {
    const savedCity = localStorage.getItem("lastCity");
    if (savedCity) fetchWeather(savedCity);
  }, []);
  
  useEffect(() => {
    if (weatherData) {
      localStorage.setItem("lastCity", weatherData.name);
    }
  }, [weatherData]);

  return (
    <div className="app bg-blue-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Aplicação de Clima</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={getUserLocation}
      >
        Usar Minha Localização
      </button>
      <WeatherInput onSearch={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
      {forecastData && <ForecastDisplay forecast={forecastData} />}

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
