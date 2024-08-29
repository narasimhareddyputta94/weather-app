import React from 'react';
import './styles/HourlyForecast.css';

function groupByDate(hourlyData, selectedDay) {
    const grouped = {};

    hourlyData.time.forEach((time, index) => {
        const date = new Date(time).toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
        });

        if (!grouped[date]) {
            grouped[date] = [];
        }

        grouped[date].push({
            time: new Date(time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            temperature: hourlyData.temperature_2m[index],
            weatherCode: hourlyData.weathercode[index],
            windSpeed: hourlyData.windspeed_10m[index],
            humidity: hourlyData.relativehumidity_2m[index],
            cloudCover: hourlyData.cloudcover[index],
            uvIndex: hourlyData.uv_index[index],
        });
    });

    const selectedDate = Object.keys(grouped)[selectedDay];
    return grouped[selectedDate] || [];
}

function HourlyForecast({ data, selectedDay }) {
    const hourlyDataForSelectedDay = groupByDate(data, selectedDay);

    if (hourlyDataForSelectedDay.length === 0) {
        return <p>No hourly data available for this day.</p>;
    }

    return (
        <div className="hourly-forecast">
            <h2>Hourly Weather Forecast</h2>
            <div className="hourly-grid">
                {hourlyDataForSelectedDay.map((hour, idx) => (
                    <div key={idx} className="hourly-row">
                        <p><strong>{hour.time}</strong></p>
                        <p>Temp: {hour.temperature}°C</p>
                        <p>Weather Code: {hour.weatherCode}</p>
                        <p>Wind: {hour.windSpeed} km/h</p>
                        <p>Humidity: {hour.humidity}%</p>
                        <p>Cloud Cover: {hour.cloudCover}%</p>
                        <p>UV Index: {hour.uvIndex}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HourlyForecast;
