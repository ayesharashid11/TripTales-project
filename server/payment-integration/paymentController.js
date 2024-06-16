const JC = require('./jazzcash');
const User = require('../models/userScehema');
const Tour = require('../models/tourSchema');

exports.pay = async (req, res) => {
  try {
    const { userId, mobileNumber } = req.body;
    const { tourId } = req.params; 

    const user = await User.findById(userId).select('email');
    const tour = await Tour.findById(tourId).select('tourName price');

    if (!user || !tour) {
      return res.status(404).json({ message: 'User or Tour not found' });
    }

    const data = {
      pp_Amount: tour.price,
      pp_MobileNumber: mobileNumber,
    };

    JC.pay(data, (response) => {
      response.userEmail = user.email;
      response.tourName = tour.tourName;
      response.tourPrice = tour.price;
      res.json(response);
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
