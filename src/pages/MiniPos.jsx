import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import MiniPosHero from "../components/MiniPosHero";
import MiniSpecification from "../components/MiniSpecification";

// IMPORT SEO
import Seo from "../components/Seo";

const MiniPos = () => {
	return (
		<Layout>
			<Seo
				title="mPOS Card Reader Aisino VM30 - mini pos card reader from Paymob"
				description="Aisino VM30 - A pocket sized lightweight card reader, perfect for the ‘on the go’ business. This can be paired with any smart device via bluetooth being converted into a mobile payment solution."
				canonical="https://paymobtech.com/miniPos"
			/>

			<MiniPosHero />
			<MiniSpecification />
		</Layout>
	);
};

export default MiniPos;
