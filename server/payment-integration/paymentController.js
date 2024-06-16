const JC = require('./jazzcash');
const User = require('../models/userScehema');
// exports.pay = (req, res) => {
//     const { id } = req.params;
//   const { amount, description, mobileNumber, cnic } = req.body;

//   const data = {
//     pp_Amount: amount , // Convert to smallest currency unit
//     pp_Description: description,
//     pp_MobileNumber: mobileNumber,
//     pp_CNIC: cnic,
//     pp_TxnCurrency: 'PKR',
//     pp_BillReference: 'billRef123',
//   };

//   JC.pay(data, response => {
//     if (response.pp_SecureHash) {
//       res.status(200).json({ success: true, data: response });
//     } else {
//       res.status(500).json({ success: false, message: 'Payment failed', data: response });
//     }
//   });
// };

exports.pay = async (req, res) => {
    try {
      const { id } = req.params;
      const { price, description, mobileNumber, cnic } = req.body;
      const user = await User.findById(id).select('email');
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const data = {
        pp_Price: price ,
        pp_Description: description,
        pp_MobileNumber: mobileNumber,
        pp_CNIC: cnic,
        pp_BillReference: 'billRef123',
        pp_TxnCurrency: 'PKR',
      };
  
      JC.pay(data, (response) => {
        response.userEmail = user.email;
        res.json(response);
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };