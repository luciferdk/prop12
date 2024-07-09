import React from "react";
import NewsLetter from "./NewsLetter";
import SubFooter from "./SubFooter";
import Footer from "./Footer";
import ServiceStepsBlue from "./ServiceStepsBlue";
import ServicesOffered from "./ServicesOffered";
import ServiceGrp from "./ServiceGrp";
function AboutUs() {
	return (
		<div>
			{/* service group */}
			<ServiceGrp />
			{/* service steps blue */}
			<ServiceStepsBlue />
			{/* services offered */}
			<ServicesOffered />
			{/* news letter */}
			<NewsLetter />
			{/* sub footer  */}
			<SubFooter />
			{/* footer  */}
			<Footer />
		</div>
	);
}

export default AboutUs;
