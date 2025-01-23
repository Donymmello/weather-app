import React from "react";

function ForecastDisplay({ forecast }) {
    const dailyForecasts = forecast.list.filter((item) =>
        item.dt_txt.includes("12:00:00") // Mostra apenas previsões do meio-dia
    );

    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {dailyForecasts.map((item) => (
                <div
                    key={item.dt}
                    className="border border-gray-300 rounded-lg p-4 bg-white shadow-md"
                >
                    <p className="font-medium">{new Date(item.dt_txt).toLocaleDateString()}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                        alt={item.weather[0].description}
                        className="mx-auto"
                    />
                    <p className="capitalize">{item.weather[0].description}</p>
                    <p className="text-lg font-bold">{item.main.temp}°C</p>
                </div>
            ))}
        </div>
    );
}

export default ForecastDisplay;
