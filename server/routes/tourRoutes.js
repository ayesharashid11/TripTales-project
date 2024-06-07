const express = require('express');
const tourController = require('../controllers/tourController');
const imgUploadMiddleware = require('../middleware/imgUploadMiddleware');
const router = express.Router();

router.post('/createtour', imgUploadMiddleware, tourController.createTour);
router.get('/gettour/:id', tourController.getTour);
router.get('/getalltours', tourController.getAllTours);

module.exports = router;
