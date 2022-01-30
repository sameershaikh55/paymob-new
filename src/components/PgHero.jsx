import React from "react";
import hero from "../assets/pGateway/hero.png";

const PgHero = () => {
	return (
		<div className="hero_container mPos pgHero mt-lg-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6 col-lg-5">
									<h1 className="fw-bolder text-white">Payment gateway</h1>
									<p className="orangeC gotham f18 mb-0 fw-bold mt-3">
										Securely accept card present payements
									</p>
									<p className="mt-3 mt-md-4 fw600 text-white">
										We act as a payment gateway enabling our clients, and their
										merchant customers to make purchases securely, whether thats
										through a POS terminal or SoftPOS application.
									</p>
								</div>
								<div className="col-11 col-sm-10 col-md-6 col-lg-7 mt-4 mt-md-0 mx-auto">
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

export default PgHero;
