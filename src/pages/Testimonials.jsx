import React from "react";
import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
import styles from "./Customerfeedback.module.css";
function Testimonials() {
	return (
		<div>
			<div className={`${styles.services}`}>
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
					<div className={`${styles.card}`}>
						<p>
							No more pests thanks to Helping Hand! Professional, thorough, and
							effective pest control service!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Ishika Banerjee</h4>
								<p>21/04/2024 </p>
							</div>
						</div>
					</div>
					<div className={`${styles.card}`}>
						<p>
							Interior designers at Helping Hand created my dream home. Talented
							team, exceeded expectations!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Swarna Singh</h4>
								<p>01/05/2024 </p>
							</div>
						</div>
					</div>
					<div className={`${styles.card}`}>
						<p>
							Helping Hand's plumber unclogged my sink. Quick response,
							affordable, no more blockages!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Mitra Dey</h4>
								<p>01/03/2024 </p>
							</div>
						</div>
					</div>
					<div className={`${styles.card}`}>
						<p>
							No more bugs! Thanks, Helping Hand pest control. Quick, safe, no
							creepy crawlies anymore!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Barsha Biswas</h4>
								<p>20/01/2024 </p>
							</div>
						</div>
					</div>

					<div className={`${styles.card}`}>
						<p>
							Interior designers at Helping Hand made my home stunning! Great
							ideas, easy to work with.
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Amir Khan</h4>
								<p>19/04/2024 </p>
							</div>
						</div>
					</div>

					<div className={`${styles.card}`}>
						<p>
							Interior designers at Helping Hand made my space cosy and stylish.
							Excellent communication and results!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Dhrup Samanta</h4>
								<p>19/04/2024 </p>
							</div>
						</div>
					</div>

					<div className={`${styles.card}`}>
						<p>
							Helping Hand landscapers created a paradise in my backyard.
							Hardworking team, exceeded expectations!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Avijit Sinha</h4>
								<p>11/04/2024 </p>
							</div>
						</div>
					</div>
					<div className={`${styles.card}`}>
						<p>
							Thanks to Helping Hand, my home is pest-free! Reliable service,
							effective treatments, and friendly staff!
						</p>
						<div className={`${styles.details}`}>
							<div className={`${styles.image}`}>
								<img src="" alt="" />
							</div>

							<div className={`${styles.customer_details}`}>
								<h4>Sudipto Mandal</h4>
								<p>11/04/2024 </p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* news letter */}
			<NewsLetter />
			{/* sub footer  */}
			<SubFooter />
			{/* footer  */}
			<Footer />
		</div>
	);
}

export default Testimonials;
