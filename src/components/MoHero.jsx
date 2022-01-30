import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import hero from "../assets/MOnboarding/Merchant onboarding.png";

const MoHero = () => {
	return (
		<div className="hero_container mPos merchant_onboarding">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row gy-4 align-items-center">
								<div className="col-12 col-md-6">
									<h1 className="text-center text-md-start fw-bolder text-white">
										Digital merchant onboarding
									</h1>
									<p className="text-center text-md-start text-white mt-3 mt-md-4 fw500">
										Seamlessly onboard your merchants with our ready-made KYC
										flow, Paymob take care of the end-to-end onboarding process
										so you can focus on your own financial offering.
									</p>
									<div className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
										<a
											target="blank"
											href="https://airtable.com/shrL21Fd1xLND39mK"
										>
											<button className="py-2 px-3 bg-transparent text-white border border-1 border-white f18 mt-2 mt-md-4">
												Get started now
											</button>
										</a>
										<Link to="/contact">
											<button className="ms-0 ms-md-3 py-2 px-3 bg-transparent text-white border border-1 border-white f18 mt-2 mt-md-4">
												Contact sales <IoIosArrowForward />
											</button>
										</Link>
									</div>
								</div>
								<div className="col-12 col-md-6">
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

export default MoHero;
