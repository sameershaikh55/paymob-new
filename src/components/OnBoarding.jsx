import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import onboarding from "../assets/gifs/Merchant onboarding GIF.gif";

const OnBoarding = () => {
	return (
		<div className="payment_interface_container onboarding_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-md-6">
									<div>
										<p className="orangeC gotham f18 mb-0 mb-md-2">
											Onboarding
										</p>
										<div className="row">
											<div className="col-12 col-md-10">
												<h1 className="color1 gotham fw700">
													Focus on your product while we focus on your back-end
													onboarding process
												</h1>
											</div>
										</div>
										<div className="row">
											<p className="col-12 col-md-10 lh39 color1 f18 crice fw600">
												Allowing you to provide payment acceptance to your
												merchant custmers from day one.
											</p>
										</div>
										<NavLink to="/contact">
											<button className="themeBtn bg-white gotham orangeC py-2 px-3 border-0 f18">
												Find out more <IoIosArrowForward />
											</button>
										</NavLink>
									</div>
								</div>
								<div className="col-md-6 mt-5 mt-md-0">
									<img className="w-100" src={onboarding} alt="onboarding" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OnBoarding;
