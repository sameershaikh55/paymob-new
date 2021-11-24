import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroSdk from "../components/HeroSdk";
import SdkBrands from "../components/SdkBrands";
import SdkDetails from "../components/SdkDetails";
import HowitWorks from "../components/HowitWorks";
import SystemComponent from "../components/SystemComponent";

// IMPORT SEO
import Seo from "../components/Seo";

const AndroidSdk = () => {
	return (
		<Layout>
			<Seo
				title="Android SDK - Ready to go software development kit from Paymob"
				description="Enable your own SoftPOS solutions within your new or exisiting app, for speedy card present payments. Our Android Software Development Kit (SDK) is designed as a ‘plug in and go’ for your current digital ecosystem."
				canonical="https://paymobtech.com/androidSdk"
			/>

			<HeroSdk />
			<SdkBrands />
			<SdkDetails />
			<HowitWorks />
			<SystemComponent />
		</Layout>
	);
};

export default AndroidSdk;
