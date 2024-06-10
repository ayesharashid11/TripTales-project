const Tour = require('../models/tourSchema');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createTour = catchAsync(async (req, res, next) => {
  // const image = req.files && req.files.length > 0 ? req.files[0].path : '';
  const images = req.files.map(file => file.path);
  const newTour = await Tour.create({
    tourName: req.body.tourName,
    seats: req.body.seats,
    totalDays: req.body.totalDays,
    price: req.body.price,
    country: req.body.country,
    city: req.body.city,
    departureAddress: req.body.departureAddress,
    email: req.body.email,
    phoneNo: req.body.phoneNo,
    user: req.body.user,
    image: images
  });
  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour
    }
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id).populate('user', 'companyName  -_id');
  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});

exports.getAllTours = catchAsync(async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const tours = await Tour.find().populate('user', 'companyName -_id')
  .skip(skip)
  .limit(limit);
  res.status(200).json({
    results: tours.length,
    data: {
      tours
    }
  });
});

