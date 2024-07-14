import React from "react";
import styles from "./Appointment3.module.css";
import { Link } from "react-router-dom";
function Appointment3() {
	return (
		<>
			<div className={`${styles.container}`}>
				<h1>Tell Us Your Home Service Needs!</h1>
				{/* <p>
					Welcome to Helping Hand's comprehensive range of home maintenance and
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
                <div className={`${styles.drop}`}>
				<label htmlFor="service">Methods of Payment</label>
				<select className={`${styles.dropdown}`} id="service">
					<option value>Select mathod</option>
					<option value="credit_debit">Credit/Debit</option>
					<option value="cod">Cash on Delivery</option>
					<option value="upi">UPI Transaction</option>
					<option value="net_banking">Net Banking</option>
					{/* <option value="plumbing">Landscaping</option>
					<option value="electrical">Interior Designing</option> */}
				</select>
                </div>
				<div className={`${styles.buttons}`}>
					<Link to="/Appointment4">
						<button className={`${styles.btn}`}>Back</button>
					</Link>

					<Link to="/Booked">
						<button className={`${styles.btn}`}>Done</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Appointment3;
