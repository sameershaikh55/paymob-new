import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroCase from "../components/HeroCase";
import CaseStudiesBody from "../components/CaseStudiesBody";

// IMPORT SEO
import Seo from "../components/Seo";

const CaseStudies = () => {
	return (
		<Layout>
			<Seo
				title="Paymob case studies for contactless payment solutions for business and industry sectors"
				description="Read about Paymobs case studies for contactless payment solutions for business and industry sectors"
				canonical="https://paymobtech.com/caseStudies"
			/>

			<HeroCase />
			<CaseStudiesBody />
		</Layout>
	);
};

export default CaseStudies;
