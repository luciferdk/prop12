import React from "react";

import styles from "./Appointment4.module.css";

import { Link } from "react-router-dom";
function Appointment4() {
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
				<form className={`${styles.pform}`}>
					<label htmlFor="name">Given Name *</label>
					<input type="text" id="name" placeholder="Your name..." />
					<label htmlFor="phone">Given Phone number *</label>
					<input type="text" id="phone" placeholder="Phone number..." />

					<label htmlFor="message">Your additional message *</label>
					<textarea
						id="message"
						placeholder="Write your message here..."
						defaultValue={""}
					/>
					<div className={`${styles.form_group}`}>
						<label htmlFor="date">Choosen Your Date *</label>
						<input type="date" id="date" name="date" required />
					</div>
					<div className={`${styles.form_group}`}>
						<label htmlFor="time">Choosen Your Time *</label>
						<input type="time" id="time" name="time" required />
					</div>
					<div className={`${styles.buttons}`}>
						<Link to="/Appointment2">
							<button className={`${styles.btn}`}>Back</button>
						</Link>

						<Link to="/Appointment3">
							<button className={`${styles.btn}`}>Next</button>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default Appointment4;
