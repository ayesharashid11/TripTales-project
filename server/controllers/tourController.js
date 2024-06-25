const Tour = require('../models/tourSchema');
const Blog = require('../models/blogSchema');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createTour = catchAsync(async (req, res, next) => {
  const images = req.files.map(file => file.filename);

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

  const populatedTour = await Tour.findById(newTour._id).populate('user', 'name');

  res.status(201).json({
    status: 'success',
    data: {
      tour: populatedTour
    }
  });
});

exports.getAllTours = catchAsync(async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const limit = 10;
  const skip = (page - 1) * limit;
  const tours = await Tour.find()
    .populate({ path: 'reviews', select: 'rating' })
    .populate('user', 'companyName -_id')
    .skip(skip)
    .limit(limit);
  res.json({
    results: tours.length,
    data: {
      tours
    }
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id)
  .populate({
    path: 'blogs',
    populate: {
      path: 'user',
      select: 'name'
    }
  })
    .populate('user', 'companyName  -_id');
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

exports.attachBlogToTour = catchAsync(async (req, res, next) => {
  const { blogId } = req.body;
  const { tourId } = req.params; 

  const tour = await Tour.findById(tourId);
  if (!tour) {
    return next(new AppError('No tour found with that ID', 404));
  }

  const blog = await Blog.findById(blogId);
  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }
  if (tour.blogs.includes(blogId)) {
    return next(new AppError('Blog already attached to this tour', 400));
  }
  tour.blogs.push(blogId);
  await tour.save();
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});


