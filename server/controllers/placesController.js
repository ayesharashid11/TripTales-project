
// const buildOverpassQuery = (location, radius, type) => {
//     return `
//     [out:json];
//     (
//       node["amenity"="${type}"](around:${radius},${location});
//       way["amenity"="${type}"](around:${radius},${location});
//       relation["amenity"="${type}"](around:${radius},${location});
//     );
//     out center;
//     `;
// };

// const getPlaces = async (req, res) => {
//     // Expecting location as 'latitude,longitude' and type as amenity type (e.g., hotel, restaurant)
//     const { location, type } = req.query; 
//     const radius = 1500; // Radius in meters

//     const query = buildOverpassQuery(location, radius, type);
//     const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
//     console.log('Query URL:', url);
//     try {
//         const response = await axios.get(url);
//         res.json(response.data.elements);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// };

// module.exports = { getPlaces };


// const buildOverpassQuery = (location, radius, type) => {
//     return `
//     [out:json];
//     (
//       node["amenity"="${type}"](around:${radius},${location});
//       way["amenity"="${type}"](around:${radius},${location});
//       relation["amenity"="${type}"](around:${radius},${location});
//     );
//     out center;
//     `;
// };

// const getPlaces = async (req, res) => {
//     const { location = '46.603354,1.888334', type = 'hotel' } = req.query; // Default location is France
//     const radius = 50000; // 50 km radius

//     const query = buildOverpassQuery(location, radius, type);
//     const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

//     console.log('Query URL:', url); // Add logging for debugging

//     try {
//         const response = await axios.get(url);
//         console.log('Response Data:', response.data); // Add logging for debugging
//         res.json(response.data.elements);
//     } catch (error) {
//         console.error('Error:', error.message); // Add logging for debugging
//         res.status(500).send(error.message);
//     }
// };

// module.exports = { getPlaces };


const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/overpass', async (req, res) => {
  try {
    // Example query for restaurants in New York City
    // const query = `[out:json];
    //   area[name="France"];
    //   node[amenity=restaurant](area);
    //   out body;`;
    const query = `[out:json];
    area["boundary"="administrative"]["name"="Berlin"] -> .a;
    (
      node(area.a)["amenity"="restaurant"];
    );
    out center 20;`;

    const url = `http://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    const response = await axios.get(url);
    console.log("===========", response);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

module.exports = router;
