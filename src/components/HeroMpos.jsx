import React from "react";
import hero from "../assets/mPosSolutions/hero.png";
import mPOS from "../assets/brouchers/mPOS Card Reader.pdf";

const HeroMpos = () => {
	return (
		<div className="hero_container mPos">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6">
									<h1 className="fw-bolder">mPOS Card Reader</h1>
									<p className="orangeC gotham f18 mb-0 fw-bold">Aisino VM30</p>
									<p className="mt-3 mt-md-2 fw-bold">
										A pocket sized lightweight card reader, perfect for the ‘on
										the go’ business. This can be paired with any smart device
										via bluetooth being converted into a mobile payment
										solution.
									</p>
									<a href={mPOS} download>
										<button className="py-2 px-3 border-0 f18 mt-2 mt-md-4">
											Download data sheet
										</button>
									</a>
								</div>
								<div className="col-8 col-md-6 mt-3 mt-md-0 mb-4 mb-md-0 mx-auto">
									<div className="row">
										<div className="col-12 col-sm-10 col-lg-8 mx-auto">
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

export default HeroMpos;
