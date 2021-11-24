import React from "react";

// IMPORT
import hero from "../assets/gifs/Android SDK GIF.gif";

const HeroSdk = () => {
	return (
		<div>
			<div className="hero_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								<div className="row align-items-center">
									<div className="col-12 col-md-6">
										<h1 className="fw-bolder">Android SDK</h1>
										<p className="orangeC gotham f18 mb-0 fw-bold">
											Ready to go software development kit
										</p>
										<p className="mt-3 mt-md-4 fw-bold">
											Enable your own SoftPOS solutions within your new or
											exisiting app, for speedy card present payments.
										</p>
										<p className="mt-3 mt-md-4 fw-bold">
											Our Software Development Kit (SDK) is designed as a ‘plug
											in and go’ for your current digital ecosystem. Perfect for
											those looking to enable in-app payment acceptance for
											their own enterprise, clients or customers.
										</p>
									</div>
									<div className="col-12 col-md-6 mt-1 mt-md-0 mb-4 mb-md-0">
										<div className="row">
											<div className="col-11 col-sm-8 col-md-10 mx-auto text-center">
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
		</div>
	);
};

export default HeroSdk;
