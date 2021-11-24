import React from "react";

// IMPORTS
import p1 from "../assets/products/p1.svg";
import p2 from "../assets/products/p2.svg";
import i1 from "../assets/productInterface/i1.png";
import i2 from "../assets/productInterface/i2.svg";
import i3 from "../assets/productInterface/i3.jpeg";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const PaymentInterface = () => {
	var settings = {
		centerMode: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		centerPadding: 0,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
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

	const data = [
		{ i: p1, t: "Mobile SDK", l: "/androidSdk" },
		{ i: p2, t: "SoftPOS app", l: "/softPos" },
		{ i: i1, t: "mPOS card reader", l: "/mposCard" },
		{ i: i2, t: "Mini POS Terminal", l: "/miniPos" },
		{ i: i3, t: "Smart POS Terminal", l: "/smartPos" },
	];

	return (
		<div className="payment_interface_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div>
								<p className="orangeC gotham f18 mb-0 mb-md-2">
									Payment interfaces
								</p>
								<div className="row">
									<div className="col-12 col-md-10 col-lg-6">
										<h1 className="color1 gotham fw700">
											From SDK’s to physical terminals
										</h1>
									</div>
								</div>
								<div className="row">
									<p className="col-12 col-md-10 col-lg-6 lh39 color1 f18 crice fw600">
										Enhance your financial service offering and generate an
										additional revenue stream using our bespoke finance
										solutions, on the go, anywhere in the world.
									</p>
								</div>
							</div>

							<div className="d-block d-xl-none sliderContainer px-3">
								<Slider {...settings}>
									{data.map((prev, i) => {
										return (
											<div className="text-center mt-5 system_cardS">
												<img
													style={{
														width: (i === 3 && "66%") || (i === 4 && "65%"),
													}}
													src={prev.i}
													alt=""
												/>
												<h5 className="color1 f20 gotham fw600 mt-2">
													{prev.t}
												</h5>
												<Link to={prev.l}>
													<button className="gotham f14 border-0 bg-transparent orangeC fw600">
														Learn more <IoIosArrowForward />
													</button>
												</Link>
											</div>
										);
									})}
								</Slider>
							</div>

							<div className="d-none d-xl-block">
								<div className="d-flex justify-content-between align-items-end mb-5">
									{data.map((prev, i) => {
										return (
											<div className="text-center mt-5 system_card">
												<img
													style={{ width: i === 4 && "66%" }}
													src={prev.i}
													alt=""
												/>
												<h5 className="color1 f20 gotham fw600 mt-2">
													{prev.t}
												</h5>
												<Link to={prev.l}>
													<button className="f14 border-0 bg-transparent orangeC fw600">
														Learn more <IoIosArrowForward />
													</button>
												</Link>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentInterface;
