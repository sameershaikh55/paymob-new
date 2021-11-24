import React from "react";

// IMPORTS
import i1 from "../assets/industry/i1.png";
import i2 from "../assets/industry/i2.png";
import i3 from "../assets/industry/i3.png";
import i4 from "../assets/industry/i4.png";

const IndustryBody = () => {
	return (
		<div className="industryBody_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 px-0 px-md-2">
									<div className="row align-items-center">
										<div className="col-12 col-md-6 px-0">
											<img className="w-100" src={i1} alt="" />
										</div>
										<div className="col-12 col-md-6 ps-3 ps-md-5 my-4 my-md-0">
											<h2 className="color1 gotham fw600 mb-2 mb-md-4">
												Retailers and small business.
											</h2>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Sustainable.
											</h4>
											<p className="crice fw-bold f16 color2">
												For the eco-warriers out there, SoftPOS is perhaps the
												most sustainable pay to pay. No plastic terminal, no
												paper receipts, and no device delivery.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Fontline.
											</h4>
											<p className="crice fw-bold f16 color2">
												The frontline payment could not get more ‘front-line’
												than with Tap to Phone, avoid connecting additional
												devices and external hardware, and enjoy a speedier
												payment experience.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Contactless, and pin-on-glass.
											</h4>
											<p className="crice fw-bold f16 color2">
												Don’t let payment limits hold your merchants back, with
												both contactless, and pin-on-glass options, the skys the
												limit.
											</p>
										</div>
									</div>
								</div>

								<div className="col-12 px-0 px-md-2">
									<div className="row align-items-center">
										<div className="col-12 col-md-6 ps-3 ps-md-5 my-4 my-md-0 order-1 order-md-0">
											<h2 className="color1 gotham fw600 mb-2 mb-md-4">
												Gig economy.
											</h2>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Flexible.
											</h4>
											<p className="crice fw-bold f16 color2">
												An on-the-go friendly solution, for on-the-go workers.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												The smartphone terminal.
											</h4>
											<p className="crice fw-bold f16 color2">
												Bypass the external terminal with Tap to Phone. Enabling
												any gig economy worker with an Android device to accept
												payments.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Competitive transaction rates.
											</h4>
											<p className="crice fw-bold f16 color2">
												Avoid increasingly high transaction fees, Paymob charge
												a flat rate of 1.5% in the UK and EU.
											</p>
										</div>
										<div className="col-12 col-md-6 px-0">
											<img className="w-100" src={i2} alt="" />
										</div>
									</div>
								</div>

								<div className="col-12 px-0 px-md-2">
									<div className="row align-items-center">
										<div className="col-12 col-md-6 px-0">
											<img className="w-100" src={i3} alt="" />
										</div>
										<div className="col-12 col-md-6 ps-3 ps-md-5 my-4 my-md-0">
											<h2 className="color1 gotham fw600 mb-2 mb-md-4">
												Hospitality.
											</h2>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												End to end table service.
											</h4>
											<p className="crice fw-bold f16 color2">
												Provide a safer, cleaner payment service, allowing your
												merchants to accept payments from their customers
												tables, with friction free, hastle free transactions.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Keep up with technology rivals.
											</h4>
											<p className="crice fw-bold f16 color2">
												Keep up with competition and ensure your hospitality
												customers recieve the most up to date in payment
												technology.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Anyone can be a point of sale.
											</h4>
											<p className="crice fw-bold f16 color2">
												Any member of staff themselves can be a point of sale,
												using the dedicated android terminal, or SDK integrated
												terminal, allow the end customer the freedom to pay as
												they move around the venue.
											</p>
										</div>
									</div>
								</div>

								<div className="col-12 px-0 px-md-2">
									<div className="row align-items-center">
										<div className="col-12 col-md-6 ps-3 ps-md-5 order-1 order-md-0 my-4 my-md-0">
											<h2 className="color1 gotham fw600 mb-2 mb-md-4">
												Transportation.
											</h2>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Speedier payments on the go.
											</h4>
											<p className="crice fw-bold f16 color2">
												No more ‘waiting for my device to connect’ moments, one
												payment system, one device, simply tap in the chargable
												amount, tap and go!
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												Goodbye cash.
											</h4>
											<p className="crice fw-bold f16 color2">
												Tap to Phone turns any smartphone into a contactless
												card reader. It’s a quick and easy way for drivers
												accept card payments on the go reducing the amount of
												cash they need to carry, and of course the risk of theft
												and fraud.
											</p>

											<h4 className="gotham f18 color1 fw600 my-3 my-md-4">
												One digital roof.
											</h4>
											<p className="crice fw-bold f16 color2">
												Using our integrated technology, your taxi or bus
												drivers can use their smartphone, for maps,
												communication and payment acceptance.
											</p>
										</div>
										<div className="col-12 col-md-6 px-0">
											<img className="w-100" src={i4} alt="" />
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

export default IndustryBody;
