const Review = require('../models/reviewSchema');
const Tour = require('../models/tourSchema');
const catchAsync = require('../utils/catchAsync');

// exports.createReview = catchAsync(async (req, res, next) => {
//   const { review, rating, tourId, userId } = req.body;
//   const newReview = await Review.create({
//     review,
//     rating,
//     tour: tourId,
//     user: userId
//   });
//   res.json({
//     data: {
//       review: newReview
//     }
//   });
// });

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find()
    .sort({ createdAt: -1 })
    .limit(5)
    .populate({
      path: 'tour',
      select: 'tourName -_id'
    })
    .populate({
      path: 'user',
      select: 'name companyName -_id'
    });

  res.json({
    results: reviews.length,
    data: {
      reviews
    }
  });
});

exports.getTourReviews = catchAsync(async (req, res, next) => {
  const tourId = req.params.id;
  const reviews = await Review.find({ tour: tourId })
    .populate({
      path: 'tour',
      select: 'tourName -_id'
    })
    .populate({
      path: 'user',
      select: 'name companyName -_id'
    });

  res.json({
    results: reviews.length,
    data: {
      reviews
    }
  });
});


exports.createReview = catchAsync(async (req, res, next) => {
  const { review, rating, tourId, userId } = req.body;

  const newReview = await Review.create({
    review,
    rating,
    tour: tourId,
    user: userId
  });
  const tour = await Tour.findById(tourId).populate('reviews');
  if (tour.reviews.length === 0) {
    tour.averageRating = rating;
  } else {
    const totalRatings = tour.reviews.reduce((acc, reviewId) => acc + reviewId.rating, 0);
    tour.averageRating = Math.round((totalRatings + rating) / (tour.reviews.length + 1));
  }
  tour.reviews.push(newReview._id);
  await tour.save();

  res.json({
    data: {
      review: newReview
    }
  });
});
