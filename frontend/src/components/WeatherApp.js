import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import './styles/WeatherApp.css';

function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = (location) => {
        setError(null);

        // Fetch current weather data from your Spring Boot backend
        fetch(`http://localhost:8080/api/weather/current?location=${location}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching current weather: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Current weather data received:", data);
                setWeatherData(data);
            })
            .catch(error => {
                console.error("Error fetching current weather:", error);
                setWeatherData(null);
                setError("Failed to fetch current weather data. Please try again.");
            });

        // Fetch weather forecast data from your Spring Boot backend
        fetch(`http://localhost:8080/api/weather/forecast?location=${location}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching forecast: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Forecast data received:", data);
                setForecastData(data);
            })
            .catch(error => {
                console.error("Error fetching forecast:", error);
                setForecastData(null);
                setError("Failed to fetch weather forecast. Please try again.");
            });
    };

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weatherData ? <CurrentWeather data={weatherData} /> : <p>Loading current weather...</p>}
            {forecastData && <Forecast data={forecastData} />}
        </div>
    );
}

export default WeatherApp;
