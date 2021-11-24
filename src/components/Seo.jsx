import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ description, title, canonical }) => {
	const noFound = {
		title:
			"SoftPOS payment engine for business apps financial services | Paymob",
		description:
			"Paymob provide a SoftPOS payment engine enabling any company to provide innovative financial services solutions to merchant customers. Turn any NFC enabled device into a contactless card reading terminal with our revolutionary SoftPOS payment SDK and white label app",
	};

	const metaDescription = description || noFound.description;
	const metaTitle = title || noFound.title;

	return (
		<Helmet>
			<title>{metaTitle}</title>
			<meta property="og:title" content={metaTitle} />
			<meta name="description" content={metaDescription} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="" />
			<meta name="twitter:title" content={metaTitle} />
			<meta itemprop="name" content={metaTitle} />
			<meta itemprop="description" content={metaDescription} />
			<meta property="og:description" content={metaDescription} />
			<meta name="twitter:description" content={metaDescription} />
			<meta itemprop="description" content={metaDescription} />
			<meta property="og:image" content="" />
			<meta name="twitter:image" content="" />
			<meta itemprop="image" content="" />
			<meta property="og:url" content="https://paymobtech.com/" />
			<meta itemprop="url" content="https://paymobtech.com/" />
			{canonical && <link rel="canonical" href={canonical} />}
		</Helmet>
	);
};

export default Seo;
