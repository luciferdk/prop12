import React, { useState, useEffect } from "react";
import styles from "./Appointment2.module.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
import axios from 'axios'; // Import Axios for making API requests
function Appointment2() {
	const [formData, setFormData] = useState({
	  time: '',
	  date: '',
	});
  
	const navigate = useNavigate();
	const location = useLocation();
  
	// Get data from Appointment1
	const initialData = location.state || {};
  
	useEffect(() => {
	  setFormData({ ...initialData, ...formData });
	}, [initialData]);
  
	const handleChange = (e) => {
	  setFormData({ ...formData, [e.target.name]: e.target.value });
	};
  
	const handleSubmitAndNavigate = async (e) => {
	  e.preventDefault();
  
	  try {
		const response = await axios.post('http://localhost:8080/createUser', formData);
		console.log('Data sent successfully:', response.data);
		navigate('/Appointment3');
	  } catch (error) {
		console.error('Error sending data:', error);
	  }
	};
  

	// ... rest of your code ...
	return (
		<>
			<div className={`${styles.container}`}>
				<h1>Tell Us Your Home Service Needs!</h1>
				{/* <p>
					Helping Hand's comprehensive range of home maintenance and
					improvement services.
				</p> */}
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
				<form className={`${styles.pform}`} onSubmit={handleSubmitAndNavigate}>
					<div className={`${styles.form_group}`}>
						<label htmlFor="date">Choose Your Date *</label>
						<input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} />
					</div>
					<div className={`${styles.form_group}`}>
						<label htmlFor="time">Choose Your Time *</label>
						<input type="time" id="time" name="time" required value={formData.time} onChange={handleChange} />
					</div>
					<div className={`${styles.buttons}`}>
						<Link to="/Appointment1">
							<button className={`${styles.btn}`}>Back</button>
						</Link>
						<button className={`${styles.btn}`} type="submit">Next</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Appointment2;

