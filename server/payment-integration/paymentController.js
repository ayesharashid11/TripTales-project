const JC = require('./jazzcash');

exports.pay = (req, res) => {
  const { amount, description, mobileNumber, cnic } = req.body;

  const data = {
    pp_Version: '1.1',
    pp_Amount: amount * 100, // Convert to smallest currency unit
    pp_Description: description,
    pp_MobileNumber: mobileNumber,
    pp_CNIC: cnic,
    pp_TxnCurrency: 'PKR',
    pp_BillReference: 'billRef123',
  };

  JC.pay(data, response => {
    if (response.pp_SecureHash) {
      res.status(200).json({ success: true, data: response });
    } else {
      res.status(500).json({ success: false, message: 'Payment failed', data: response });
    }
  });
};
