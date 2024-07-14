import React from "react";
import styles from "./Customerfeedback.module.css";
import { Link } from "react-router-dom";

function Customerfeedback() {
	return (
		<>
			<div className={`${styles.services}`}>
				<h1>What Our Customers are Saying</h1>
				<div className={`${styles.cards} `}>
					<div className={`${styles.card}`}>
						<p>
							My garden looks amazing thanks to Helping Hand landscapers!
							Hardworking team, beautiful results!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Prakash Ganguly</h4>
								<p>12/06/2024</p>
							</div>
						</div>
					</div>
					<div className={`${styles.card}`}>
						<p>
							Helping Hand fixed my leaky pipe fast! Friendly plumber, clean
							job, no leaks now!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Devjyoti Biswas</h4>
								<p>21/04/2024 </p>
							</div>
						</div>
					</div>
					<div className={`${styles.card}`}>
						<p>
							Electricians from Helping Hand were quick, fixed my lights, and
							very polite and professional!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Raj Dey</h4>
								<p>29/03/2024</p>
							</div>
						</div>
					</div>
				</div>
				<Link to="/Testimonials">
					<button className={`${styles.btn}`}>See All Feedbacks</button>
				</Link>
			</div>
		</>
	);
}

export default Customerfeedback;
