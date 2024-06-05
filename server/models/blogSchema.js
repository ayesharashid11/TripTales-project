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
 file: {
  type: String
 }
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;