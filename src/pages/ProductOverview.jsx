import React from "react";

// IMPORTS
import contentIcon from "../assets/productOverview/contentIcon.svg";

// IMPORTING COMPONENTS
import Layout from "../layout";
import ProductHero from "../components/ProductHero";
import BrandPartners from "../components/BrandsPartner";
import PaymentInterface from "../components/PaymentInterface";
import PartnerPaymob from "../components/PartnerPaymob";
import NewFeature from "../components/NewFeature";
import { IoIosArrowForward } from "react-icons/io";
import ExploreAvail from "../components/ExploreAvail";
import { Link } from "react-router-dom";

// IMPORT SEO
import Seo from "../components/Seo";

const ProductOverview = () => {
	return (
		<Layout>
			<Seo
				title="Paymob Products exist to help other businesses offer their own financial services"
				description="Paymob exist to help other businesses offer their own financial services. We have built several packages to suit the individual needs of our Paymob partners from ready-to-go solutions to a bespoke white labeled application."
				canonical="https://paymobtech.com/productOverview"
			/>

			<ProductHero />
			<BrandPartners />
			<PaymentInterface />
			<PartnerPaymob />
			<NewFeature />

			{/* PAGE TEXT START */}
			<div className="productView_content py-4">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="d-flex flex-column align-items-center col-11 col-lg-12 mx-auto">
								<img src={contentIcon} alt="" />
								<div className="line my-3 me-2 d-none d-md-block"></div>
								<p className="col-12 col-md-10 col-lg-8 gotham f20 lh39 text-white text-center mb-1 my-2 my-md-1">
									With the ZmBIZI Smartphone integrated with the Paymob SoftPOS
									we are now able to create the next generation of mobile
									merchants who are doing
									<br />
									‘business on the go’.
								</p>
								<h6 className="text-white f14 lh39 fw-light gotham mt-3 mb-4 mt-md-0 mb-md-0">
									Alpesh Patel, Co Founder of ZmBIZI
								</h6>
								<Link to="/caseStudies">
									<button className="gotham f14 border-0 bg-transparent orangeC fw600">
										Case study <IoIosArrowForward />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* PAGE TEXT END */}

			<ExploreAvail />

			{/* PAGE TEXT END */}
			<div className="softPos_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-10 col-md-3 mx-auto mx-md-0 ms-md-auto">
								<div className="d-flex flex-column justify-content-center justify-content-md-end align-items-center align-items-md-end">
									<h1 className="text-center text-md-end gotham fw-bold">
										Dapio <br /> SoftPOS demo
									</h1>
									<button className="gotham px-4 mt-md-4">
										Request demo <IoIosArrowForward />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* PAGE TEXT END */}
		</Layout>
	);
};

export default ProductOverview;
