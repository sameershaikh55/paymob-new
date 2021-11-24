import React from "react";

// IMPORTS
import i1 from "../assets/partners/i1.png";
import i2 from "../assets/partners/i2.png";
import i3 from "../assets/partners/i3.png";

const PartnerBody = () => {
	return (
		<div className="industryBody_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 px-0 px-md-2">
									<div className="row align-items-center">
										<div className="col-12 col-md-6 px-0">
											<img className="w-100" src={i1} alt="" />
										</div>
										<div className="col-12 col-md-6 ps-3 ps-md-5 my-4 my-md-0">
											<h2 className="color1 gotham fw600 mb-2 mb-md-4">
												Channel partners.
											</h2>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Expand your paytech offering.
											</h4>
											<p className="crice fw-bold f16 color2">
												Diversify your current solutions with an additonal Tap
												to Phone alternative for your merchant clients.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Launch your own app.
											</h4>
											<p className="crice fw-bold f16 color2">
												Become a stand alone Tap to Phone app! Join forces with
												Paymob to launch your own SoftPOS application for small
												business customers.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Your own unique branding.
											</h4>
											<p className="crice fw-bold f16 color2">
												Your app, your own branding, we simply work behind the
												scenes powering and empowering your technology.
											</p>
										</div>
									</div>
								</div>

								<div className="col-12 px-0 px-md-2">
									<div className="row align-items-center">
										<div className="col-12 col-md-6 ps-3 ps-md-5 my-4 my-md-0 order-1 order-md-0">
											<h2 className="color1 gotham fw600 mb-2 mb-md-4">
												Commerce solution vendors.
											</h2>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												The future of customer ordering.
											</h4>
											<p className="crice fw-bold f16 color2">
												Invigirate your exisiting merchant customers by reducing
												their queue times, increase sales and elevate their own
												end-customer experience.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Cutting edge frontline payments.
											</h4>
											<p className="crice fw-bold f16 color2">
												Our SDK can be easily integrated into existing
												applications, POS terminals for restaurants, bars, taxis
												and vending machines.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Reduced upfront fees.
											</h4>
											<p className="crice fw-bold f16 color2">
												Our technology exists in the digital space, which means
												no external hardware, impliment our SDK into your own
												terminals, or develop your own white label app that
												lives inside a smartphone.
											</p>
										</div>
										<div className="col-12 col-md-6 px-0">
											<img className="w-100" src={i2} alt="" />
										</div>
									</div>
								</div>

								<div className="col-12 px-0 px-md-2">
									<div className="row align-items-center">
										<div className="col-12 col-md-6 px-0">
											<img className="w-100" src={i3} alt="" />
										</div>
										<div className="col-12 col-md-6 ps-3 ps-md-5 my-4 my-md-0">
											<h2 className="color1 gotham fw600 mb-2 mb-md-4">
												Banking institutions.
											</h2>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												SoftPOS SDK for banking hardware.
											</h4>
											<p className="crice fw-bold f16 color2">
												We offer both an SDK for your existing hardware, or
												pre-integrated POS terminals for banking institutions.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												White label SoftPOS for business customers.
											</h4>
											<p className="crice fw-bold f16 color2">
												Deliver a fully certified, bespoke SoftPOS (Tap to
												Phone) app to your business customers.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Flexible pricing policy.
											</h4>
											<p className="crice fw-bold f16 color2">
												An end-to-end tailored package with flexible fees.
											</p>
										</div>
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

export default PartnerBody;
