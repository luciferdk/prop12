import React, { useState, useEffect} from "react";
import styles from "./Appointment4.module.css";
import { Link, useLocation } from "react-router-dom";
import axios from 'axios';




function Appointment4() {
	
	const location = useLocation();
	// Get data from Appointment1
	const initialData = location.state || {};

	const [formData, setFormData] = useState(initialData);
	const [userDetails, setUserDetails] = useState({});

	useEffect(() => {
		const fetchUserDetails = async () => {
		  try {
			const response = await axios.get(`http://localhost:8080/showUser?phoneNumber=${formData.phoneNumber}`);
			setUserDetails(response.data);
		  } catch (error) {
			console.error('Error fetching user details:', error);
			// Handle error, e.g., display error message
		  }
		};
	  
		if (formData.phoneNumber) {
		  fetchUserDetails();
		}
	  }, [formData.phoneNumber]);


	return (
		<>
			<div className={`${styles.container}`}>
				<h1>Review</h1>
				{/* <p>
					Helping Hand's comprehensive range of home maintenance and improvement
					services.
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
				
				<div className={`${styles.buttons}`}>
				<Link to="/Appointment2">
							<button className={`${styles.btn}`}>Back</button>
						</Link>

						<Link to="/Appointment3">
							<button className={`${styles.btn}`}>Next</button>
						</Link>
						</div>
			</div>
			
		</>
	);
}

export default Appointment4;
