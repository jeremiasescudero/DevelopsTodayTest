import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './CountryInfo.css'

const CountryInfo = () => {
  const { countryCode } = useParams();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:3002/countries/${countryCode}`);
        
        if (response.data) {
          setCountry(response.data);
        } else {
          throw new Error('No data received');
        }
      } catch (error) {
        setError('Error fetching country data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryCode]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!country) return <div>No country data available</div>;

  return (
    <div className="country-info">
      <h1>{country.name}</h1>

      {country.flagUrl && (
        <img 
          src={country.flagUrl} 
          alt={`Flag of ${country.name}`} 
          className="country-flag"
        />
      )}

      <div className="country-details">
        <h2>Country Information</h2>
        <div className="info-section">
          <p><strong>Code:</strong> {country.code || 'N/A'}</p>
          <p><strong>Region:</strong> {country.region || 'Unknown'}</p>
        </div>

        <div className="population-section">
          <h3>Population Over the Years</h3>
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              {country.population.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.year}</td>
                  <td>{entry.value.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {country.borders && country.borders.length > 0 && (
          <div className="borders-section">
            <h3>Border Countries</h3>
            <ul>
              {country.borders.map((border, index) => (
                <li key={index}>
                  <strong>{border.commonName}</strong><br />
                  <span>{border.officialName}</span><br />
                  <span>{border.region}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryInfo;
