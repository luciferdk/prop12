import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Employee from "./pages/Employee";
import FAQ from "./pages/FAQ";
import PopUp from "./pages/PopUp";
import Plumbers from "./pages/Plumbers";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Logo from "./utils/img/logo.png";

function App() {
	const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

	console.log("Current User", user);

	function handleLinkClick(event) {
		const links = document.querySelectorAll(".link");
		links.forEach((link) => {
			link.classList.remove("active");
		});
		event.target.classList.add("active");
	}

	return (
		<div>
			{/*-top nav--*/}
			<div className="navbar">
				<div className="logo">
					<img src={Logo} alt="logo" />
				</div>

				<div className="box">
					<div className="box1">
						<p>
							<span>
								{isAuthenticated ? (
									<span>Hello, {user.given_name}!</span>
								) : (
									<span className="spanb">24/7 Available!</span>
								)}
							</span>
							<br />
							Your need is our priority!
						</p>
					</div>
					<div className="box2">
						<a href="tel:+919693617260">+919693617260</a>
					</div>
				</div>
			</div>
			<hr className="hr_top" />
			{/*---main nav--*/}
			<nav>
				<ul>
					<div className="list">
						<li>
							<Link
								to="/"
								className={window.location.pathname === "/" ? "active" : ""}
								onClick={handleLinkClick}
							>
								Home
							</Link>
						</li>
						<li>
							<Link to="/Services" className="link" onClick={handleLinkClick}>
								Services
							</Link>
						</li>
						<li>
							<Link to="/AboutUs" className="link" onClick={handleLinkClick}>
								About us
							</Link>
						</li>
						<li>
							<Link to="/Employee" className="link" onClick={handleLinkClick}>
								Employee
							</Link>
						</li>
						<li>
							<Link to="/FAQ" className="link" onClick={handleLinkClick}>
								FAQ
							</Link>
						</li>
						<li>
							<Link
								to="/Testimonials"
								className="link"
								onClick={handleLinkClick}
							>
								Testimonials
							</Link>
						</li>
						<li>
							<Link to="/Contact" className="link" onClick={handleLinkClick}>
								Contact
							</Link>
						</li>
					</div>
					<div className="search">
						<li>
							<input type="search" placeholder="Search..." />
						</li>
					</div>

					{isAuthenticated ? (
						<button className="btn" onClick={() => logout()}>
							Log out
						</button>
					) : (
						<button className="btn btn1" onClick={() => loginWithRedirect()}>
							Sign up
						</button>
					)}
				</ul>
			</nav>

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/Services" element={<Services />} />
				<Route path="/AboutUs" element={<AboutUs />} />
				<Route path="/Employee" element={<Employee />} />
				<Route path="/FAQ" element={<FAQ />} />
				<Route path="/Testimonials" element={<Testimonials />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/PopUp" element={<PopUp />} />
				<Route path="/Plumbers" element={<Plumbers />} />
			</Routes>
		</div>
	);
}

export default App;
