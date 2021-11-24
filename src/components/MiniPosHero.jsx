import React from "react";
import hero from "../assets/miniPos/hero.png";
import Mini from "../assets/brouchers/Mini POS Terminal.pdf";

const MiniPosHero = () => {
	return (
		<div className="hero_container mPos">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6">
									<h1 className="fw-bolder">Mini POS Terminal</h1>
									<p className="orangeC gotham f18 mb-0 fw-bold">Paymob A80</p>
									<p className="col-12 col-sm-11 col-md-10 col-lg-9 mt-3 mt-md-2 fw-bold">
										Ergonomically designed, slim and handy 5” High-definition
										touching screen Quad-core high perfromance secure CPU
										Quicker code scanning for 1D/2D QR code.
									</p>
									<a href={Mini} download>
										<button className="py-2 px-3 border-0 f18 mt-2 mt-md-4">
											Download data sheet
										</button>
									</a>
								</div>
								<div className="col-8 col-md-6 mt-3 mt-md-0 mb-4 mb-md-0 mx-auto">
									<div className="row">
										<div className="col-9 col-sm-6 col-md-7 col-lg-6 mx-auto">
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

export default MiniPosHero;
