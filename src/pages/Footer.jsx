import React from "react";
import styles from "./Footer.module.css";
import Fb from "../utils/img/fb.png";
import Ig from "../utils/img/ig.png";
import Twtr from "../utils/img/twtr.png";
import Yt from "../utils/img/yt.png";

function Footer() {
	return (
		<>
			<div className={`${styles.navbar_footer}`}>
				<div className={`${styles.logo}`}>
					<div className={`${styles.logos}`}>
						<img src={Fb} alt="Fb" />
						<img src={Ig} alt="Ig" />
						<img src={Twtr} alt="Twtr" />
						<img src={Yt} alt="Yt" />
					</div>
				</div>
				<div className={`${styles.list}`}>
					<ul>
						<li>
							<a href="#">Copyright 2024 Helping Hand</a>
						</li>
						<li>
							<a href="#">Terms & Conditions</a>
						</li>
						<li>
							<a href="#">Privacy Policy</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Footer;
