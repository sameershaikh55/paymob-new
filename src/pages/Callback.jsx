import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import CallBackHome from "../components/CallBackHome";
import CallbackApp from "../components/CallbackApp";
import HowitWorks from "../components/HowitWorks";

// IMPORT SEO
import Seo from "../components/Seo";

const Callback = () => {
	return (
		<Layout>
			<Seo
				title="Paymob Contactless Payment App to app APIs"
				description="Avoid the hastle of building your own payment infrastructure by leveraging our developer friendly, ready to go APIs for immediate app to app callback."
				canonical="https://paymobtech.com/callback"
			/>

			<CallBackHome />
			<CallbackApp />
			<div className="howItWorks_container">
				<HowitWorks callback />
			</div>
		</Layout>
	);
};

export default Callback;
