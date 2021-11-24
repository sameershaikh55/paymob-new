import React from "react";
import i1 from "../assets/press/i1.png";

const AboutPaymob = () => {
	return (
		<div className="">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6 mt-5 mt-md-0 mb-3 mb-md-0">
									<h2 className="color1 gotham fw600 mb-4">About Paymob</h2>
									<p className="color2 crice fw600 lh27 letterSpace">
										Paymob are much more than just a payment gateway, we partner
										with fintechs, vendors and banking enterprise looking to
										elevate their own financial offering for their own business
										and individual customers. Helping merchants to accept
										frontline payments without the behind-the-scenes
										difficulties of continual development, maintenance and
										rigorous certification processes. We take care of the
										end-to-end pay-tech infrastructure behind the face of our
										partners own unique brand identity.
									</p>
									<p className="color2 crice fw600 lh27 letterSpace">
										We are on a mission to challenge the status quo of paytech
										culture to show there’s another way to do things. Simply
										put, our payment acceptance infrastructure is faster and
										more affordable, unlocking paytech freedom for all.
									</p>
								</div>
								<div className="col-12 col-md-6 mb-5 mb-md-0">
									<img className="w-100" src={i1} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPaymob;
