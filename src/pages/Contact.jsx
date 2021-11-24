import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import ContactBody from "../components/ContactBody";

// IMPORT SEO
import Seo from "../components/Seo";

const Contact = () => {
	return (
		<Layout>
			<Seo
				title="Contact Details for Paymob - The Industry leader in contactless payment solutions"
				description="Get in touch with Paymob - Contact Details for Paymob - The Fintech Industry leader in contactless payment solutions"
				canonical="https://paymobtech.com/contact"
			/>

			<ContactBody />
		</Layout>
	);
};

export default Contact;
