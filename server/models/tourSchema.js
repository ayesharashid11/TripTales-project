const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  tourName: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    required: true
  },
  totalDays: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  country:{
    type: String,
    required: true
  },
  city:{
    type: String,
    required: true
  },
  departureAddress: {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  phoneNo:{
    type: Number,
    required: true
  },
  image:[{
    type: String
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  averageRating: {
    type: Number,
    default: 0
  }
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
