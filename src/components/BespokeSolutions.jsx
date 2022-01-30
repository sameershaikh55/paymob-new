import React from "react";
import bespokeSolutions from "../assets/beskpok/beskpokeSolution.svg";

const BespokeSolutions = () => {
	return (
		<div className="bespoke_solution_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-12 col-md-6">
									<p className="orangeC gotham f18 mb-0 mb-md-2">
										Bespoke solutions
									</p>
									<h1 className="text-white gotham fw700 f34">
										Powered by us, <br className="d-none d-md-block" /> looks
										like you
									</h1>
									<div className="col-12 col-lg-8">
										<p className="underHead text-white f16 crice mt-1 mt-md-5">
											Our SoftPOS solution is entirely bespoke, available as a
											white label application for Android smartphones. Powered
											by us, but with the look and feel of your own branding,
										</p>
										<p className="underHead text-white f16 crice">
											Powered by us, but with the look and feel of your own
											branding,
										</p>
									</div>
								</div>
								<div className="img_container col-12 col-md-6 mx-auto">
									<img className="w-100" src={bespokeSolutions} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BespokeSolutions;
