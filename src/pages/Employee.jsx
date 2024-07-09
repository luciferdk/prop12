import React from "react";
import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
function Employee() {
	return (
		<div>
			<h1>Employee</h1>
			{/* news letter */}
			<NewsLetter />
			{/* sub footer  */}
			<SubFooter />
			{/* footer  */}
			<Footer />
		</div>
	);
}

export default Employee;
