import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import ApHero from "../components/ApHero";
import OurPaymentInfra from "../components/OurPaymentInfra";
import PreBuiltDash from "../components/PreBuiltDash";
import MoDetails from "../components/MoDetails";

// IMPORT SEO
import Seo from "../components/Seo";

const AdminPortal = () => {
	return (
		<Layout>
			<Seo
				title="Paymob admin portal for SoftPOS white label clients"
				description="Paymob admin portal for SoftPOS white label clients. Keep a finger on the pulse of your application, track customer sales, usage and generate reports based your solutions activity in real time."
				canonical="https://paymobtech.com/adminPortal"
			/>

			<ApHero />
			<MoDetails adminP />
			<PreBuiltDash adminP />
			<OurPaymentInfra adminP />
		</Layout>
	);
};

export default AdminPortal;
