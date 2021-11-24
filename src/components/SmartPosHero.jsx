import React from "react";
import hero from "../assets/smartPos/hero.png";
import Smart from "../assets/brouchers/Smart POS Terminal.pdf";

const SmartPosHero = () => {
	return (
		<div className="hero_container smartPos mPos">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6">
									<h1 className="fw-bolder max_content">Smart POS Terminal</h1>
									<p className="orangeC gotham f18 mb-0 fw-bold mt-3">
										Paymob A90
									</p>
									<p className="mt-3 mt-md-4 fw-bold">
										A wireless smart POS terminal based on the Andriod 5.1
										operating system. The terminal has all necessary
										communication modules, such as GSM with 4G, Wi-Fi, as well
										as Bluetooth support. A90 is equipped with magnetic stripe
										card readers, smart cards, and a contactless reader.
									</p>
									<a href={Smart} download>
										<button className="py-2 px-3 border-0 f18 mt-2 mt-md-4">
											Download data sheet
										</button>
									</a>
								</div>
								<div className="col-12 col-md-6 mt-5 mt-md-0 mb-4 mb-md-0">
									<div className="row">
										<div className="col-11 col-sm-8 col-md-6 mx-auto">
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

export default SmartPosHero;
