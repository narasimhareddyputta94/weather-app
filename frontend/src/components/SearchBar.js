import React, { useState } from 'react';
import '../styles/SearchBar.css';

function SearchBar({ onSearch }) {
    const [location, setLocation] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(location);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city or zip code"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchBar;
