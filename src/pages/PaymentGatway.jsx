import React from "react";
import check from "../assets/check.svg";

// IMPORTING COMPONENTS
import Layout from "../layout";
import PgHero from "../components/PgHero";
import GatewayDetails from "../components/GatewayDetails";
import OurPaymentInfra from "../components/OurPaymentInfra";

// IMPORT SEO
import Seo from "../components/Seo";

const PaymentGatway = () => {
	const data1 = [
		"Full list of transactions including cash payment withdrawl per terminal",
		"Variety of payment methods; Card | Cash | E-wallet",
		"Sale of banking products",
		"Statistics | Analytics | Loyalty program | Personal offers",
	];

	const hr = {
		height: "2px",
		background: "rgba(0, 0, 0, 0.4)",
	};

	return (
		<Layout>
			<Seo
				title="Payment gateway - Securely accept card present payments with Paymob"
				description="How to use the Payment gateway - Securely accept card present payments with Paymob"
				canonical="https://paymobtech.com/paymentGatway"
			/>

			<PgHero />
			<GatewayDetails />

			{/* BUSINESS FEATURE START */}
			<div className="business_feature">
				<div className="header_containerSize">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 mx-auto">
								<div className="row gx-5">
									<div className="ps-md-5">
										<div className="col-12 col-sm-10 col-md-5 ms-auto">
											<hr style={hr} className="d-none d-md-block" />
										</div>
										<h4 className="text-md-end f20 color1 gotham my-4 fw-bold">
											Business features
										</h4>
									</div>

									<div className="col-12 col-md-11 col-lg-9 ms-auto mt-4 mt-md-5">
										<ul className="row list-unstyled">
											{data1.map((prev, i) => {
												return (
													<li
														key={i}
														className="col-12 col-sm-6 mb-2 color2 gotham f20 mb-5 d-flex"
													>
														<div>
															<img className="me-2" src={check} alt="" />
														</div>
														<div className="ms-2">{prev}</div>
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* BUSINESS FEATURE END */}

			<OurPaymentInfra pg />
		</Layout>
	);
};

export default PaymentGatway;
