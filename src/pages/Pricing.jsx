import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import PriceHero from "../components/PriceHero";
import PricingDetails from "../components/PricingDetails";
import CoreFeatures from "../components/CoreFeatures";

// IMPORT SEO
import Seo from "../components/Seo";

const Pricing = () => {
	return (
		<Layout>
			<Seo
				title="Compare contactless payment pricing for smartphones | PayMob"
				description="Compare Paymob prices, the cheapest pricing for contactless payment for mobile phones, cheaper than other providers like Barclaycard, Sumup, Paypal or Samsung POS. Tap to Phone from Paymobtech.com"
				canonical="https://paymobtech.com/pricing"
			/>

			<PriceHero />
			<PricingDetails />
			<CoreFeatures />
		</Layout>
	);
};

export default Pricing;
