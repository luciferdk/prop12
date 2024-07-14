import React from "react";
import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
import Plumbers from "./Plumbers";
import Electricians from "./Electricians";
import Painters from "./Painters";
import PestControlers from "./PestControlers";
import Landscapers from "./Landscapers";
import Designers from "./Designers";
function Employee() {
	return (
		<div>
			{/* Plumbers */}
			<Plumbers />
			{/* Electricians */}
			<Electricians />
			{/* Painters */}
			<Painters />
			{/* PestControlers */}
			<PestControlers />
			{/* Landscapers */}
			<Landscapers />
			{/* Interior Designers */}
			<Designers />
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
