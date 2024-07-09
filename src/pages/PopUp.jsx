import React from "react";
import styles from "./PopUp.module.css";
import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";

function PopUp() {
	return (
		<>
			<h1>Login/Signup to Use This Facility</h1>
			<div className={`${styles.box}`}>
				<a href="/Services">OK</a>
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

export default PopUp;
