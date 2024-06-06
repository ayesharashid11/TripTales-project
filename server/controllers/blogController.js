const Blog = require('../models/blogSchema');
const catchAsync = require('../utils/catchAsync');

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
  const blog = await Blog.findById(req.params.id);
  if (!blog) {
    return next(new AppError('No blogs found with that ID', 404));
  }
  res.json({
    data: {
      blog
    }
  })
});
