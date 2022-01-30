import React from "react";
import s1 from "../assets/systemComp/i1.png";
import s2 from "../assets/systemComp/i2.png";
import s3 from "../assets/systemComp/i3.png";
import s4 from "../assets/systemComp/i4.png";
import s5 from "../assets/systemComp/i5.png";

// WHITE LABEL
import i1 from "../assets/whiteLabel/i1.png";
import i2 from "../assets/whiteLabel/i2.png";
import i3 from "../assets/whiteLabel/i3.png";
import i4 from "../assets/whiteLabel/i4.png";
import i5 from "../assets/whiteLabel/i5.png";

import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SystemComponent = ({ softPos }) => {
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
			i: (softPos && i1) || s1,
			t: "Merchant dashboard",
			l: "/merchantDashboard",
		},
		{
			i: (softPos && i2) || s2,
			t: "Digital merchant onboarding",
			l: "/merchantOnboarding",
		},
		{
			i: (softPos && i3) || s3,
			t: "Accreditation & Certification",
			l: "/certifications",
		},
		{ i: (softPos && i4) || s4, t: "Admin Portal", l: "/adminPortal" },
		{ i: (softPos && i5) || s5, t: "Payment gateway", l: "/paymentGatway" },
	];

	return (
		<div
			className={`System_component_container ${
				softPos && "mt-0 soft_pos_container"
			}`}
		>
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div>
								<p className="orangeC gotham f18 mb-0 mb-md-2">
									System components
								</p>
								<div className="row">
									<div className="col-12 col-md-10 col-lg-6">
										<h1
											className={`${
												(softPos && "color1") || "text-white"
											} gotham fw700`}
										>
											A fully integrated platform to meet every business
											challenge.
										</h1>
									</div>
								</div>
								{!softPos && (
									<p className="underHead text-white f18 crice fw600">
										Back end tools for both our clients or their own merchant
										customers.
									</p>
								)}
							</div>

							<div className="d-block d-xl-none sliderContainer system_comp px-3">
								<Slider {...settings}>
									{data.map((prev, i) => {
										return (
											<div className="text-center mt-5 px-3 px-sm-4 system_card">
												<div className="row">
													<div className="col-10 mx-auto">
														<img className="w-100" src={prev.i} alt="" />
													</div>
												</div>
												<h5
													className={`${
														(softPos && "color1") || "text-white"
													} f20 gotham fw600 mt-2`}
												>
													{prev.t}
												</h5>
												<Link to={prev.l}>
													<button className="f14 border-0 bg-transparent orangeC fw600 gotham">
														Learn more <IoIosArrowForward />
													</button>
												</Link>
											</div>
										);
									})}
								</Slider>
							</div>

							<div className="d-none d-xl-block">
								<div className="row justify-content-center align-items-end mt-5">
									{data.map((prev, i) => {
										return (
											<div className="col-4 text-center mt-5 system_card">
												<div className="row">
													<div className="col-10 mx-auto">
														<img className="w-100" src={prev.i} alt="" />
													</div>
												</div>
												<h5
													className={`${
														(softPos && "color1") || "text-white"
													} f20 gotham fw600 mt-2`}
												>
													{prev.t}
												</h5>
												<Link to={prev.l}>
													<button className="f14 border-0 bg-transparent orangeC fw600 gotham">
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

export default SystemComponent;
