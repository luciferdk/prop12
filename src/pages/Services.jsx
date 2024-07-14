import React from "react";
import styles from "./Services.module.css";
import Plumber_icon from "../utils/img/plumber.png";
import Electrician_icon from "../utils/img/electrician.png";
import Landscaper_icon from "../utils/img/landscapers.png";
import Designer_icon from "../utils/img/designer.png";
import Painter_icon from "../utils/img/painter.png";
import Pesticide_icon from "../utils/img/pesticide.png";

import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
import ServiceSteps from "./ServiceSteps";
import Customerfeedback from "./CustomerFeedback";
// import PopUp from "./PopUp";
import { useAuth0 } from "@auth0/auth0-react";
// import { Link, Route, Routes } from "react-router-dom";
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
							<img src={Electrician_icon} alt="icon" />
						</div>
						<h2>Electrician</h2>
						<p>
							Expert electricians passionately lighting up your life with
							reliable service!
						</p>
						{isAuthenticated ? (
							<a href="/Electricians">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img src={Painter_icon} alt="icon" />
						</div>
						<h2>Painter</h2>
						<p>
							Transform your space with our professional home painting services!
						</p>
						{isAuthenticated ? (
							<a href="/Painters">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img src={Designer_icon} alt="icon" />
						</div>
						<h2>Interior Designer</h2>
						<p>
							Elevate your living spaces with our bespoke interior design
							solutions!
						</p>
						{isAuthenticated ? (
							<a href="/Designers">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img src={Landscaper_icon} alt="icon" />
						</div>
						<h2>Landscaper </h2>
						<p>
							Transform your yard into a stunning oasis with our expert
							landscaping services!
						</p>
						{isAuthenticated ? (
							<a href="/Landscapers">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
					<div className={`${styles.card}`}>
						<div className={`${styles.icon_card}`}>
							<img src={Pesticide_icon} alt="icon" />
						</div>
						<h2>Pest control</h2>
						<p>
							Keep your home pest-free with our fast and effective pest control
							services!
						</p>
						{isAuthenticated ? (
							<a href="/PestControlers">Explore now → </a>
						) : (
							<a href="/PopUp">Explore now → </a>
						)}
					</div>
				</div>
				{/* <button className={`${styles.btn}`}>See All Services</button> */}
			</div>
			{/* service steps  */}
			<ServiceSteps />
			{/* customer feedback */}
			<Customerfeedback />
			{/* news letter */}
			<NewsLetter />
			{/* sub footer  */}
			<SubFooter />
			{/* footer  */}
			<Footer />
		</div>
	);
}

export default Services;
