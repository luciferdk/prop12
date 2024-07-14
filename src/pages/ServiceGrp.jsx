import React from "react";
import styles from "./ServiceGrp.module.css";
import Grp from "../utils/img/grp.png";
import { Link } from "react-router-dom";
function ServiceGrp() {
	return (
		<>
			<div className={`${styles.container}`}>
				<div className={`${styles.part1}`}>
					<h1>Who We Are?</h1>
					<p>
						We are thrilled to introduce ourselves as the dedicated team behind
						Helping Hand, your trusted partner for exceptional home solutions.
						As a newly established yet highly reputed home service-based
						company, we specialise in bringing comfort, convenience, and
						excellence right to your doorstep. Our team of skilled professionals
						is committed to providing top-quality services, from maintenance and
						repairs to home enhancements, ensuring your home remains your
						sanctuary. <br /> <br /> Experience the pinnacle of home care with
						Helping Hand, where your satisfaction is our ultimate priority.....
						<span>Read more</span>
					</p>
					<Link to="/AboutUs">
						<button className={`${styles.btn}`}>See All Services</button>
					</Link>
				</div>
				<div className={`${styles.part2}`}>
					<img src={Grp} alt="model" />
				</div>
			</div>
		</>
	);
}

export default ServiceGrp;
