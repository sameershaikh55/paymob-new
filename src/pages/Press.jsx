import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import PressHero from "../components/PressHero";
import AboutPaymob from "../components/AboutPaymob";
import FeaturedNews from "../components/FeaturedNews";
import PressUpdate from "../components/PressUpdate";

// IMPORT SEO
import Seo from "../components/Seo";

const Press = () => {
	return (
		<Layout>
			<Seo
				title="Paymob Contactless Payment Technologies in the Press and Media"
				description="For Paymob media enquiries, please contact pr@paymobtech.com"
				canonical="https://paymobtech.com/press"
			/>

			<PressHero />
			<AboutPaymob />
			<FeaturedNews />
			<PressUpdate />
		</Layout>
	);
};

export default Press;
