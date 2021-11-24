import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import MoHero from "../components/MoHero";
import MoDetails from "../components/MoDetails";
import OnBoarding from "../components/OnBoarding";
import OurPaymentInfra from "../components/OurPaymentInfra";

// IMPORT SEO
import Seo from "../components/Seo";

const MerchantOnboarding = () => {
	return (
		<Layout>
			<Seo
				title="Digital merchant onboarding to Paymob Technologies Payment Solutions"
				description="Seamlessly onboard your merchants with our ready-made KYC flow, Paymob take care of the end-to-end digital merchant onboarding so you can focus on your own financial offering."
				canonical="https://paymobtech.com/merchantOnboarding"
			/>

			<MoHero />
			<MoDetails />
			<OnBoarding />
			<OurPaymentInfra />
		</Layout>
	);
};

export default MerchantOnboarding;
