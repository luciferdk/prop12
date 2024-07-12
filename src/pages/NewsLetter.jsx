import React, { useState } from "react";
import styles from "./NewsLetter.module.css";

const NewsLetter = () => {
	const [email, setEmail] = useState("");

	const handleInputChange = (event) => {
		setEmail(event.target.value);
	};

	const subscribeNewsletter = () => {
		const trimmedEmail = email.trim();

		// Basic email validation
		if (!trimmedEmail || !/\S+@\S+\.\S+/.test(trimmedEmail)) {
			alert("Please enter a valid email address.");
			return;
		}

		fetch("http://localhost:8008/subscribe", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: `email=${encodeURIComponent(trimmedEmail)}&message=${encodeURIComponent("Hi, I'm interested in your Sunday newsletter")}`,
		})
			.then((response) => response.text())
			.then((data) => {
				alert("You have been subscribed to our newsletter!");
				console.log("Response:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<>
			{/*--news letter--*/}
			<div className={styles.news_letter}>
				<h2>Subscribe Our Newsletter for Updates</h2>
				<div className={styles.news_letter_bg}>
					<input
						type="text"
						value={email}
						onChange={handleInputChange}
						placeholder="Enter your email id..."
					/>
					<button className={styles.btn} onClick={subscribeNewsletter}>
						Get Updated
					</button>
				</div>
			</div>
		</>
	);
};

export default NewsLetter;
