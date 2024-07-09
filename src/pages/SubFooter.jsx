import React from "react";
import styles from "./SubFooter.module.css";
import LogoWhite from "../utils/img/logo_white.png";

function SubFooter() {
	return (
		<>
			<div className={`${styles.navbar}`}>
				<div className={`${styles.logo}`}>
					<img src={LogoWhite} alt="logo" />
				</div>
				<navbar className={`${styles.box}`}>
					<div className="nav_down">
						<ul>
							<li>
								<a href="/">Home</a>
							</li>
							<li>
								<a href="/Services">Services</a>
							</li>
							<li>
								<a href="/AboutUs">About Us</a>
							</li>
							<li>
								<a href="/Employee">Employee</a>
							</li>
							<li>
								<a href="/FAQ">FAQ</a>
							</li>
							<li>
								<a href="/Testimonials">Testimonials</a>
							</li>
							<li>
								<a href="/Contact">Contact</a>
							</li>
						</ul>
					</div>
					<div className={`${styles.box2}`}>
						<a href="tel:+919693617260">+919693617260</a>
					</div>
				</navbar>
			</div>
			<hr />
		</>
	);
}

export default SubFooter;
