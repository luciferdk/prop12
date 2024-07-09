import React from "react";
import styles from "./ServiceSteps.module.css";
import Step1 from "../utils/img/step1.svg";
import Step2 from "../utils/img/step2.svg";
import Step3 from "../utils/img/step3.svg";
function ServiceSteps() {
	return (
		<>
			{/*--service steps--*/}
			<div className={`${styles.service_steps}`}>
				<h2>How Helping-Hand's Services Works</h2>
				<div className={`${styles.steps}`}>
					<div className={`${styles.step}`}>
						<div className={`${styles.step_circle}`}>
							<img src={Step1} alt="icon" />
						</div>
						<h4>Step 1</h4>
						<h3>Select Your Service</h3>
						<p>
							Discover the pinnacle of excellence by selecting your ideal
							service from our collection of premium offerings.
						</p>
					</div>
					<div className={`${styles.step}`}>
						<div className={`${styles.step_circle}`}>
							<img src={Step2} alt="icon" />
						</div>
						<h4>Step 2</h4>
						<h3>Choose Your Professional</h3>
						<p>
							Elevate your standards by choosing the perfect professional from
							our elite roster of handpicked experts.
						</p>
					</div>
					<div className={`${styles.step}`}>
						<div className={`${styles.step_circle}`}>
							<img src={Step3} alt="icon" />
						</div>
						<h4>Step 3</h4>
						<h3>Schedule Your Appointment</h3>
						<p>
							Effortlessly schedule your appointment and step into a world of
							unparalleled service.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ServiceSteps;
