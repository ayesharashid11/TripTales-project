const express = require('express');
const router = express.Router();
const axios = require('axios');
const FOURSQUARE_API_KEY = process.env.FOURSQUARE_API_KEY;

// router.get('/hotels', async (req, res) => {
//     const { location } = req.query; // Expecting location as 'latitude,longitude'
//     const radius = 1500; // Radius in meters

//     try {
//         const response = await axios.get(`https://api.foursquare.com/v3/places/search?ll=${location}&radius=${radius}&categories=19014&limit=10`, {
//             headers: {
//                 'Authorization': FOURSQUARE_API_KEY
//             }
//         });
//         res.json(response.data.results);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });
router.use((req, res, next) => {
    if (!FOURSQUARE_API_KEY) {
      return res.status(400).send('Missing Foursquare API key');
    }
    next();
  });
  
  router.get('/hotels', async (req, res) => {
    const { location } = req.query;
  
    // Validate location format (e.g., using a regular expression)
    if (!/^\-?\d+\.\d+,\-?\d+\.\d+$/.test(location)) {
      return res.status(400).send('Invalid location format. Expecting "latitude,longitude"');
    }
  
    const radius = 1500; // Meters
  
    try {
      const response = await axios.get(`https://api.foursquare.com/v3/places/search?ll=${location}&radius=${radius}&categories=19014&limit=10`, {
        headers: {
          'Authorization': `Bearer ${FOURSQUARE_API_KEY}` // Use Bearer token format
        }
      });
      res.json(response.data.results);
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).send('Error fetching data'); // Provide a more generic error message
    }
  });

router.get('/restaurants', async (req, res) => {
    const { location } = req.query;
    const radius = 1500;

    try {
        const response = await axios.get(`https://api.foursquare.com/v3/places/search?ll=${location}&radius=${radius}&categories=13065&limit=10`, {
            headers: {
                'Authorization': FOURSQUARE_API_KEY
            }
        });
        res.json(response.data.results);
    } catch (error) {
        res.status(500).send(error.message);
    }
});
module.exports = router;