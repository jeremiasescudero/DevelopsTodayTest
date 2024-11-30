
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3002;


app.use(cors());


app.get('/countries', async (req, res) => {
  try {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
    console.log('Fetched countries:', response.data); 
    res.json({ countries: response.data });
  } catch (error) {
    console.error('Error fetching countries:', error);
    res.status(500).json({ error: 'Failed to get countries' });
  }
});


app.get('/countries/:countryCode', (req, res) => {
    const { countryCode } = req.params;  // Get the country code from the URL
    console.log(`Received request for countryCode: ${countryCode}`); // Log the country code to ensure it's being captured
    const country = countries.find(c => c.code === countryCode.toUpperCase());
    
    if (country) {
      res.json(country);  // Return the country data if found
    } else {
      res.status(404).json({ error: 'Country not found' });  // Return an error if not found
    }
  });




app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
