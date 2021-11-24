import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logoW from "../assets/logoW.svg";
import b3 from "../assets/brands/b3.png";
import { Link as LinkS } from "react-scroll";
import { Link, NavLink } from "react-router-dom";
import Newsletter from "./Newsletter";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// API URL TO POST
const url =
	"https://kostadu.us20.list-manage.com/subscribe/post?u=2cf9a83db0cea39edd3e3a07b&amp;id=45549b5fed";

const Footer = () => {
	const products = [
		{ t: "Product overview", l: "/productOverview" },
		{ t: "Android mobile SDK", l: "/androidSdk" },
		{ t: "SoftPOS mobile App", l: "/softPos" },
		{ t: "mPOS card reader", l: "/mposCard" },
		{ t: "Mini POS Terminal", l: "/miniPos" },
		{ t: "Smart POS Terminal", l: "/smartPos" },
		{ t: "Digital merchant onboarding", l: "/merchantOnboarding" },
		{ t: "Merchant dashboard", l: "/merchantDashboard" },
		{ t: "Admin portal", l: "/adminPortal" },
		{ t: "Payment gateway", l: "/paymentGatway" },
	];

	const cases = [
		{ t: "Industry sectors", l: "/industrySector" },
		{ t: "Friends of paymob", l: "/partners" },
		{ t: "Case studies", l: "/caseStudies" },
	];

	const dev = [
		{ t: "Developer tools", l: "/developers" },
		{ t: "App to app API", l: "/callback" },
		{ t: "In-house deployment", l: "/inHouseDeployement" },
	];

	const price = [{ t: "Basic fee setup", l: "/pricing" }];

	const about = [
		{ t: "About us", l: "/about" },
		{ t: "Paymob INsights", l: "/blogList" },
		{ t: "FAQs", l: "/faq" },
		{ t: "Press", l: "/press" },
		{ t: "Certifications & security", l: "/certifications" },
		{ t: "Careers", l: "/careers" },
		{ t: "Contact us", l: "/contact" },
	];

	return (
		<div className="footer_container text-white">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								<div className="col-12 col-lg-3 d-flex flex-column flex-md-row flex-lg-column justify-content-between">
									<div className="w-100">
										<h3 className="fw500">Ready to get started?</h3>
										<NavLink to="/contact">
											<button className="border-0 bg-transparent text-white">
												Contact sales <IoIosArrowForward />
											</button>
										</NavLink>
									</div>
									<div className="w-100 mt-5 mt-sm-0">
										<img src={logoW} alt="" />
										<p className="text-dark fw-bold f12 mt-2">
											<span className="bottomLineGrayLight pb-2">Paymob i</span>
											s a proud{" "}
											<img className="brandLogo ms-1" src={b3} alt="" /> backed
											company
										</p>
										<p className="secondText f8 color5">
											"Paymob" is a trading name of PAYMOB TECHNOLOGY LTD, an
											entity incorporated and registered under the law of
											England and Wales at the following address: 71-75 Shelton
											Street, Covent Garden, London, England, WC2H 9JQ, Company
											registration number 11965837. "Paymob" is authorised by
											the Financial Conduct Authority (FCA) in the UK under The
											Payment Services Regulations 2017 for issuing and/or
											acquiring of payment instruments (FRN: 917808).
										</p>
									</div>
								</div>
								<div className="col-12 col-lg-9 mt-lg-0 mt-5 mt-lg-0">
									<div className="footer_inner_container">
										<div className="single_cont">
											<div>
												<h6 className="fw600 borderTop pt-2">Products</h6>
												<ul className="list-unstyled mt-3">
													{products.map((prev, i) => {
														return (
															<>
																{(prev.el && (
																	<a
																		target="blank"
																		href={prev.el}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</a>
																)) || (
																	<Link
																		to={prev.l}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</Link>
																)}
															</>
														);
													})}
												</ul>
											</div>
										</div>
										<div className="single_cont">
											<h6 className="fw600 borderTop pt-2">Use cases</h6>
											<ul className="list-unstyled mt-3">
												{cases.map((prev, i) => {
													return (
														<>
															{(prev.l === "insight" && (
																<LinkS
																	to={prev.l}
																	offset={-120}
																	smooth={true}
																	duration={600}
																	spy={true}
																	className="text-decoration-none"
																>
																	<li
																		className="text-white mb-2 mb-md-3 f14"
																		key={i}
																	>
																		{prev.t}
																	</li>
																</LinkS>
															)) ||
																(prev.el && (
																	<a
																		target="blank"
																		href={prev.el}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</a>
																)) || (
																	<Link
																		to={prev.l}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</Link>
																)}
														</>
													);
												})}
											</ul>
										</div>
										<div className="single_cont">
											<h6 className="fw600 borderTop pt-2">Developers</h6>
											<ul className="list-unstyled mt-3">
												{dev.map((prev, i) => {
													return (
														<>
															{(prev.l === "insight" && (
																<LinkS
																	to={prev.l}
																	offset={-120}
																	smooth={true}
																	duration={600}
																	spy={true}
																	className="text-decoration-none"
																>
																	<li
																		className="text-white mb-2 mb-md-3 f14"
																		key={i}
																	>
																		{prev.t}
																	</li>
																</LinkS>
															)) ||
																(prev.el && (
																	<a
																		target="blank"
																		href={prev.el}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</a>
																)) || (
																	<Link
																		to={prev.l}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</Link>
																)}
														</>
													);
												})}
											</ul>
										</div>
										<div className="single_cont">
											<h6 className="fw600 borderTop pt-2">Pricing</h6>
											<ul className="list-unstyled mt-3">
												{price.map((prev, i) => {
													return (
														<>
															{(prev.l === "insight" && (
																<LinkS
																	to={prev.l}
																	offset={-120}
																	smooth={true}
																	duration={600}
																	spy={true}
																	className="text-decoration-none"
																>
																	<li
																		className="text-white mb-2 mb-md-3 f14"
																		key={i}
																	>
																		{prev.t}
																	</li>
																</LinkS>
															)) ||
																(prev.el && (
																	<a
																		target="blank"
																		href={prev.el}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</a>
																)) || (
																	<Link
																		to={prev.l}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</Link>
																)}
														</>
													);
												})}
											</ul>
										</div>
										<div className="single_cont">
											<h6 className="fw600 borderTop pt-2">About us</h6>
											<ul className="list-unstyled mt-3">
												{about.map((prev, i) => {
													return (
														<>
															{(prev.l === "insight" && (
																<LinkS
																	to={prev.l}
																	offset={-120}
																	smooth={true}
																	duration={600}
																	spy={true}
																	className="text-decoration-none"
																>
																	<li
																		className="text-white mb-2 mb-md-3 f14"
																		key={i}
																	>
																		{prev.t}
																	</li>
																</LinkS>
															)) ||
																(prev.el && (
																	<a
																		target="blank"
																		href={prev.el}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</a>
																)) || (
																	<Link
																		to={prev.l}
																		className="text-decoration-none"
																	>
																		<li
																			className="text-white mb-2 mb-md-3 f14"
																			key={i}
																		>
																			{prev.t}
																		</li>
																	</Link>
																)}
														</>
													);
												})}
												<li className="mt-3">
													<a
														className="text-white"
														target="blank"
														href="https://www.instagram.com/paymobtech/"
													>
														<FaInstagram className="h5" />
													</a>
													<a
														className="text-white"
														target="blank"
														href="https://www.linkedin.com/company/paymobtech"
													>
														<FaLinkedinIn className="ms-3 h5" />
													</a>
													<a
														className="text-white"
														target="blank"
														href="https://twitter.com/paymobtech"
													>
														<FaTwitter className="ms-3 h5" />
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="d-flex flex-column justify-content-start align-items-end mt-5 mt-md-0">
									<h6 className="f15">
										<span className="orangeC fw-bolder">Subscribe</span> to
										Paymob INsights, our weekly newsletter!
									</h6>

									{/* MAIL CHIMP START */}
									<MailchimpSubscribe
										url={url}
										render={({ subscribe, status, message }) => (
											<div>
												<Newsletter
													onSubmitted={(formData) => subscribe(formData)}
													status={status}
													message={message}
												/>
											</div>
										)}
									/>
									{/* MAIL CHIMP END */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
