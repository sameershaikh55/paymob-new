import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroAbout from "../components/HeroAbout";
import AboutDetail from "../components/AboutDetail";
import OurTeam from "../components/OurTeam";
import AboutMoreDetails from "../components/AboutMoreDetails";

// IMPORT SEO
import Seo from "../components/Seo";

const About = () => {
	return (
		<Layout>
			<Seo
				title="Paymob provide cashless payment solutions for businesses – Paymob"
				description="About Paymob. Creator of Tap to Phone technology and provider of cashless payment solutions for businesses"
				canonical="https://paymobtech.com/about"
			/>

			<HeroAbout />
			<AboutDetail />
			<OurTeam />
			<AboutMoreDetails />
		</Layout>
	);
};

export default About;
