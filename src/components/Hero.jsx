import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
// import hero from "../assets/gifs/Header 'Tap to Phone' GIF.gif";
import hero from "../assets/hero.png";

const Hero = () => {
	return (
		<div className="hero_container main_hero">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6 align-self-center">
									<h1 className="fw-bolder">
										A payment engine for business apps.
									</h1>
									<p className="mt-3 mt-md-4 fw-bold text-dark">
										We are bringing a new wave of payment acceptance to business
										apps, commerce solution vendors and banking enterprise.
										Leverage Dapios Tap to Phone solution to offer your own
										cutting edge financial services.
									</p>
									<Link to="/contact">
										<button className="py-2 px-3 border-0 f18 mt-2 mt-md-4 fw-bold">
											Contact sales <IoIosArrowForward />
										</button>
									</Link>
								</div>
								<div className="align-self-end col-12 col-md-6 mt-5 mt-md-0 mb-4 mb-md-0">
									<div className="row">
										<div className="col-12 col-sm-10 col-md-12 mx-auto">
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

export default Hero;
