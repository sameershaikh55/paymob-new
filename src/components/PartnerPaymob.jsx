import React from "react";

// IMPORTS
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import i1 from "../assets/partnerPaymob/i1.svg";
import i2 from "../assets/partnerPaymob/i2.svg";
import i3 from "../assets/partnerPaymob/i3.svg";

const PartnerPaymob = () => {
	const data = [
		{
			i: i1,
			t: "End-to-end support",
			d: "As a Paymob partner, you will receive second line support and digital onboarding for your clients via our dedicated Paymob portal.",
		},
		{
			i: i2,
			t: "Customisation",
			d: "Ability to customise your SoftPOS mobile application within our ready-to-go framework.",
		},
		{
			i: i3,
			t: "Certified, Safe & Secure",
			d: "Our partners can feel confident that we ensure the highest level of security, in line with industry standards.",
		},
	];
	return (
		<div className="partner_paymob_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div>
								<div className="row">
									<div className="col-12 col-md-10 col-lg-6">
										<h1 className="color1 gotham fw700">
											Why partner with Paymob?
										</h1>
									</div>
								</div>
								<div className="row">
									<p className="col-12 col-md-10 col-lg-5 underHead color1 f18 crice fw600">
										Enhance your financial service offering and ennable your
										customers to accept payments through our payment gateway and
										SoftPOS solutions.
									</p>
								</div>
							</div>

							<div className="inner_paymob row">
								{data.map((prev, i) => {
									return (
										<div
											key={i}
											className="col-12 col-sm-6 col-md-4 partner_card mt-5 mt-md-0 text-center text-sm-start"
										>
											<img src={prev.i} alt="" />
											<h6 className="fw600 mt-3 mb-2 my-md-2 gotham f20">
												{prev.t}
											</h6>
											<p className="col-12 col-md-10 col-lg-9 crice fw600 mb-1">
												{prev.d}
											</p>
											{i === 2 && (
												<NavLink to="/certifications">
													<button className="themeBtn bg-white gotham orangeC py-2 px-3 border-0 f18">
														Find out more <IoIosArrowForward />
													</button>
												</NavLink>
											)}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PartnerPaymob;
