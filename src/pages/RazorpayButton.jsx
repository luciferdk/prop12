// RazorpayButton.js
import React, { useEffect } from 'react';

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_OYgJU4kliJpWOK');
    script.async = true;
    document.getElementById('razorpay-button-container').appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.getElementById('razorpay-button-container').removeChild(script);
    };
  }, []);

  return <div id="razorpay-button-container"></div>;
};

export default RazorpayButton;
