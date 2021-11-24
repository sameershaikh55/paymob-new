import React from "react";
import check from "../assets/check.svg";

const GatewayDetails = () => {
	const data1 = [
		"Device configuration management",
		"Key management (support RKL)",
		"Technical monitoring",
		"Financial monitoring",
		"Application marketplace",
		"Merchants account",
	];

	const hr = {
		height: "2px",
		background: "rgba(0, 0, 0, 0.4)",
	};

	return (
		<div className="sdk_detail_container gateway mt-5 mt-md-0">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 mx-auto">
							<div className="row gx-5">
								<div className="ps-5">
									<div className="col-12 col-sm-10 col-md-5">
										<hr style={hr} />
									</div>
									<h4 className="f18 color1 gotham my-4 fw-bold">
										Main technical functions of the system
									</h4>
								</div>

								<div className="col-12 mt-4 mt-md-5">
									<ul className="row list-unstyled">
										{data1.map((prev, i) => {
											return (
												<li
													key={i}
													className="col-6 mb-2 color2 gotham f16 mb-5 d-flex"
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
	);
};

export default GatewayDetails;
