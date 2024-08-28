import React from 'react';

function Forecast({ data }) {
    if (!data || !Array.isArray(data.list)) {
        return <p>No forecast data available.</p>;
    }

    return (
        <div className="forecast">
            <h2>Weather Forecast</h2>
            {data.list.map((forecast, index) => (
                <div key={index} className="forecast-item">
                    <p>Date: {new Date(forecast.dt * 1000).toLocaleDateString()}</p>
                    <p>Temperature: {forecast.main.temp}°F</p>
                    <p>Weather: {forecast.weather[0].description}</p>
                </div>
            ))}
        </div>
    );
}

export default Forecast;
