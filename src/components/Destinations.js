import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Destinations = () => {
  const { data: destinations, loading, error } = useFetch('https://db-server1.vercel.app/destinations');

  return (
    <div className="destinations-container">
      <Link to="/search-and-booking" className="search-and-booking">🔍Search</Link>
      <h1>Top Destinations</h1>

      {loading ? (
        <p className="loading-message">Loading destinations...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <ul className="destinations-list">
          {destinations.map((dest) => (
            <li key={dest.id} className="destination-item">
              <h3>{dest.name}</h3>
              <img
                src={dest.image}
                alt={dest.name}
                className="destination-image"
                style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
              />
              <p>{dest.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Destinations;
