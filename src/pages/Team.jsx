import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import TeamBody from "../components/TeamBody";

// IMPORT SEO
import Seo from "../components/Seo";

const Team = () => {
	return (
		<Layout>
			<Seo
				title="The Paymob Contactless Payment Technologies Team"
				description="Meet the Paymob Contactless Payment Technologies Team"
				canonical="https://paymobtech.com/team"
			/>
			<TeamBody />
		</Layout>
	);
};

export default Team;
