import React from 'react';

function CurrentWeather({ data }) {
    return (
        <div className="current-weather">
            <h2>Current Weather in {data.name}</h2>
            <p>Temperature: {data.main.temp}°F</p>
            <p>Feels Like: {data.main.feels_like}°F</p>
            <p>Min Temp: {data.main.temp_min}°F</p>
            <p>Max Temp: {data.main.temp_max}°F</p>
            <p>Pressure: {data.main.pressure} hPa</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind Speed: {data.wind.speed} mph</p>
        </div>
    );
}

export default CurrentWeather;
