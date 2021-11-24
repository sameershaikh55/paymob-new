import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroIndustry from "../components/HeroIndustry";
import IndustryBody from "../components/IndustryBody";

// IMPORT SEO
import Seo from "../components/Seo";

const IndustrySector = () => {
	return (
		<Layout>
			<Seo
				title="Industry sectors using Paymob contactless payment solutions"
				description="Paymob provides contactless payment solutions for a range of industry industries and businesses"
				canonical="https://paymobtech.com/industrySector"
			/>
			<HeroIndustry ind />
			<IndustryBody />
		</Layout>
	);
};

export default IndustrySector;
