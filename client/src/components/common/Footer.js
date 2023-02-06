import React from "react";
const Footer = () => {
	const link = "https://facebook.com/sabbirslab";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Sabbir's Lab{" "}
			<a href={link} target={target}>
				Sabbir's Lab
			</a>
		</div>
	);
};

export default Footer;
