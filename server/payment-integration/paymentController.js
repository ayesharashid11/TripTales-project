const JC = require('./jazzcash');

exports.pay = (req, res) => {
  const { amount, description, billReference } = req.body;

  const data = {
    pp_Version: '1.1',
    pp_DiscountedAmount: '',
    pp_DiscountBank: '',
    pp_Amount: amount,
    pp_TxnCurrency: 'PKR',
    pp_BillReference: billReference,
    pp_Description: description,
  };

  JC.pay(data, response => {
    if (response.pp_SecureHash) {
      res.status(200).json({  data: response });
    } else {
      res.status(500).json({ message: 'Payment failed', data: response });
    }
  });
};
