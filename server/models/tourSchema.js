const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
  tourName: {
    type: String,
    required: true
  },
  seats: {
    type: Number,
    require: true
  },
  totalDays: {
    type: Number,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  country:{
    type: String,
    require: true
  },
  city:{
    type: String,
    require: true
  },
  departureAddress: {
    type: String,
    require: true
  },
  email:{
    type: String,
    require: true
  },
  phoneNo:{
    type: Number,
    require: true
  },
  image:[{
    type: String
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;