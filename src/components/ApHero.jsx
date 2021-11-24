import React from "react";
import hero from "../assets/adminPortal/hero.png";

const ApHero = () => {
	return (
		<div className="hero_container mPos mt-lg-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6 col-lg-5">
									<h1 className="fw-bolder">Admin portal</h1>
									<p className="mt-3 mt-md-4 fw-bold">
										The all-in-one admin portal for SoftPOS white label clients.
										Keep a finger on the pulse of your application, track
										customer sales, usage and generate reports based your
										solutions activity in real time.
									</p>
								</div>
								<div className="col-11 col-sm-10 col-md-6 col-lg-7 mt-4 mt-md-0 mb-4 mb-md-0">
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

export default ApHero;
