import React from "react";
import hero from "../assets/gifs/SoftPOS app GIF.gif";

const HeroSoft = () => {
	return (
		<div className="hero_container soft">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6">
									<h1 className="fw-bolder">SoftPOS white label app</h1>
									<p className="orangeC gotham f18 mb-0 fw-bold mt-3">
										Paymob SoftPOS
									</p>
									<p className="mt-3 fw-bold">
										We provide our white label partners with the ability to
										re-brand our Tap-On-Phone app. Leveraging the solution as
										part of your own offering, reflective of your own unique
										brand identity. This design flow is applied across all
										internal merchant tools, and consumer facing payment pages.
									</p>
								</div>
								<div className="col-12 col-md-6 mt-3 mt-md-0 mb-4 mb-md-0 text-center">
									<div className="row">
										<div className="col-12 col-sm-8 col-md-12 mx-auto">
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

export default HeroSoft;
