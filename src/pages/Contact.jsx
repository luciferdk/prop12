import React from "react";
import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
function Contact() {
	return (
		<div>
			<h1>Contact</h1>
			{/* news letter */}
			<NewsLetter />
			{/* sub footer  */}
			<SubFooter />
			{/* footer  */}
			<Footer />
		</div>
	);
}

export default Contact;
