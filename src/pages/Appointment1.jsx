import React, { useState } from "react";
import styles from "./Appointment1.module.css";
import { useNavigate } from "react-router-dom";


function Appointment1() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    message: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Appointment2', { state: formData }); // Pass formData to Appointment2
  };


  return (
    <>
      <div className={`${styles.container}`}>
        <h1>Tell Us Your Home Service Needs!</h1>
        <p>
          Helping Hand's comprehensive range of home maintenance and
          improvement services.
        </p>
        <div className={`${styles.steps}`}>
          <div className={`${styles.step}`}>
            <span className={`${styles.step_number}`}>1</span>
            Your Info
          </div>
          {/* <div className={`${styles.step_line}`}></div> */}
          <div className={`${styles.step}`}>
            <span className={`${styles.step_number}`}>2</span>
            Schedule Time
          </div>

          {/* <div className={`${styles.step_line}`}></div> */}
          <div className={`${styles.step}`}>
            <span className={`${styles.step_number}`}>3</span>
            Review
          </div>
          {/* <div className={`${styles.step_line}`}></div> */}
          <div className={`${styles.step}`}>
            <span className={`${styles.step_number}`}>4</span>
            Payment Method
          </div>
        </div>
        <form className={`${styles.pform}`} onSubmit={handleSubmit}>
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="fullName" placeholder="Your name..." value={formData.name} onChange={handleChange} />
          <label htmlFor="phone">Phone number *</label>
          <input type="text" id="phone" name="phoneNumber" placeholder="Phone number..." value={formData.phone} onChange={handleChange} />

          <label htmlFor="message">Additional message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          />
          <button className={`${styles.btn}`} type="submit">Next</button>

        </form>
      </div>
    </>
  );
}

export default Appointment1;
