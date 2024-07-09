import React from "react";
import styles from "./Plumbers.module.css";
import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
import Plumber_icon from "../utils/img/Plumber_icon_blue.svg";
function Plumbers() {
	return (
		<>
			<div className={`${styles.plumbers}`}>
				<h1>Our Best Plumbers </h1>
				<div className={`${styles.pcards} `}>
					<div className={`${styles.pcard}`}>
						<div className={`${styles.picon_card}`}>
							<img className="img1" src={Plumber_icon} alt="icon blue" />
							{/* <img className="img2" src={Plumber_icon_white} alt="icon white" /> */}
						</div>
						<h2>Plumber</h2>
						<p>
							Fast, reliable plumbing services to keep your home flowing
							smoothly!
						</p>
					</div>
					<div className={`${styles.pcard}`}>
						<div className={`${styles.picon_card}`}>
							<img className="img1" src={Plumber_icon} alt="icon blue" />
							{/* <img className="img2" src={Plumber_icon_white} alt="icon white" /> */}
						</div>
						<h2>Plumber</h2>
						<p>
							Fast, reliable plumbing services to keep your home flowing
							smoothly!
						</p>
					</div>
					<div className={`${styles.pcard}`}>
						<div className={`${styles.picon_card}`}>
							<img className="img1" src={Plumber_icon} alt="icon blue" />
							{/* <img className="img2" src={Plumber_icon_white} alt="icon white" /> */}
						</div>
						<h2>Plumber</h2>
						<p>
							Fast, reliable plumbing services to keep your home flowing
							smoothly!
						</p>
					</div>
				</div>
			</div>

			{/* news letter */}
			<NewsLetter />
			{/* sub footer  */}
			<SubFooter />
			{/* footer  */}
			<Footer />
		</>
	);
}

export default Plumbers;
