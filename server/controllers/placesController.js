const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/overpass', async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).send('City parameter is required');
  }

  try {
    const query = `[out:json];
      area["boundary"="administrative"]["name"="${city}"] -> .a;
      (
        node(area.a)["amenity"="restaurant"];
        node(area.a)["tourism"="hotel"];
        node(area.a)["amenity"="pharmacy"];
      );
      out center 15;`;

    const url = `http://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
    const response = await axios.get(url);
    
    // Check if response data exists and has elements
    if (!response.data || !response.data.elements) {
      return res.status(404).send('No data found');
    }

    const restaurants = [];
    const hotels = [];
    const pharmacies = [];

    response.data.elements.forEach(element => {
      if (element.tags.amenity === 'restaurant') {
        restaurants.push(element);
      } else if (element.tags.tourism === 'hotel') {
        hotels.push(element);
      } else if (element.tags.amenity === 'pharmacy') {
        pharmacies.push(element);
      }
    });

    // res.json({
    //   restaurants,
    //   hotels,
    //   pharmacies
    // });
    const result = {
      restaurants,
      hotels,
      pharmacies
    };

    res.json(result);
    console.log('Restaurants:', JSON.stringify(restaurants, null, 2));
    console.log('Hotels:', JSON.stringify(hotels, null, 2));
    console.log('Pharmacies:', JSON.stringify(pharmacies, null, 2));
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});

module.exports = router;
