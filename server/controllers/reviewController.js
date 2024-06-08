const Review = require('../models/reviewSchema');
const Tour = require('../models/tourSchema');
const catchAsync = require('../utils/catchAsync');

exports.createReview = catchAsync(async (req, res, next) => {
  const { review, rating, tourId, userId } = req.body;
  const newReview = await Review.create({
    review,
    rating,
    tour: tourId,
    user: userId
  });
  res.json({
    data: {
      review: newReview
    }
  });
});

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find()
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

// exports.getReview = catchAsync(async (req, res, next) => {
//   const review = await Review.findById(req.params.id)
//     .populate({
//       path: 'tour',
//       select: 'tourName'
//     })
//     .populate({
//       path: 'user',
//       select: 'name companyName'
//     });
//   if (!review) {
//     return next(new AppError('No review found with that ID', 404));
//   }
//   res.json({
//     status: 'success',
//     data: {
//       review
//     }
//   });
// });
