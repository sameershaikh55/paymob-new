import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroIndustry from "../components/HeroIndustry";
import PartnerBody from "../components/PartnerBody";

// IMPORT SEO
import Seo from "../components/Seo";

const Partners = () => {
	return (
		<Layout>
			<Seo
				title="SDK integration and app to app API solutions with Paymob Softpos Technology"
				description="Bespoke SDK integration and app to app API solutions with Paymob Softpos Technology for channel partners, vendors and large enterprises with Paymob to provide Softpos technology solutions enterprises through our adaptable, PCI certified Tap-On-Phone technology"
				canonical="https://paymobtech.com/partners"
			/>

			<HeroIndustry />
			<PartnerBody />
		</Layout>
	);
};

export default Partners;
