import React from "react";
import hero from "../assets/MDashboard/hero.svg";

const MdHero = () => {
	return (
		<div className="hero_container mPos">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6 col-lg-5">
									<h1 className="fw-bolder">Merchant dashboard</h1>
									<p className="mt-3 mt-md-4 fw-bold">
										Allow your merchant customers to keep track of their
										payments with our personalised merchant dashboard.
									</p>
								</div>
								<div className="col-12 col-md-6 col-lg-7 mt-4 mt-md-0 mb-4 mb-md-0">
									<img className="w-100" src={hero} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MdHero;
