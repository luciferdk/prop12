import React from "react";
import styles from "./NewsLetter.module.css";

function NewsLetter() {
	return (
		<>
			{/*--news letter--*/}
			<div className={`${styles.news_letter}`}>
				<h2>Subscribe Our Newsletter for Update</h2>
				<div className={`${styles.news_letter_bg}`}>
					<input type="text" placeholder="Enter your email id..." />
					<button className={`${styles.btn}`}>Get Updated</button>
				</div>
			</div>
		</>
	);
}

export default NewsLetter;
