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
									<h1 className="text-center text-md-start fw-bolder">
										Merchant dashboard
									</h1>
									<p className="text-center text-md-start mt-3 mt-md-4 fw-bold text-dark">
										Allow your merchant customers to keep track of their
										payments with our personalised merchant dashboard.
									</p>
								</div>
								<div className="col-12 col-md-6 col-lg-7 mt-4 mt-md-0 mb-4 mb-md-0">
									<div className="row">
										<div className="col-12 col-md-10 mx-auto">
											<img className="w-100" src={hero} alt="" />
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

export default MdHero;
