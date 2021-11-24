import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import SmartPosHero from "../components/SmartPosHero";
import SmartSpecification from "../components/SmartSpecification";

// IMPORT SEO
import Seo from "../components/Seo";

const SmartPos = () => {
	return (
		<Layout>
			<Seo
				title="Wireless Smart POS Terminal for Android OS - Paymob A90"
				description="A wireless smart POS terminal based on the Android 5.1 operating system. The terminal has all necessary communication modules, such as GSM with 4G, Wi-Fi, as well as Bluetooth support. A90 is equipped with magnetic stripe card readers, smart cards, and a contactless reader."
				canonical="https://paymobtech.com/smartPos"
			/>
			<SmartPosHero />
			<SmartSpecification />
		</Layout>
	);
};

export default SmartPos;
