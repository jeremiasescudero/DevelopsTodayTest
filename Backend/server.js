// Importamos las dependencias
const express = require('express');
const axios = require('axios');

// Creamos una instancia de la aplicación Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta para obtener la población de un país
app.post('/countries/population', async (req, res) => {
  const { country } = req.body;

  // Validamos si el parámetro 'country' fue enviado
  if (!country) {
    return res.status(400).json({ error: 'The "country" field is required.' });
  }

  try {
    // Hacemos la solicitud a la API de países
    const response = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
      country: country  // Enviamos el nombre del país en el cuerpo
    });

    // Verificamos si hay un error en la respuesta de la API
    if (response.data.error) {
      return res.status(404).json({ error: response.data.msg });
    }

    // Si todo está correcto, devolvemos los datos de población
    return res.json(response.data);
  } catch (error) {
    // Si ocurre un error en la solicitud (por ejemplo, problemas de red)
    console.error('Error fetching population data:', error.message);
    return res.status(500).json({
      error: 'An error occurred while fetching population data.',
      details: error.response?.data || error.message
    });
  }
});

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
  res.send('API is working correctly!');
});

// Iniciamos el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
