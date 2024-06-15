const JC = require('./jazzcash');

// function used to pay
const pay = (req, res) => {
  const data = {
    pp_Version: '1.1',
    pp_DiscountedAmount: '',
    pp_DiscountBank: '',
    pp_Amount: '1000',
    pp_TxnCurrency: 'PKR',
    pp_BillReference: 'billRef123',
    pp_Description: 'Description of transaction',
  };

  JC.pay(data, res => {
    if (res.pp_SecureHash) {
      // success code here
    } else {
      // failure code here
    }
  });
};
