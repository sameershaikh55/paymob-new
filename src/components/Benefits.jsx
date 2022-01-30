import React from "react";
import check from "../assets/check.svg";

const Benefits = () => {
	const data1 = [
		"A ready-to-go solution, with the option for partial or full customisation",
		"A ready-to-go solution, with the option for partial or full customisation",
		"In line with the highest industry security standards",
		"Acquiring, processing and settlement services within the UK and EU",
		"Cloud fraud detection hosted on our Microsoft Azure servers",
		"Competitive transaction rates",
	];

	const data2 = [
		"A seamless payment acceptance experience",
		"Compatible with any device with NFC technology",
		"Accessible using your smartphones own network",
		"Supports TAP + PIN by Visa, Mastercard, American Express and MIR",
		"Settlement within several business days",
		"Accepts all EMV contactles cards and digital wallets (Apple Pay, Android Pay, Google Pay, Samsung Pay)",
	];

	const hr = {
		height: "3px",
		background: "rgba(255, 255, 255, 0.5)",
	};

	return (
		<div className="benefits_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row gx-5">
								<div className="col-12 col-md-6">
									<div className="ps-5">
										<h4 className="f18 text-white gotham my-4 fw-bold">
											Client benefits
										</h4>
									</div>

									<div>
										<ul className="list-unstyled">
											{data1.map((prev, i) => {
												return (
													<li
														key={i}
														className="mb-2 text-white gotham f16 mb-5 d-flex"
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
								<div className="col-12 col-md-6">
									<hr style={hr} className="mb-5 d-block d-md-none" />
									<div className="ps-5">
										<h4 className="f18 text-white gotham my-4 fw-bold">
											Merchant benefits
										</h4>
									</div>

									<div>
										<ul className="list-unstyled">
											{data2.map((prev, i) => {
												return (
													<li
														key={i}
														className="mb-2 text-white gotham f16 mb-5 d-flex"
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
		</div>
	);
};

export default Benefits;
