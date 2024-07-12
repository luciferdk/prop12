import React, { useState } from "react"; // Import useState
import styles from "./Home.module.css"; // Import the CSS module

const BookAppointment = () => {
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleInputChange = (event) => {
		setPhoneNumber(event.target.value);
	};

	const bookAppointment = () => {
		let phone = phoneNumber.trim();

		// Prepend country code if not already present
		if (!phone.startsWith("+")) {
			phone = "+91" + phone; // Assuming +91 for India
		}

		fetch("http://localhost:8008/send-sms", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: `phoneNumber=${encodeURIComponent(phone)}`,
		})
			.then((response) => response.text())
			.then((data) => {
				alert(data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	};

	return (
		<div className={styles.news_letter_bg}>
			<input
				type="text"
				value={phoneNumber}
				onChange={handleInputChange}
				placeholder="Enter your phone no..."
			/>
			<button className={styles.btn} onClick={bookAppointment}>
				Book Appointment
			</button>
		</div>
	);
};

export default BookAppointment;
