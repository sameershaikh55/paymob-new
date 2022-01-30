import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// IMPORTS
import t1 from "../assets/ourTeam/t1.png";
import t2 from "../assets/ourTeam/t2.png";
import t3 from "../assets/ourTeam/t3.png";
import t4 from "../assets/ourTeam/t4.png";

const OurTeam = () => {
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
			i: t1,
			t: "Grigory Gurbanov",
			d: "CTO & Founder",
		},
		{
			i: t2,
			t: "Kosta Du",
			d: "CEO & Co-Founder",
		},
		{
			i: t3,
			t: "Rod P",
			d: "IR Manager",
		},
		{
			i: t4,
			t: "Kate L",
			d: "Project Manager",
		},
	];

	return (
		<div className="ourTeam_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<p className="orangeC gotham mb-0 f20">Our team</p>

							<div className="d-block d-xl-none sliderContainer system_comp px-3">
								<Slider {...settings}>
									{data.map((prev, i) => {
										return (
											<div
												key={i}
												className="col-6 col-md-4 col-lg-3 mt-4 text-center"
											>
												<img className="w-100" src={prev.i} alt="" />
												<h6 className="color2 gotham f20 mt-2 mb-1 fw600">
													{prev.t}
												</h6>
												<p className="color2 f20 crice fw600">{prev.d}</p>
											</div>
										);
									})}
								</Slider>
							</div>

							<div className="row d-none d-md-flex mt-md-3">
								{data.map((prev, ind) => {
									return (
										<div
											key={ind}
											className="col-6 col-md-4 col-lg-3 mt-4 text-center"
										>
											<img className="w-100" src={prev.i} alt="" />
											<h6 className="color2 gotham f16 mt-2 mb-1">{prev.t}</h6>
											<p className="color2 f16 crice fw600">{prev.d}</p>
										</div>
									);
								})}
							</div>

							<div className="col-12 d-none d-md-block text-end mt-4 mt-md-5">
								<Link to="/team">
									<button className="themeBtn bg-white gotham fw-bold py-2 px-3 border-0 f16">
										Meet the team <IoIosArrowForward />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurTeam;
