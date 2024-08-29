import React from 'react';

function Forecast({ data }) {
    if (!data || !data.time || !Array.isArray(data.time)) {
        return <p>No forecast data available.</p>;
    }

    return (
        <div className="forecast">
            <h2>7-Day Weather Forecast</h2>
            <div className="forecast-grid">
                {data.time.map((date, index) => (
                    <div key={index} className="forecast-row">
                        <div className="forecast-date">
                            <h3>{new Date(date).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}</h3>
                        </div>
                        <div className="forecast-details">
                            <div className="forecast-detail">
                                <p>Max Temp: {data.temperature_2m_max[index]}°C</p>
                                <p>Min Temp: {data.temperature_2m_min[index]}°C</p>
                                <p>Precipitation: {data.precipitation_sum[index]} mm</p>
                                <p>Wind Speed: {data.windspeed_10m_max[index]} km/h</p>
                                <p>Wind Gusts: {data.windgusts_10m_max[index]} km/h</p>
                                <p>UV Index: {data.uv_index_max[index]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;
