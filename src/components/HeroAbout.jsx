import React from "react";
import hero from "../assets/hero_about.png";

const HeroAbout = () => {
	return (
		<div className="hero_container about_us h-100">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6">
									<h1 className="fw-bolder">About us.</h1>
									<div className="row">
										<div className="col-10 col-md-9">
											<p className="orangeC gotham f18 mb-0 fw-bold">
												We provide cashless payment solutions for business apps
											</p>
											<p className="mt-3 mt-md-3 fw-bold">
												Paymob makes it easy for businesses to accept cashless
												payments quickly and securely in store, over the phone,
												or on the move anywhere in the world.
											</p>
										</div>
									</div>
								</div>
								<div className="col-10 col-md-5 mx-auto mt-3 mt-md-0 mb-5 mb-md-0 d-none d-md-block">
									<div className="row">
										<div className="col-12 col-sm-8 col-md-12 mx-auto">
											{/* <img className="w-100" src={hero} alt="" /> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<img className="mt-4 d-block d-md-none hero_img" src={hero} alt="" />
			</div>
		</div>
	);
};

export default HeroAbout;
