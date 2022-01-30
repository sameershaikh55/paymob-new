import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { NavLink } from "react-router-dom";
// import { Link as LinkS } from "react-scroll";

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
					<div className="col-12">
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
										<div className="col-12">
											<NavLink exact to="/productOverview">
												<button className="text-start color1 f20 border-0 gotham shadow-none bg-transparent f14 fw600">
													Overview
												</button>
											</NavLink>
										</div>
										<div className="col-12">
											<NavLink exact to="/contact">
												<button className="text-start color1 f20 border-0 gotham shadow-none bg-transparent f14 fw600">
													Contact
												</button>
											</NavLink>
										</div>
									</div>

									<div className="row mt-4">
										<div className="col-12">
											<h6 className="color4 mb-3 f14 gotham fw-bold">
												PAYMENT TOOLS
											</h6>
										</div>

										<div className="col-12 mt-2">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/androidSdk"
														className="color1 text-decoration-none gotham fw600"
													>
														Android mobile SDK
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/softPos"
														className="color1 text-decoration-none gotham fw600"
													>
														SoftPOS app
													</NavLink>
												</li>
												{/* <li className="f14 mb-3">
													<NavLink
														to="/mposCard"
														className="color1 text-decoration-none gotham fw600"
													>
														mPOS card reader
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/miniPos"
														className="color1 text-decoration-none gotham fw600"
													>
														Mini POS terminal
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/smartPos"
														className="color1 text-decoration-none gotham fw600"
													>
														Smart POS terminal
													</NavLink>
												</li> */}
											</ul>
										</div>

										<div className="col-12 mt-4">
											<h6 className="color4 mb-3 f14 gotham fw-bold">
												SYSTEM COMPONENETS
											</h6>
										</div>

										<div className="col-12 mt-2">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/merchantOnboarding"
														className="color1 text-decoration-none gotham fw600"
													>
														Digital merchent onboarding
													</NavLink>
												</li>
												<li className="f14 mb-3 color1">
													<NavLink
														to="/adminPortal"
														className="color1 text-decoration-none gotham fw600"
													>
														Admin portal
													</NavLink>
												</li>
												<li className="f14 mb-3 color1">
													<NavLink
														to="/merchantDashboard"
														className="color1 text-decoration-none gotham fw600"
													>
														Merchant dashboard
													</NavLink>
												</li>
												<li className="f14 mb-3 color1">
													<NavLink
														to="/paymentGatway"
														className="color1 text-decoration-none gotham fw600"
													>
														Payment gateway
													</NavLink>
												</li>
												<li className="f14 mb-3 color1">
													<NavLink
														to="/certifications"
														className="color1 text-decoration-none gotham fw600"
													>
														Certifications
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
										{/* <div className="col-12">
											<h6 className="color4 mb-3 f14 gotham fw-bold">
												INDUSTRY SECTORS
											</h6>
										</div> */}
										<div className="col-12">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/industrySector"
														className="color1 text-decoration-none gotham fw600"
													>
														Industry sectors
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/partners"
														className="color1 text-decoration-none gotham fw600"
													>
														Friends of Dapio
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/caseStudies"
														className="color1 text-decoration-none gotham fw600"
													>
														Case studies
													</NavLink>
												</li>
											</ul>
										</div>

										{/* <div className="col-12 mt-4">
											<h6 className="color4 mb-3 f14 gotham fw-bold">
												FRIENDS OF PAYMOB
											</h6>
										</div>
										<div className="col-12">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/partners"
														className="color1 text-decoration-none gotham fw600"
													>
														Channel partners
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/partners"
														className="color1 text-decoration-none gotham fw600"
													>
														Banking
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/partners"
														className="color1 text-decoration-none gotham fw600"
													>
														Commerce vendors
													</NavLink>
												</li>
											</ul>
										</div>
										<div className="col-6 mt-2">
											<h6 className="color4 mb-3 f14 gotham fw-bold">
												CASE STUDIES
											</h6>
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/caseStudies"
														className="color1 text-decoration-none gotham fw600"
													>
														ZmBIZI
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/caseStudies"
														className="color1 text-decoration-none gotham fw600"
													>
														Aisino
													</NavLink>
												</li>
											</ul>
										</div> */}
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
														className="color1 text-decoration-none gotham fw600"
													>
														Developer tools
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/callback"
														className="color1 text-decoration-none gotham fw600"
													>
														App to app API
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/inHouseDeployement"
														className="color1 text-decoration-none gotham fw600"
													>
														In-house deployment
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<a
														className="color1 text-decoration-none gotham fw600"
														target="blank"
														href="https://airtable.com/shrL21Fd1xLND39mK"
													>
														Create a demo account
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
														className="color1 text-decoration-none gotham fw600"
													>
														Basic fee setup
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
										<div className="col-12">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/about"
														className="color1 text-decoration-none gotham fw600"
													>
														About us
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/blogList"
														className="color1 text-decoration-none gotham pointer"
													>
														Dapio INsights
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/faq"
														className="color1 text-decoration-none gotham fw600"
													>
														FAQs
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/press"
														className="color1 text-decoration-none gotham fw600"
													>
														Press
													</NavLink>
												</li>
											</ul>
										</div>
										<div className="col-12">
											<ul className="list-unstyled mb-0">
												<li className="f14 mb-3">
													<NavLink
														to="/team"
														className="color1 text-decoration-none gotham fw600"
													>
														Our team
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/careers"
														className="color1 text-decoration-none gotham fw600"
													>
														Careers
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/certifications"
														className="color1 text-decoration-none gotham fw600"
													>
														Certifications and security
													</NavLink>
												</li>
												<li className="f14 mb-3">
													<NavLink
														to="/contact"
														className="color1 text-decoration-none gotham fw600"
													>
														Contact us
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

			<NavLink to="/contact">
				<button className="resquest_btn gotham fw-bold">Request Demo</button>
			</NavLink>
		</div>
	);
};

export default Sidebar;
