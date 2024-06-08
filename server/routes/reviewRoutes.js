const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.post("/addreview", reviewController.createReview);
router.get("/getallreviews", reviewController.getAllReviews);
router.get("/tourreview/:id", reviewController.getTourReviews);

module.exports = router;
