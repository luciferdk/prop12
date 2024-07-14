import React from "react";

import styles from "./Booked.module.css";

import { Link } from "react-router-dom";
function Booked() {
	return (
		<>
			<div className={`${styles.container}`}>
				<div className={`${styles.steps}`}>
					<div className={`${styles.step}`}>Booked Successfully ✅</div>
				</div>

				<div className={`${styles.buttons}`}>
					<Link to="/">
						<button className={`${styles.btn}`}>Go to Home</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Booked;
