const Blog = require('../models/blogSchema');
const Tour = require('../models/tourSchema');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createBlog = catchAsync(async (req, res, next) => {
  console.log("jdkfwtieytfiyti", req.body);
  const images = [];
  const videos = [];
  req.files.forEach(file => {
    // console.log("file file file=============", file);
    if (file.mimetype.startsWith('image/')) {
      images.push(file.filename);
    } else if (file.mimetype.startsWith('video/')) {
      videos.push(file.filename);
    }

  });
  const blogData = {
    ...req.body,
    images,
    videos
  };
  const newBlog = await Blog.create(blogData);
  // console.log("newBlognewBlognewBlognewBlog", newBlog)
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


exports.searchBlog = catchAsync(async (req, res, next) => {
  const query = req.query.q;
  
  if (!query || query.length < 3) {
    return res.status(400).json({ message: 'Query must be at least 3 characters long.' });
  }
    const blogs = await Blog.find({ title: { $regex: query, $options: 'i' } }).limit(10);
    res.json(blogs);
});
