import React from "react";

// IMPORTING COMPONENTS
import HeroMpos from "../components/HeroMpos";
import Specifications from "../components/Specifications";
import Layout from "../layout";

// IMPORT SEO
import Seo from "../components/Seo";

const MposCard = () => {
	return (
		<Layout>
			<Seo
				title="Paymob mPOS Card Reader Aisino VM30. A pocket sized lightweight card reader, perfect for the ‘on the go’ business."
				description="mPOS Card Reader Aisino VM30. A pocket sized lightweight card reader, perfect for the ‘on the go’ business. This can be paired with any smart device via bluetooth being converted into a mobile payment solution."
				canonical="https://paymobtech.com/mposCard"
			/>

			<HeroMpos />
			<Specifications />
		</Layout>
	);
};

export default MposCard;
