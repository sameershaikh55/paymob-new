import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";

const PricingDetails = () => {
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

	const data = [
		{
			t: "SUBSCRIPTION",
			d: (
				<h3 className="text-white gotham fw-bold">
					<span className="orangeC">£2</span> per month
				</h3>
			),
		},
		{
			t: "PERCENTAGE",
			d: (
				<h3 className="text-white gotham fw-bold">
					<span className="orangeC">25pbs</span> per transaction
				</h3>
			),
		},
		{
			t: "HYBRID",
			d: (
				<h3 className="text-white gotham fw-bold">
					<span className="orangeC">£1</span> per month{" "}
					<span className="orangeC">+ 15bps</span>
				</h3>
			),
		},
		{
			t: "ENTERPRISE",
			d: <h3 className="orangeC gotham fw-bold">Bespoke</h3>,
		},
	];

	return (
		<div className="pricing_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row d-flex d-md-none pt-5">
						<div className="col-11 mx-auto">
							<div className="d-block d-md-none sliderContainer white_slider_arrow px-3">
								<Slider {...settings}>
									{data.map((prev, i) => {
										return (
											<div className="col-6 col-md-3 d-flex flex-column align-items-center">
												<h6 className="f14 text-white border_bottom pb-3 gotham">
													{prev.t}
												</h6>
												{prev.d}
											</div>
										);
									})}
								</Slider>
							</div>
						</div>

						<div className="col-12 text-center mt-4">
							<NavLink to="/contact">
								<button className="themeBtn bg-white py-2 px-3 border border-2 border-white bg-transparent text-white f18 fw-bold gotham mt-2 mt-md-3">
									Contact sales <IoIosArrowForward />
								</button>
							</NavLink>
						</div>
					</div>

					<div className="row d-none d-md-flex">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row">
								{data.map((prev, i) => {
									return (
										<div className="col-6 col-md-3 mt-5">
											<h6 className="f14 text-white border_bottom pb-3 gotham">
												{prev.t}
											</h6>
											{prev.d}
										</div>
									);
								})}

								<div className="col-12 text-center">
									<NavLink to="/contact">
										<button className="themeBtn bg-white py-2 px-3 border border-2 border-white bg-transparent text-white f18 fw-bold gotham mt-2 mt-md-3">
											Contact sales <IoIosArrowForward />
										</button>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PricingDetails;
