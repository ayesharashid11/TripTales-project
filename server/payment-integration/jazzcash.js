const Jazzcash = require('jazzcash-checkout');

// Initialize JazzCash
Jazzcash.credentials({
  config: {
    merchantId: 'MC103917', // Merchant Id
    password: '59v9x5e21s', // Password
    hashKey: 'C5EFA9AB28D27A0D757FEB1917DBFECE84741819286D16E43864396002067068', // Hash Key
  },
  environment: 'sandbox', // available environment live or sandbox
});

const JC = {
  wallet: (data, callback) => {
    Jazzcash.setData(data);
    Jazzcash.createRequest('WALLET').then(res => {
      res = JSON.parse(res);
      console.log(res);
      // callback function
      callback(res);
    });
  },

  pay: (data, callback) => {
    Jazzcash.setData(data);
    Jazzcash.createRequest('PAY').then(res => {
      console.log(res);
      // callback function
      callback(res);
    });
  },

  refund: (data, callback) => {
    Jazzcash.setData(data);
    Jazzcash.createRequest('REFUND').then(res => {
      res = JSON.parse(res);
      console.log(res);
      // callback function
      callback(res);
    });
  },

  inquiry: (data, callback) => {
    Jazzcash.setData(data);
    Jazzcash.createRequest('INQUIRY').then(res => {
      res = JSON.parse(res);
      console.log(res);
      // callback function
      callback(res);
    });
  },
};

module.exports = JC;


