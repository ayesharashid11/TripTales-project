const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Tour = require('../models/tourSchema');

exports.searchTours = catchAsync(async (req, res, next) => {
    const { query } = req.query;
    if (!query) {
        return next(new AppError('Query parameter is required', 400));
    }
    const tours = await Tour.find({ tourName: { $regex: query, $options: 'i' } }); 
    if (tours.length === 0) {
      return next(new AppError ('No tours found matching your query'));
    }
    res.status(200).json({ data: { tours } });
});
