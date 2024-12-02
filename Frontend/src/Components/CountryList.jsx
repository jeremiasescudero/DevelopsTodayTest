import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './CountryList.css';


const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('http://localhost:3002/countries');
        // Verifica si response.data es directamente el array o si está dentro de una propiedad
        const countryData = response.data.countries || response.data;
        setCountries(countryData);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError('Error fetching countries. Please try again later.');
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <p>Loading countries...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (countries.length === 0) {
    return <p>No countries available.</p>;
  }

  return (
    <div>
      <h1>Countries</h1>
      <ul className="country-list">
        {countries.map((country) => (
          <li key={country.countryCode} className="country-item">
            <Link to={`/countries/${country.countryCode}`} className="country-link">
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;