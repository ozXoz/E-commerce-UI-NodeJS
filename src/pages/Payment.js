

import React, { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import './Payment.css'; // Import your CSS file for styling

const Payment = () => {
  const KEY = "api ekle buraya";

  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    // Perform the necessary actions with the token (e.g., send it to the backend for payment processing)
    setStripeToken(token);
  };

  useEffect(() => {
    
const apiEndpoint = 'http://localhost:3333/api/checkout/payment';

const makeRequest = async () => {
  try {
    const res = await axios.post(apiEndpoint, {
      tokenId: stripeToken.id,
      amount: 2000,
    });
    console.log(res.data);
  } catch (err) {
    if (err.response) {
      // The request was made and the server responded with a status code
      console.log(err.response.data);
      console.log(err.response.status);
    } else if (err.request) {
      // The request was made but no response was received
      console.log(err.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', err.message);
    }
    console.log(err.config);
  }
};



    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div className="payment-container">
      <StripeCheckout
        token={onToken}
        stripeKey={KEY}
        amount={2000} // Amount in cents
        currency="USD"
        name="Your Company"
        description="Payment for Service"
        panelLabel="Pay Now"
        shippingAddress
        billingAddress
        zipCode
      />
    </div>
  );
};

export default Payment;
