import React from 'react';
import '../styles/Forecast.css';

function Forecast({ data }) {
    return (
        <div className="forecast">
            <h2>7-Day Forecast</h2>
            <div className="forecast-grid">
                {data.map((period, index) => (
                    <div key={index} className="forecast-day">
                        <h3>{period.date}</h3>
                        <p>{period.temperature}°F</p>
                        <p>{period.condition}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Forecast;
