import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import '../styles/WeatherApp.css';

function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);

    const handleSearch = (location) => {
        // Fetch weather data from your Java backend
        fetch(`http://localhost:8080/api/weather/current?location=${location}`)
            .then(response => response.json())
            .then(data => setWeatherData(data));

        // Fetch forecast data
        fetch(`http://localhost:8080/api/weather/forecast?location=${location}`)
            .then(response => response.json())
            .then(data => setForecastData(data));
    };

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {weatherData && <CurrentWeather data={weatherData} />}
            {forecastData && <Forecast data={forecastData} />}
        </div>
    );
}

export default WeatherApp;
