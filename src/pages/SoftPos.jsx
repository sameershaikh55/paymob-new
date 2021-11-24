import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroSoft from "../components/HeroSoft";
import SdkBrands from "../components/SdkBrands";
import SoftDetails from "../components/SoftDetails";
import HiwSoft from "../components/HiwSoft";
import BespokeSolutions from "../components/BespokeSolutions";
import SystemComponent from "../components/SystemComponent";
import CaseStudies from "../components/CaseStudies";
import Benefits from "../components/Benefits";

// IMPORT SEO
import Seo from "../components/Seo";

const SoftPos = () => {
	return (
		<Layout>
			<Seo
				title="SoftPOS white label app with Tap To Phone technology | Paymob"
				description="Try our SoftPOS white label app with Tap To Phone technology from Paymob"
				canonical="https://paymobtech.com/softPos"
			/>
			<HeroSoft />
			<SdkBrands />
			<SoftDetails />
			<HiwSoft />
			<BespokeSolutions />
			<SystemComponent />
			<Benefits />
			<CaseStudies />
		</Layout>
	);
};

export default SoftPos;
