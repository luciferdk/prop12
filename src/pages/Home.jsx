import React from "react";
import Model from "../utils/img/model.png";
import styles from "./Home.module.css";
import ServicesOffered from "./ServicesOffered";
import ServiceSteps from "./ServiceSteps";
import ServiceGrp from "./ServiceGrp";
import Customerfeedback from "./CustomerFeedback";
import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
import BookAppointment from "./BookAppointment"; // Import the BookAppointment component

function Home() {
	return (
		<>
			{/* landing page */}
			<div className={`${styles.container}`}>
				<div className={`${styles.part1}`}>
					<h1>SERVICES EXPERIENCE WITH HELPING HAND</h1>
					<p>
						Hassle-Free Solutions <br />
						Trusted Professionals, <br />
						Every Time.
					</p>
					<BookAppointment />
				</div>
				<div className={`${styles.part2}`}>
					<img src={Model} alt="model" />
				</div>
			</div>
			{/* services offered */}
			<ServicesOffered />
			{/* service steps */}
			<ServiceSteps />
			{/* service group */}
			<ServiceGrp />
			{/* customer feedback */}
			<Customerfeedback />
			{/* news letter */}
			<NewsLetter />
			{/* sub footer  */}
			<SubFooter />
			{/* footer  */}
			<Footer />
		</>
	);
}

export default Home;
