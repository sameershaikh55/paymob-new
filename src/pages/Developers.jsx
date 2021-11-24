import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import DevelopersBody from "../components/DevelopersBody";

// IMPORT SEO
import Seo from "../components/Seo";

const Developers = () => {
	return (
		<Layout>
			<Seo
				title="Paymob work with your developers to integrate our contactless payment solutions"
				description="Read how Paymob work with your developers to integrate our contactless payment solutions for your business"
				canonical="https://paymobtech.com/developers"
			/>

			<DevelopersBody />
		</Layout>
	);
};

export default Developers;
