import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import OurPaymentInfra from "../components/OurPaymentInfra";
import MdHero from "../components/MdHero";
import MdDetails from "../components/MdDetails";
import PreBuiltDash from "../components/PreBuiltDash";

// IMPORT SEO
import Seo from "../components/Seo";

const MerchantDashboard = () => {
	return (
		<Layout>
			<Seo
				title="Digital merchant Dashboard to Paymob Technologies Payment Solutions"
				description="Seamlessly Dashboard your merchants with our ready-made KYC flow, Paymob take care of the end-to-end digital merchant Dashboard so you can focus on your own financial offering."
				canonical="https://paymobtech.com/merchantDashboard"
			/>

			<MdHero />
			<MdDetails />
			<PreBuiltDash />
			<OurPaymentInfra md />
		</Layout>
	);
};

export default MerchantDashboard;
