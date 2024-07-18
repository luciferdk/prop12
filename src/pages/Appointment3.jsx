import React, { useEffect } from "react";
import styles from "./Appointment3.module.css";
import { Link } from "react-router-dom";

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/payment-button.js';
    script.setAttribute('data-payment_button_id', 'pl_OYgJU4kliJpWOK');
    script.async = true;

    // Append the script to the form element
    const form = document.getElementById('razorpay-form');
    form.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      form.removeChild(script);
    };
  }, []);

  return <div></div>;
};

function Appointment3() {
  return (
    <>
      <div className={`${styles.container}`}>
        <h1>Tell Us Your Home Service Needs!</h1>
        <div className={`${styles.steps}`}>
          <div className={`${styles.step}`}>
            <span className={`${styles.step_number}`}>1</span>
            Your Info
          </div>
          <div className={`${styles.step}`}>
            <span className={`${styles.step_number}`}>2</span>
            Schedule Time
          </div>
          <div className={`${styles.step}`}>
            <span className={`${styles.step_number}`}>3</span>
            Review
          </div>
          <div className={`${styles.step}`}>
            <span className={`${styles.step_number}`}>4</span>
            Payment Method
          </div>
        </div>
        <div className="AppPayment">
          <h1>Make Payment with Razorpay</h1>
          <form id="razorpay-form" className={`${styles.drop001}`}>
            <RazorpayButton />
          </form>
        </div>
        <div className={`${styles.buttons}`}>
          <Link to="/Appointment2">
            <button className={`${styles.btn}`}>Back</button>
          </Link>
          <Link to="/Booked">
            <button className={`${styles.btn}`}>Next</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Appointment3;
