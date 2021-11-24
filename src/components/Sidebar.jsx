import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			// onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer"
		>
			<div className="innerSidebar container-fluid">
				<div className="row">
					<div className="col-12 mx-auto">
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
							>
								<Typography>
									<h5 className="orangeC fw-bold gotham letterSpace mb-0">
										Products
									</h5>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									<div className="row">
										<div className="col-6">
											<NavLink exact to="/productOverview">
												<button className="color1 f20 border-0 gotham shadow-none bg-transparent f14">
													Overview <IoIosArrowForward />
												</button>
											</NavLink>
										</div>
										<div className="col-6">
											<NavLink exact to="/contact">
												<button className="color1 f20 border-0 gotham shadow-none bg-transparent f14">
													Contact <IoIosArrowForward />
												</button>
											</NavLink>
										</div>
									</div>

									<div className="row mt-5">
										<div className="col-6">
											<h6 className="bottomHead mb-3 f14 gotham fw-bold">
												PAYMENT TOOLS
											</h6>
										</div>
										<div className="col-6">
											<h6 className="bottomHead mb-3 f14 gotham fw-bold">
												SYSTEM COMPONENETS
											</h6>
										</div>

										<div className="col-6 mt-2">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/androidSdk"
														className="color1 text-decoration-none gotham"
													>
														Android mobile SDK <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/softPos"
														className="color1 text-decoration-none gotham"
													>
														SoftPOS app <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/mposCard"
														className="color1 text-decoration-none gotham"
													>
														mPOS card reader <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/miniPos"
														className="color1 text-decoration-none gotham"
													>
														Mini POS terminal <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/smartPos"
														className="color1 text-decoration-none gotham"
													>
														Smart POS terminal <IoIosArrowForward />
													</NavLink>
												</li>
											</ul>
										</div>
										<div className="col-6 mt-2">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/merchantOnboarding"
														className="color1 text-decoration-none gotham"
													>
														Merchent onboarding <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3 color1">
													<NavLink
														to="/adminPortal"
														className="color1 text-decoration-none gotham"
													>
														Admin portal <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3 color1">
													<NavLink
														to="/merchantDashboard"
														className="color1 text-decoration-none gotham"
													>
														Merchant & client dashboard <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3 color1">
													<NavLink
														to="/paymentGatway"
														className="color1 text-decoration-none gotham"
													>
														Payment gateway <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3 color1">
													<NavLink
														to="/certifications"
														className="color1 text-decoration-none gotham"
													>
														Certifications <IoIosArrowForward />
													</NavLink>
												</li>
											</ul>
										</div>
									</div>
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography>
									<h5 className="orangeC fw-bold gotham letterSpace mb-0">
										Use Cases
									</h5>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									<div className="row">
										<div className="col-6">
											<h6 className="bottomHead mb-3 f14 gotham fw-bold">
												INDUSTRY SECTORS
											</h6>
										</div>
										<div className="col-6">
											<h6 className="bottomHead mb-3 f14 gotham fw-bold">
												FRIENDS OF PAYMOB
											</h6>
										</div>
										<div className="col-6">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/industrySector"
														className="color1 text-decoration-none gotham"
													>
														Retailers & small <br /> business{" "}
														<IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/industrySector"
														className="color1 text-decoration-none gotham"
													>
														Gig economy <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/industrySector"
														className="color1 text-decoration-none gotham"
													>
														Transportation <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/industrySector"
														className="color1 text-decoration-none gotham"
													>
														Hospitality <IoIosArrowForward />
													</NavLink>
												</li>
											</ul>
										</div>
										<div className="col-6">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/partners"
														className="color1 text-decoration-none gotham"
													>
														Channel partners <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/partners"
														className="color1 text-decoration-none gotham"
													>
														Banking <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/partners"
														className="color1 text-decoration-none gotham"
													>
														Commerce vendors <IoIosArrowForward />
													</NavLink>
												</li>
											</ul>
										</div>
										<div className="col-6 mt-2">
											<h6 className="bottomHead mb-3 f14 gotham fw-bold">
												CASE STUDIES
											</h6>
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/caseStudies"
														className="color1 text-decoration-none gotham"
													>
														ZmBIZI <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/caseStudies"
														className="color1 text-decoration-none gotham"
													>
														Aisino <IoIosArrowForward />
													</NavLink>
												</li>
											</ul>
										</div>
									</div>
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography>
									<h5 className="orangeC fw-bold gotham letterSpace mb-0">
										Developers
									</h5>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									<div className="row">
										<div className="col-12">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/developers"
														className="color1 text-decoration-none gotham"
													>
														Developer tools <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/callback"
														className="color1 text-decoration-none gotham"
													>
														App to app API <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/inHouseDeployement"
														className="color1 text-decoration-none gotham"
													>
														In-house deployment <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<a
														className="color1 text-decoration-none gotham"
														target="blank"
														href="https://airtable.com/shrL21Fd1xLND39mK"
													>
														Create a demo account <IoIosArrowForward />
													</a>
												</li>
											</ul>
										</div>
									</div>
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography>
									<h5 className="orangeC fw-bold gotham letterSpace mb-0">
										Pricing{" "}
									</h5>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									<div className="row">
										<div className="col-12">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/pricing"
														className="color1 text-decoration-none gotham"
													>
														Basic fee setup <IoIosArrowForward />
													</NavLink>
												</li>
											</ul>
										</div>
									</div>
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel2a-content"
								id="panel2a-header"
							>
								<Typography>
									<h5 className="orangeC fw-bold gotham letterSpace mb-0">
										About us
									</h5>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									<div className="row">
										<div className="col-6">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/about"
														className="color1 text-decoration-none gotham"
													>
														About us <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<LinkS
														to="insight"
														offset={-120}
														smooth={true}
														duration={600}
														spy={true}
														className="color1 text-decoration-none gotham pointer"
													>
														Paymob INsights <IoIosArrowForward />
													</LinkS>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/faq"
														className="color1 text-decoration-none gotham"
													>
														FAQs <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/press"
														className="color1 text-decoration-none gotham"
													>
														Press <IoIosArrowForward />
													</NavLink>
												</li>
											</ul>
										</div>
										<div className="col-6">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/team"
														className="color1 text-decoration-none gotham"
													>
														Our team <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/careers"
														className="color1 text-decoration-none gotham"
													>
														Careers <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/certifications"
														className="color1 text-decoration-none gotham"
													>
														Certifications and security <IoIosArrowForward />
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/contact"
														className="color1 text-decoration-none gotham"
													>
														Contact us <IoIosArrowForward />
													</NavLink>
												</li>
											</ul>
										</div>
									</div>
								</Typography>
							</AccordionDetails>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
