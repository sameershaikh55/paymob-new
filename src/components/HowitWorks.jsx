import React from "react";
import Slider from "react-slick";

// IMPORTS
import i1 from "../assets/hiworks/i1.png";
import i2 from "../assets/hiworks/i2.png";
import i3 from "../assets/hiworks/i3.png";
import i4 from "../assets/hiworks/i4.png";

// IMPORTS
import sdkPayment from "../assets/sdkPayment.svg";

const HowitWorks = ({ callback }) => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
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
		"Merchant choses a payment method within your app",
		"App to app API redirects to our SDK for payment",
		"Payment accepted! Funds are deposited",
		"Smartphone redirects user back to your app to conclude payment",
	];

	const data2 = [
		{ i: i1, t: "Merchant choses a payment method within your app" },
		{ i: i2, t: "App to app API redirects to our SDK for payment" },
		{ i: i3, t: "Payment accepted! Funds are deposited" },
		{
			i: i4,
			t: "Smartphone redirects user back to your app to conclude payment",
		},
	];

	return (
		<div className="howitWorks_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 col-lg-12 mx-auto">
							<div className="row">
								<div
									className={`${
										(callback && "me-auto text-start") || "ms-auto text-end"
									}  col-12 col-md-10 col-lg-8`}
								>
									<p className="f20 orangeC mb-0 gotham">How does it work</p>
									<h1 className="fw700 gotham color1">
										Developer friendly SDK <br className="d-none d-md-block" />{" "}
										for instant frontline payments
									</h1>
								</div>
							</div>

							{/* MOBILE */}
							<div className="d-block d-md-none sliderContainer mt-5">
								<Slider {...settings}>
									{data2.map((pre, i) => {
										return (
											<div key={i} className="col-3 px-2 text-center">
												<img className="w-100" src={pre.i} alt="" />
												<p className="col-10 mx-auto f14 mt-2 text-white fw600 gotham">
													{pre.t}
												</p>
											</div>
										);
									})}
								</Slider>
							</div>
							{/* MOBILE */}

							<div className="row d-none d-md-flex mt-4">
								<div className="col-10">
									<img className="w-100" src={sdkPayment} alt="" />
								</div>
								<div className="col-2 d-flex flex-column justify-content-between">
									{data.map((item, i) => {
										return (
											<div key={i}>
												<div className="indexes mx-auto rounded-pill d-flex justify-content-center align-items-center text-white f50 gotham">
													{i + 1}
												</div>
												<p className="mt-3 gotham f14 color1 text-center fw600">
													{item}
												</p>
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

export default HowitWorks;
