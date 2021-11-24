import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import FAQBody from "../components/FAQBody";

// IMPORT SEO
import Seo from "../components/Seo";

const Faq = () => {
	return (
		<Layout>
			<Seo
				title="Frequently Asked Questions about Paymob contactless payment solutions for business"
				description="FAQ's about contactless payment solutions for business using Paymob technology and solutions"
				canonical="https://paymobtech.com/faq"
			/>

			<FAQBody />
		</Layout>
	);
};

export default Faq;
