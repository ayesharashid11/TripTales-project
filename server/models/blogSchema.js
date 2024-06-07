const mongoose = require('mongoose');
const blogSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    images: [{
      type: String
    }],
    videos: [{
      type: String
    }],
    content: {
      type: String
    },
  }, {timestamps: true}
);
  
  const Blog = mongoose.model('Blog', blogSchema);
  module.exports = Blog;
  