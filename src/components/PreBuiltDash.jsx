import React from "react";
import preBuilt from "../assets/gifs/Merchant portal design GIF.gif";
import { IoIosArrowForward } from "react-icons/io";

// IMPORTS FOR ADMIN PORTAL PAGE
import preBuiltA from "../assets/adminPortal/prebuilt.png";
import { NavLink } from "react-router-dom";

const PreBuiltDash = ({ adminP }) => {
	return (
		<div className="pre_built_dashboard_cont">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div
								className={`row ${
									(adminP && "align-items-start") || "align-items-center"
								}`}
							>
								<div className="col-12 col-lg-7 ps-2 ps-lg-0 order-1 order-lg-0 mt-4 mt-lg-0">
									{(adminP && (
										<img className="w-100" src={preBuiltA} alt="preBuilt" />
									)) || <img className="w-100" src={preBuilt} alt="preBuilt" />}
								</div>
								<div className="col-12 col-lg-5">
									{(adminP && (
										<div>
											<p className="orangeC gotham f20 mb-0 mb-md-2">
												Pre-built client tools
											</p>
											<div className="row">
												<div className="col-12">
													<h1 className="col-12 col-md-11 color1 f34 gotham fw700">
														The all-in-one portal for our clients
													</h1>
												</div>
											</div>
											<div className="row mt-4">
												<p className="lh27 color1 f18 crice fw600">
													Key features include tracking top performing
													terminals, business customer tranaction history, and
													insights into each payment at your fingertips.
												</p>
											</div>
											<NavLink to="/contact">
												<button className="themeBtn bg-white gotham orangeC py-2 px-3 border-0 f18">
													Find out more <IoIosArrowForward />
												</button>
											</NavLink>
										</div>
									)) || (
										<div>
											<p className="orangeC gotham f20 mb-0 mb-md-2">
												Pre-built dashboard
											</p>
											<div className="row">
												<div className="col-12">
													<h1 className="col-12 col-md-11 color1 f34 gotham fw700 lh71">
														Merchant tools under one digital roof
													</h1>
												</div>
											</div>
											<div className="row">
												<p className="lh27 color1 f18 crice fw600 mt-2">
													Provide an overview of transaction history, product
													sales, data reports and beyond to your merchant
													customers as part of our Tap to Phone while label app,
													and SDK app integration.
												</p>
												<p className="lh27 color1 f18 crice fw600 mt-5">
													Build your own merchant dashboard with our addional
													developer friendly API functionality for an entirely
													bespoke end-to-end solution.
												</p>
											</div>
											<NavLink to="/contact">
												<button className="themeBtn bg-white gotham orangeC py-2 px-3 border-0 f18">
													Find out more <IoIosArrowForward />
												</button>
											</NavLink>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PreBuiltDash;
