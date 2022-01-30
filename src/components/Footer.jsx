import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logoW from "../assets/logoW.svg";
import b3 from "../assets/brands/b3.png";
import { Link as LinkS } from "react-scroll";
import { Link, NavLink } from "react-router-dom";
import Newsletter from "./Newsletter";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// API URL TO POST
const url =
	"https://kostadu.us20.list-manage.com/subscribe/post?u=2cf9a83db0cea39edd3e3a07b&amp;id=45549b5fed";

const Footer = () => {
	const products = [
		{ t: "Product overview", l: "/productOverview" },
		{ t: "Android mobile SDK", l: "/androidSdk" },
		{ t: "SoftPOS mobile App", l: "/softPos" },
		{ t: "Merchant onboarding", l: "/merchantOnboarding" },
		{ t: "Dashboard", l: "/merchantDashboard" },
		{ t: "Admin portal", l: "/adminPortal" },
		{ t: "Payment gateway", l: "/paymentGatway" },
	];

	const cases = [
		{ t: "Industry sectors", l: "/industrySector" },
		{ t: "Channel Partner", l: "" },
		{ t: "Commerce vendors", l: "" },
		{ t: "Banking", l: "" },
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
		{ t: "Dapio INsights", l: "/blogList" },
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
											<span className="bottomLineGrayLight pb-2">Dapio i</span>s
											a proud <img className="brandLogo ms-1" src={b3} alt="" />
											backed company
										</p>
										<p className="secondText f8 color5">
											"Dapio" is a trading name of DAPIO TECHNOLOGY LTD, an
											entity incorporated and registered under the law of
											England and Wales at the following address: 71-75 Shelton
											Street, Covent Garden, London, England, WC2H 9JQ, Company
											registration number 11965837. "dapio" is authorised by the
											Financial Conduct Authority (FCA) in the UK under The
											Payment Services Regulations 2017 for issuing and/or
											acquiring of payment instruments (FRN: 917808).
										</p>
									</div>
								</div>
								<div className="col-12 col-lg-9 mt-lg-0 mt-5 mt-lg-0">
									<div className="footer_inner_container pt-3 d-block d-md-none">
										<Accordion className="mt-0">
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel1a-content"
												id="panel1a-header"
											>
												<Typography>
													<h5 className="text-white fw-bold gotham letterSpace mb-0">
														Products
													</h5>
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography>
													<ul className="list-unstyled">
														{products.map((item, i) => {
															return (
																<li key={i}>
																	<NavLink exact to={item.l}>
																		<button className="text-start text-white f18 border-0 gotham shadow-none bg-transparent f14 fw500">
																			{item.t}
																		</button>
																	</NavLink>
																</li>
															);
														})}
													</ul>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion className="mt-0">
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel2a-content"
												id="panel2a-header"
											>
												<Typography>
													<h5 className="text-white fw-bold gotham letterSpace mb-0">
														Use cases
													</h5>
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography>
													<ul className="list-unstyled">
														{cases.map((item, i) => {
															return (
																<li key={i}>
																	<NavLink exact to={item.l}>
																		<button className="text-start text-white f18 border-0 gotham shadow-none bg-transparent f14 fw500">
																			{item.t}
																		</button>
																	</NavLink>
																</li>
															);
														})}
													</ul>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion className="mt-0">
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel3a-content"
												id="panel3a-header"
											>
												<Typography>
													<h5 className="text-white fw-bold gotham letterSpace mb-0">
														Developers
													</h5>
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography>
													<ul className="list-unstyled">
														{dev.map((item, i) => {
															return (
																<li key={i}>
																	<NavLink exact to={item.l}>
																		<button className="text-start text-white f18 border-0 gotham shadow-none bg-transparent f14 fw500">
																			{item.t}
																		</button>
																	</NavLink>
																</li>
															);
														})}
													</ul>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion className="mt-0">
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel4a-content"
												id="panel4a-header"
											>
												<Typography>
													<h5 className="text-white fw-bold gotham letterSpace mb-0">
														Pricing
													</h5>
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography>
													<ul className="list-unstyled">
														{price.map((item, i) => {
															return (
																<li key={i}>
																	<NavLink exact to={item.l}>
																		<button className="text-start text-white f18 border-0 gotham shadow-none bg-transparent f14 fw500">
																			{item.t}
																		</button>
																	</NavLink>
																</li>
															);
														})}
													</ul>
												</Typography>
											</AccordionDetails>
										</Accordion>
										<Accordion className="mt-0">
											<AccordionSummary
												expandIcon={<ExpandMoreIcon />}
												aria-controls="panel5a-content"
												id="panel5a-header"
											>
												<Typography>
													<h5 className="text-white fw-bold gotham letterSpace mb-0">
														About us
													</h5>
												</Typography>
											</AccordionSummary>
											<AccordionDetails>
												<Typography>
													<ul className="list-unstyled">
														{about.map((item, i) => {
															return (
																<li key={i}>
																	<NavLink exact to={item.l}>
																		<button className="text-start text-white f18 border-0 gotham shadow-none bg-transparent f14 fw500">
																			{item.t}
																		</button>
																	</NavLink>
																</li>
															);
														})}
													</ul>
												</Typography>
											</AccordionDetails>
										</Accordion>
									</div>

									<div className="footer_inner_container d-none d-md-flex">
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

								<div className="d-flex flex-column justify-content-start align-items-center align-items-md-end mt-5 mt-md-0 w-100">
									<div className="mt-3 d-block d-md-none">
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
									</div>

									<div className="mt-3">
										<h6 className="f15">
											<span className="orangeC fw-bolder">Subscribe</span> to
											Dapio INsights, our weekly newsletter!
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
		</div>
	);
};

export default Footer;
