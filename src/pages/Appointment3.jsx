import React from "react";
import styles from "./Appointment3.module.css";
import RazorpayButton from './RazorpayButton';
import { Link } from "react-router-dom";






function Appointment3() {
	return (
		<>
			<div className={`${styles.container}`}>
				<h1>Tell Us Your Home Service Needs!</h1>
				{/* //step1 card  */}
				<div className={`${styles.steps}`}>
					<div className={`${styles.step}`}>
						<span className={`${styles.step_number}`}>1</span>
						Your Info
					</div>

					{/* //step1 card  */}
					{/* <div className={`${styles.step_line}`}></div> */}
					<div className={`${styles.step}`}>
						<span className={`${styles.step_number}`}>2</span>
						Schedule Time
					</div>

					{/* //step1 card  */}
					{/* <div className={`${styles.step_line}`}></div> */}
					<div className={`${styles.step}`}>
						<span className={`${styles.step_number}`}>3</span>
						Review
					</div>


					{/* //step1 card  */}
					{/* <div className={`${styles.step_line}`}></div> */}
					<div className={`${styles.step}`}>
						<span className={`${styles.step_number}`}>4</span>
						Payment Method
					</div>
				</div>
					<div className="AppPayment">
						<h1>Make Payment with Razorpay</h1>
						<div className={`${styles.drop001}`}>
							<RazorpayButton  />
							</div>
				</div>
				<div className={`${styles.buttons}`}>
					<Link to="/Appointment2">
						<button className={`${styles.btn}`}>Back</button>
					</Link>

					<Link to="/Booked">
						<button className={`${styles.btn}`}>next</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Appointment3;