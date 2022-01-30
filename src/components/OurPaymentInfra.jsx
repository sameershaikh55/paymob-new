import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const OurPaymentInfra = ({ md, adminP, pg }) => {
	var data;
	if (md) {
		data = [
			{
				t: "Digital merchant onboarding",
				l: "/merchantOnboarding",
			},
			{
				t: "Payment gateway",
				l: "/paymentGatway",
			},
			{
				t: "Admin portal",
				l: "/adminPortal",
			},
			{
				t: "Certifications",
				l: "/certifications",
			},
		];
	} else if (adminP) {
		data = [
			{
				t: "Merchant dashboard",
				l: "/merchantDashboard",
			},
			{
				t: "Payment gateway",
				l: "/paymentGatway",
			},
			{
				t: "Digital merchant onboarding",
				l: "/merchantOnboarding",
			},
			{
				t: "Certifications",
				l: "/certifications",
			},
		];
	} else if (pg) {
		data = [
			{
				t: "Merchant dashboard",
				l: "/merchantDashboard",
			},
			{
				t: "Admin portal",
				l: "/adminPortal",
			},
			{
				t: "Digital merchant onboarding",
				l: "/merchantOnboarding",
			},
			{
				t: "Certifications",
				l: "/certifications",
			},
		];
	} else {
		data = [
			{
				t: "Merchant dashboard",
				l: "/merchantDashboard",
			},
			{
				t: "Payment gateway",
				l: "/paymentGatway",
			},
			{
				t: "Admin portal",
				l: "/adminPortal",
			},
			{
				t: "Certifications",
				l: "/certifications",
			},
		];
	}

	return (
		<div className="ourPaymentInfra_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6 col-lg-5">
									<h1 className="text-white gotham fw600">
										Our payment <br /> infrastructure.
									</h1>
								</div>
								<div className="col-12 col-md-6 col-lg-7">
									<div className="row">
										{data.map((prev, i) => {
											return (
												<div key={i} className="col-6 mt-4">
													<div className="cards_inner ps-2">
														<h5 className="gotham f20 text-white fw700 color7">
															{prev.t}
														</h5>
														<Link to={prev.l}>
															<button className="f14 border-0 bg-transparent orangeC fw600 gotham">
																Learn more <IoIosArrowForward />
															</button>
														</Link>
													</div>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurPaymentInfra;
