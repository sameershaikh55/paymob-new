import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import InHouseBody from "../components/InHouseBody";
import InHouseTableOne from "../components/InHouseTableOne";
import InHouseDetail from "../components/InHouseDetail";

// IMPORT SEO
import Seo from "../components/Seo";

const InHouseDeployement = () => {
	return (
		<Layout>
			<Seo
				title="In-house Deployment of hardwear servers for Paymob Technologies"
				description="To host Paymob services for a working configuration, we recommend using two hardware servers with virtualization. One for operation of the Paymob system and the second for operation of the Database (for launching a pilot project, all services can be deployed on one hardware server)."
				canonical="https://paymobtech.com/inHouseDeployement"
			/>

			<InHouseBody />
			<InHouseDetail />
			<InHouseTableOne />
		</Layout>
	);
};

export default InHouseDeployement;
