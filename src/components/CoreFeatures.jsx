import React from "react";
import check from "../assets/check.svg";
import feature from "../assets/feature.svg";

const CoreFeatures = () => {
	const data = [
		"Acquiring and processing in the U.K., EU and U.S.",
		{ img: feature },
		"1.5% RRP for european cards",
		"Pre EMV-certified technology",
		"Competitive international transaction rates",
		"Limit free transactions with Pin on Glass",
		"Branded digital onboarding flows",
		"24/7 technical support",
		"Real time reporting and dashboard access",
	];

	const hr = {
		height: "2px",
		background: "rgba(0, 0, 0, 0.4)",
	};

	return (
		<div className="coreFeatures_container mt-5 mt-lg-5 mb-4">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-10 col-lg-6">
									<hr style={hr} />
									<h1 className="gotham fw-bold color1">Core features</h1>
								</div>

								<div>
									<ul className="row mt-4 list-unstyled">
										{data.map((prev, i) => {
											return (
												<li
													key={i}
													className="col-12 col-lg-6 mb-2 color2 gotham f16 mb-4 d-flex align-items-center align-items-md-start"
												>
													<div>
														<img className="me-2" src={check} alt="" />
													</div>

													{(prev.img && (
														<div className="row">
															<div className="col-12">
																<img className="w-100" src={prev.img} alt="" />
															</div>
														</div>
													)) || <div className="ms-2">{prev}</div>}
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
	);
};

export default CoreFeatures;
