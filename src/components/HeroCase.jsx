import React from "react";
import caseStudy from "../assets/softpos/caseStudy.svg";
import check from "../assets/check.svg";

const HeroCase = () => {
	return (
		<div className="caseStudiesHero">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-lg-6">
									<p className="orangeC fw-bold gotham f18 mb-0 mb-md-2">
										Case studies
									</p>
									<h1 className="f64 gotham color1 fw-bolder">
										ZmBIZI uses Paymob to power their Tap to Phone app
									</h1>
									<p className="color2 f16 lh27 crice letterSpace mt-3 mt-md-4 fw-bold">
										Client ZmBIZI, a smartphone technology provider integrated
										our white label SoftPOS solution within their Z1 and Z2
										Smartphones for their merchant customers across the U.S.
									</p>
									<hr />

									<h6 className="f18 gotham my-4 fw-bold">Products</h6>
									<ul className="list-unstyled">
										<li className="mb-2 color2 gotham f16">
											<img className="me-2" src={check} alt="" /> White label
											SoftPOS app
										</li>
										<li className="mb-2 color2 gotham f16">
											<img className="me-2" src={check} alt="" /> Admin portal
										</li>
										<li className="mb-2 color2 gotham f16">
											<img className="me-2" src={check} alt="" /> Merchant
											dashboard
										</li>
										<li className="mb-2 color2 gotham f16">
											<img className="me-2" src={check} alt="" /> Branded
											merchant onboarding flow
										</li>
									</ul>
								</div>
								<div className="col-12 col-sm-10 col-lg-6 mt-3 mt-lg-0 mb-4 mb-lg-0 rightSide text-center mx-auto">
									<img className="w-100" src={caseStudy} alt="caseStudy" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroCase;
