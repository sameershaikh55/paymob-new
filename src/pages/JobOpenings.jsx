import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import JobOpening from "../components/JobOpening";

import Seo from "../components/Seo";

const JobOpenings = () => {
	return (
		<Layout>
			<Seo
				title="Get a career with Paymob - Check out our latest job opportunities"
				description="Get a career with Paymob. At Paymob we’re challenging the status quo of paytech, uplifiting businesses around the world to accept payments through their own smartphones..."
				canonical="https://paymobtech.com/careers/job_openings"
			/>

			<JobOpening />
		</Layout>
	);
};

export default JobOpenings;
