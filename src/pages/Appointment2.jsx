import React from "react";
import styles from "./Appointment2.module.css";
import { Link } from "react-router-dom";
function Appointment2() {
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
				<div className={`${styles.form_group}`}>
					<label htmlFor="date">Choose Your Date *</label>
					<input type="date" id="date" name="date" required />
				</div>
				<div className={`${styles.form_group}`}>
					<label htmlFor="time">Choose Your Time *</label>
					<input type="time" id="time" name="time" required />
				</div>
				<div className={`${styles.buttons}`}>
					<Link to="/Appointment1">
						<button>Back</button>
					</Link>

					<button>Next</button>
				</div>
			</div>
		</>
	);
}

export default Appointment2;
