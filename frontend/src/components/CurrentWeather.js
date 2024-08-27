import React from 'react';
import '../styles/CurrentWeather.css';

function CurrentWeather({ data }) {
    return (
        <div className="current-weather">
            <h2>{data.name}</h2>
            <p>Temperature: {data.temperature}°F</p>
            <p>Condition: {data.condition}</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Wind: {data.windSpeed}</p>
        </div>
    );
}

export default CurrentWeather;
