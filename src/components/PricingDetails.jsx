import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

const PricingDetails = () => {
	const data = [
		{ t: "SUBSCRIPTION", d: "£2 per month" },
		{ t: "PERCENTAGE", d: "25pbs per transaction" },
		{ t: "HYBRID", d: "£1 per month + 15bps" },
		{ t: "ENTERPRISE", d: "Bespoke" },
	];

	const hr = {
		height: "2px",
		background: "rgba(0, 0, 0, 0.4)",
	};

	return (
		<div className="pricing_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								{data.map((prev, i) => {
									return (
										<div className="col-6 col-md-3 mt-5">
											<h6 className="f14 color1 gotham">{prev.t}</h6>
											<hr className="mt-2 mb-1" style={hr} />
											<h3 className="orangeC gotham fw-bold">{prev.d}</h3>
										</div>
									);
								})}

								<div className="col-12 text-center">
									<NavLink to="/contact">
										<button className="themeBtn bg-white py-2 px-3 border-0 f18 fw-bold gotham mt-2 mt-md-3">
											Contact sales <IoIosArrowForward />
										</button>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PricingDetails;
