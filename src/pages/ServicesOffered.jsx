import React from "react";
import styles from "./ServicesOffered.module.css";
import Plumber_icon from "../utils/img/Plumber_icon_blue.svg";

import { useAuth0 } from "@auth0/auth0-react";

// import Plumber_icon_white from "../utils/img/Plumber_icon_white.svg";

function Services() {
	const { isAuthenticated } = useAuth0();
	return (
		<div>
			<div className={`${styles.services}`}>
				<h1>Our Best Available Services</h1>
				<div className={`${styles.cards} `}>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img className="img1" src={Plumber_icon} alt="icon blue" />
							{/* <img className="img2" src={Plumber_icon_white} alt="icon white" /> */}
						</div>
						<h2>Plumber</h2>
						<p>
							Fast, reliable plumbing services to keep your home flowing
							smoothly!
						</p>
						{isAuthenticated ? (
							<a href="/Plumbers">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img src={Plumber_icon} alt="icon" />
						</div>
						<h2>Electrician</h2>
						<p>
							Expert electricians passionately lighting up your life with
							reliable service!
						</p>
						{isAuthenticated ? (
							<a href="/FAQ">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img src={Plumber_icon} alt="icon" />
						</div>
						<h2>Painter</h2>
						<p>
							Transform your space with our professional home painting services!
						</p>
						{isAuthenticated ? (
							<a href="/FAQ">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img src={Plumber_icon} alt="icon" />
						</div>
						<h2>Interior Designer</h2>
						<p>
							Elevate your living spaces with our bespoke interior design
							solutions!
						</p>
						{isAuthenticated ? (
							<a href="/FAQ">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img src={Plumber_icon} alt="icon" />
						</div>
						<h2>Landscaper </h2>
						<p>
							Transform your yard into a stunning oasis with our expert
							landscaping services!
						</p>
						{isAuthenticated ? (
							<a href="/FAQ">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img src={Plumber_icon} alt="icon" />
						</div>
						<h2>Pest control</h2>
						<p>
							Keep your home pest-free with our fast and effective pest control
							services!
						</p>
						{isAuthenticated ? (
							<a href="/FAQ">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
				</div>
				<button className={`${styles.btn}`}>See All Services</button>
			</div>
		</div>
	);
}

export default Services;
