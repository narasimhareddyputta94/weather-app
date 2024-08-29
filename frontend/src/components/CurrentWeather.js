import React from 'react';

function CurrentWeather({ data }) {
    return (
        <div className="current-weather">
            <h2>Current Weather</h2>
            <p>Temperature: {data.current_weather.temperature}°F</p>
            <p>Wind Speed: {data.current_weather.windspeed} mph</p>
            <p>Wind Direction: {data.current_weather.winddirection}°</p>
            <p>Weather: {data.current_weather.weathercode}</p>
        </div>
    );
}

export default CurrentWeather;
