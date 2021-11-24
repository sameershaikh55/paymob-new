import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import HeroCerti from "../components/HeroCerti";
import CertificationDetail from "../components/CertificationDetail";
import SdkBrands from "../components/SdkBrands";
import SecurityCertificate from "../components/SecurityCertificate";

// IMPORT SEO
import Seo from "../components/Seo";

const Certifications = () => {
	return (
		<Layout>
			<Seo
				title="Paymob use the highest industry security standards and are PCI-DSS Level 1 certified and FCA Approved."
				description="At Paymob we have built our technology around trust and safety, holding ourselves to the highest industry security standards. We are PCI-DSS Level 1 certified and FCA Approved."
				canonical="https://paymobtech.com/certifications"
			/>

			<HeroCerti />
			<CertificationDetail />
			<div className="my-5">
				<SdkBrands />
			</div>
			<SecurityCertificate />
		</Layout>
	);
};

export default Certifications;
