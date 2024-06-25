const express = require('express');
const tourController = require('../controllers/tourController');
const imgUploadMiddleware = require('../middleware/imgUploadMiddleware');
const searchTrip =require('../controllers/searchTrip');
const router = express.Router();

router.post('/createtour', imgUploadMiddleware, tourController.createTour);
router.get('/gettour/:id', tourController.getTour);
router.get('/getalltours', tourController.getAllTours);
router.get('/search', searchTrip.searchTours);
router.post('/:tourId' , tourController.attachBlogToTour);

module.exports = router;
