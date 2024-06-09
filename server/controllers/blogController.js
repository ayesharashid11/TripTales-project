const Blog = require('../models/blogSchema');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
exports.createBlog = catchAsync(async (req, res, next) => {
  const images = [];
  const videos = [];
  req.files.forEach(file => {
    if (file.mimetype.startsWith('image/')) {
      images.push(file.path);
    } else if (file.mimetype.startsWith('video/')) {
      videos.push(file.path);
    }
  });
  const blogData = {
    ...req.body,
    images,
    videos
  };
  const newBlog = await Blog.create(blogData);
  res.json({
    status: 'success',
    data: {
      blog: newBlog
    }
  });
});

exports.getBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findById(req.params.id).populate({
    path: 'user',
    select: 'name -_id'
  });
  if (!blog) {
    return next(new AppError('No blog found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      blog
    }
  });
});

exports.getAllBlogs = catchAsync(async (req, res, next) => {
  const page = req.query.page ? parseInt(req.query.page, 10) : 1;
  const limit = 12;
  const skip = (page - 1) * limit;
  const blogs = await Blog.find().populate({
    path: 'user',
    select: 'name -_id'
  })
    .skip(skip)
    .limit(limit);

  res.json({
    page,
    results: blogs.length,
    data: {
      blogs
    }
  });
});
