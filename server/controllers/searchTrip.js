const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Tour = require('../models/tourSchema');

exports.searchTours = catchAsync(async (req, res, next) => {
    const { query, page = 1, limit = 10 } = req.query;
    if (!query) {
        return next(new AppError('Query parameter is required', 404));
    }

    const skip = (page - 1) * limit;
    const totalTours = await Tour.countDocuments({ tourName: { $regex: query, $options: 'i' } });
    const totalPages = Math.ceil(totalTours / limit);

    if (totalTours === 0) {
        return res.status(404).json({ message: 'No tours found' });
    }
    const tours = await Tour.find({ tourName: { $regex: query, $options: 'i' } })
        .skip(skip)
        .limit(limit)
        .populate('user', 'companyName  -_id');
    res.status(200).json({
        data: {
            tours,
            totalPages,
            currentPage: page,
            totalTours
        }
    });
});
