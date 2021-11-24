import React from "react";
import Slider from "react-slick";

// IMPORTS
import i1 from "../assets/hiworks/i1.png";
import i2 from "../assets/hiworks/i2.png";
import i3 from "../assets/hiworks/i3.png";
import i4 from "../assets/hiworks/i4.png";

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
										Developer friendly SDK for instant frontline payments
									</h1>
								</div>

								<div className="sliderContainer mt-5">
									<Slider {...settings}>
										{data.map((pre, i) => {
											return (
												<div key={i} className="col-3 text-center">
													<img className="w-100" src={pre.i} alt="" />
													<p className="col-10 mx-auto f14 mt-2 color1 fw600 gotham">
														{pre.t}
													</p>
												</div>
											);
										})}
									</Slider>
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
