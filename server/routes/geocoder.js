const express = require('express');
const axios = require('axios');
const router = express.Router();

// GET endpoint to fetch location data
router.get('/geocode', async (req, res) => {
    try {
        const { query } = req.query; // Get the query from query parameters

        if (!query) {
            return res.status(400).send('Query is required');
        }

        // Replace 'YOUR_API_KEY' with your actual OpenCage API key
        const apiKey = 'dcf2ac0e79454206a762ff3237ef9911';
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${apiKey}`;

        const response = await axios.get(url);
        console.log("==========",response);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

module.exports = router;
