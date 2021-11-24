import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import CareerBody from "../components/CareerBody";

// IMPORT SEO
import Seo from "../components/Seo";

const Careers = () => {
	return (
		<Layout>
			<Seo
				title="Get a career with Paymob - Check out our latest job opportunities"
				description="Get a career with Paymob. At Paymob we’re challenging the status quo of paytech, uplifiting businesses around the world to accept payments through their own smartphones..."
				canonical="https://paymobtech.com/careers"
			/>

			<CareerBody />
		</Layout>
	);
};

export default Careers;
