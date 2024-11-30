const express = require('express');
const axios = require('axios');
const cors = require('cors');



const app = express();
const port = 3002

app.use(cors());
app.get('/countries', async (req, res) => {
    try {
        const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries')  
        res.json(response.data)
    } catch (error ){
        res.status(500).json({error: 'Failed to get countries'  })
    }
});


app.get('/country/:code', async (req,res) => {
    const countryCode = req.params.code;
    try {
        const borderResponse = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);
        const borderCountries = borderResponse.data.borders;

        const populationResponse = await axios.post('https://countriesnow.space/api/v0.1/countries/population');
        country: countryCode
        const flagUrl = flagResponse.data.data[0].flag;

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch country info' });
    }
})


app.listen(port, () => {
    console.log(`Backend running at http://localhost:${port}`);
  });