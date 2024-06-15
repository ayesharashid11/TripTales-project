import React, { useState } from 'react';
import axios from 'axios';

const BookNow = ({ tourId }) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [billReference, setBillReference] = useState('');

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/payment/pay', {
        amount,
        description,
        billReference,
      });

      if (response.data.success) {
        alert('Payment successful!');
        // Handle successful payment
      } else {
        alert('Payment failed: ' + response.data.message);
        // Handle payment failure
      }
    } catch (error) {
      console.error('Payment error: ', error);
      alert('Payment failed: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Book Now</h2>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />
      <input
        type="text"
        value={billReference}
        onChange={(e) => setBillReference(e.target.value)}
        placeholder="Enter bill reference"
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default BookNow;
