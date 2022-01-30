import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Add from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const FAQBody = () => {
	const data = [
		{
			t: "Why TAP on Phone?",
			d: "Tap to Phone is quick, simple and secure. It’s an ideal payment method for merchants looking to streamline their checkout process, and increase customer satisfaction.",
		},
		{
			t: "Do I need to purchase SoftPOS hardware?",
			d: "No, in fact SoftPOS lives inside your app, inside your business customers' Android smartphones, or your white label terminals. No additional hardware is needed.",
		},
		{
			t: "What devices is Tap to Phone Compatible on?",
			d: "Our SDK can be easily integrated into your POS terminal, vending machine or any NFC enabled android device.",
		},
		{
			t: "Are tap to phone payments secure?",
			d: "Yes. We adhere to the highest payment security standards, as a PCI-DSS Level 1 compliant company, along with being Visa, Mastercard and FCA approved. Find out more about our certifications and security here.",
		},
		{
			t: "How will my business customer know if a payment was successful?",
			d: "They will be immediately taken to the ‘Payment successful’ screen, with the option to send their customer an e-receipt post payment, or return to the main menu.",
		},
		{
			t: "Do you provide Acquiring and processing as part of your packages?",
			d: "We do! But only within the UK, EU and US at the moment. We are working hard to expand our services globally.",
		},
		{
			t: "Are there any hidden fees I should be aware of?",
			d: "No. At Paymob we believe in complete transparency, from our business values to our fees. Our clients will receive a clear breakdown of costs depending on their package.",
		},
		{
			t: "What cards can I accept with SoftPOS?",
			d: "You can accept every major card – Visa, Mastercard and American Express.",
		},
		{
			t: "What methods of payment can my customers use?",
			d: "You can accept cards, mobile e-wallet and QR code payments.",
		},
		{
			t: "What does Paymob do to help with fraud protection?",
			d: "Our systems offer 24/7 monitoring of your SoftPOS technology to keep an eye on suspicious transactions.",
		},
		{
			t: "Can my customers manage their inventory from my SoftPOS app?",
			d: "End point customers can upload their product categories for a speedier checkout process, enabling a more streamlined experience and the added ability to track specific product sales.",
		},
	];

	return (
		<div className="faq_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<h1 className="text-center gotham color1 f50 fw-bold mb-5">
								Hi, how can we help?
							</h1>

							<div className="inner_body mx-auto">
								<div className="faq_body px-3 px-md-4 py-2 py-md-3">
									{data.map((prev, ind) => {
										return (
											<Accordion key={ind}>
												<AccordionSummary
													expandIcon={
														true ? (
															<Add color="#fff" />
														) : (
															<RemoveIcon color="#fff" />
														)
													}
													aria-controls="panel1a-content"
													id="panel1a-header"
												>
													<Typography className="head">{prev.t}</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<Typography className="body lh27 fw-bold">
														{prev.d}
													</Typography>
												</AccordionDetails>
											</Accordion>
										);
									})}
								</div>

								<div className="d-flex align-items-center justify-content-end mt-5">
									<p className="color2 letterSpace lh27 f16 crice fw-bold mb-0">
										Still need help?
									</p>
									<Link to="/contact">
										<button className="themeBtn bg-white ms-3 color1 py-2 px-3 border-0 f18 fw-bold gotham f16">
											Contact us <IoIosArrowForward />
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQBody;
