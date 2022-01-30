import React from "react";

// IMPORTS
import i1 from "../assets/about/i1.svg";
import i2 from "../assets/about/i2.svg";
import i3 from "../assets/about/i3.svg";
import Slider from "react-slick";

const AboutMoreDetails = () => {
	var settings = {
		centerMode: true,
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		initialSlide: 0,
		centerPadding: 0,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	return (
		<div className="security_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row d-none d-md-flex">
								<div className="col-12">
									<div className="row align-items-center">
										<div className="col-12 col-md-6">
											<div className="row">
												<div className="col-12 col-md-10">
													<h5 className="gotham text-white f24 mb-4 fw-bold">
														Security
													</h5>
													<p className="text-white crice fw600 lh27 f16">
														We are authorised by the Financial Conduct Authority
														(FCA) and use state-of-the-art technology that
														monitors and prevents any malicious or fraudulent
														behaviour. With Paymob, you can be assured your
														funds are in safe hands.
													</p>
												</div>
											</div>
										</div>
										<div className="col-10 col-md-6 mx-auto text-center">
											<img src={i1} alt="" />
										</div>
									</div>
								</div>

								<div className="col-12 about_more_details">
									<div className="row align-items-center">
										<div className="col-10 col-md-6 mx-auto order-1 order-md-0 text-center">
											<img src={i2} alt="" />
										</div>
										<div className="col-12 col-md-6">
											<div className="row">
												<div className="col-12 col-md-10">
													<h5 className="gotham text-white f24 mb-4 fw-bold">
														Certification
													</h5>
													<p className="text-white crice fw600 lh27 f16">
														We are approved by Visa and MasterCard and meet the
														requirements of the Payment Card Industry Data
														Security Standard for card data processing. All
														confidential information is protected by VeriSign
														Extended.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="col-12 about_more_details">
									<div className="row align-items-center">
										<div className="col-12 col-md-6">
											<div className="row">
												<div className="col-12 col-md-10">
													<h5 className="gotham text-white f24 mb-4 fw-bold">
														Encryption
													</h5>
													<p className="text-white crice fw600 lh27 f16">
														All data received and stored by Paymob via the Tap
														to Phone app is encrypted. In case of the loss or
														theft of your mobile phone, all your details and
														money will be completely safe. Our clients can be
														sure that their card details will not fall into the
														wrong hands.
													</p>
													<p className="text-white crice fw600 lh27 f16">
														Our mobile terminals are as secure as a classic bank
														terminal. For your security, each terminal has an
														individual key. The same account cannot be used on
														different phones.
													</p>
												</div>
											</div>
										</div>
										<div className="col-10 col-md-6 mx-auto text-center">
											<img src={i3} alt="" />
										</div>
									</div>
								</div>
							</div>

							{/* MOBILE */}
							<div className="row d-flex d-md-none">
								<div className="white_slider_arrow col-11 mx-auto">
									<Slider {...settings}>
										<div className="px-3 px-sm-4 system_card">
											<div className="row gy-4">
												<div className="col-8 mx-auto">
													<img className="w-100" src={i1} alt="" />
												</div>
												<div className="col-12 col-md-10">
													<h5 className="my-4 text-center gotham text-white f26 mb-4 fw-bold">
														Security
													</h5>
													<p className="text-center text-white crice fw600 lh27 f16 mt-5">
														We are authorised by the Financial Conduct Authority
														(FCA) and use state-of-the-art technology that
														monitors and prevents any malicious or fraudulent
														behaviour. With Paymob, you can be assured your
														funds are in safe hands.
													</p>
												</div>
											</div>
										</div>
										<div className="px-3 px-sm-4 system_card">
											<div className="row gy-4">
												<div className="col-8 mx-auto">
													<img className="w-100" src={i2} alt="" />
												</div>
												<div className="col-12 col-md-10">
													<h5 className="my-4 text-center gotham text-white f26 mb-4 fw-bold">
														Certification
													</h5>
													<p className="text-center text-white crice fw600 lh27 f16 mt-5">
														We are approved by Visa and MasterCard and meet the
														requirements of the Payment Card Industry Data
														Security Standard for card data processing. All
														confidential information is protected by VeriSign
														Extended.
													</p>
												</div>
											</div>
										</div>
										<div className="px-3 px-sm-4 system_card">
											<div className="row gy-4">
												<div className="col-8 mx-auto">
													<img className="w-100" src={i3} alt="" />
												</div>
												<div className="col-12 col-md-10">
													<h5 className="my-4 text-center gotham text-white f26 mb-4 fw-bold">
														Encryption
													</h5>
													<p className="text-center text-white crice fw600 lh27 f16 mt-5">
														All data received and stored by Paymob via the Tap
														to Phone app is encrypted. In case of the loss or
														theft of your mobile phone, all your details and
														money will be completely safe. Our clients can be
														sure that their card details will not fall into the
														wrong hands.
													</p>
													<p className="text-center text-white crice fw600 lh27 f16 mt-5">
														Our mobile terminals are as secure as a classic bank
														terminal. For your security, each terminal has an
														individual key. The same account cannot be used on
														different phones.
													</p>
												</div>
											</div>
										</div>
									</Slider>
								</div>
							</div>
							{/* MOBILE */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMoreDetails;
