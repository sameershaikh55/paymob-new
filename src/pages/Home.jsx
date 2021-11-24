import React from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import Hero from "../components/Hero";
import Products from "../components/Products";
import WhyMob from "../components/WhyMob";
import Brands from "../components/Brands";
import FinancialService from "../components/FinancialService";
import SystemComponent from "../components/SystemComponent";
import Insights from "../components/Insights";

// IMPORT SEO
import Seo from "../components/Seo";

const Home = () => {
	return (
		<Layout>
			<Seo
				title="SoftPOS payment engine for business apps financial services | Paymob"
				description="Paymob provide a SoftPOS payment engine enabling any company to provide innovative financial services solutions to merchant customers. Turn any NFC enabled device into a contactless card reading terminal with our revolutionary SoftPOS payment SDK and white label app"
				canonical="https://paymobtech.com"
			/>
			<Hero />
			<FinancialService />
			<WhyMob />
			<Brands />
			<Products />
			<SystemComponent />
			<Insights />
		</Layout>
	);
};

export default Home;
