import React, { useState } from "react";

function WeatherInput({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o nome da cidade..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
    </div>
  );
}

export default WeatherInput;
