import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import Forecast from './Forecast';
import './styles/WeatherApp.css';

function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [hourlyData, setHourlyData] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null); // State for selected day
    const [error, setError] = useState(null);

    const handleSearch = (location) => {
        setError(null);

        // Fetch current weather data
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

        // Fetch daily forecast data
        fetch(`http://localhost:8080/api/weather/forecast?location=${location}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching forecast: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Forecast data received:", data);
                setForecastData(data.daily);
            })
            .catch(error => {
                console.error("Error fetching forecast:", error);
                setForecastData(null);
                setError("Failed to fetch weather forecast. Please try again.");
            });

        // Fetch hourly forecast data
        fetch(`http://localhost:8080/api/weather/hourly?location=${location}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching hourly forecast: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Hourly forecast data received:", data);
                setHourlyData(data.hourly);
            })
            .catch(error => {
                console.error("Error fetching hourly forecast:", error);
                setHourlyData(null);
                setError("Failed to fetch hourly forecast. Please try again.");
            });
    };

    const handleDayClick = (dayIndex) => {
        setSelectedDay(dayIndex);
    };

    return (
        <div className="weather-app">
            <h1>Weather App</h1>
            <SearchBar onSearch={handleSearch} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {weatherData && <CurrentWeather data={weatherData} />}
            {forecastData && (
                <Forecast
                    data={forecastData}
                    selectedDay={selectedDay}
                    onDayClick={handleDayClick}
                />
            )}
            {hourlyData && selectedDay !== null && (
                <HourlyForecast
                    data={hourlyData}
                    selectedDay={selectedDay}
                />
            )}
        </div>
    );
}

export default WeatherApp;
