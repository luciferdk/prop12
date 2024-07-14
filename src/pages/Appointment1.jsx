import React from "react";
import styles from "./Appointment1.module.css";
import { Link } from "react-router-dom";
function Appointment1() {
	return (
		<>
			<div className={`${styles.container}`}>
				<h1>Tell Us Your Home Service Needs!</h1>
				<p>
					Welcome to Helping Hand's comprehensive range of home maintenance and
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
				</div>
				<form className={`${styles.form}`}>
					<label htmlFor="name">Name *</label>
					<input type="text" id="name" placeholder="Your name..." />
					<label htmlFor="phone">Phone number *</label>
					<input type="text" id="phone" placeholder="Phone number..." />
					<label htmlFor="service">Service Needed:</label>
					<select className={`${styles.dropdown}`} id="service">
						<option value>Select service</option>
						<option value="painting">Painting</option>
						<option value="plumbing">Plumbing</option>
						<option value="electrical">Electrical</option>
						<option value="painting">Pest Controling</option>
						<option value="plumbing">Landscaping</option>
						<option value="electrical">Interior Designing</option>
					</select>
					<label htmlFor="message">Additional message *</label>
					<textarea
						id="message"
						placeholder="Write your message here..."
						defaultValue={""}
					/>
					<Link to="/Appointment2">
						<button type="submit">Next</button>
					</Link>
				</form>
			</div>
		</>
	);
}

export default Appointment1;
