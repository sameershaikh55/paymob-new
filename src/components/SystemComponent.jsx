import React from "react";
import s1 from "../assets/systemComp/s1.png";
import s2 from "../assets/systemComp/s2.png";
// import s3 from "../assets/systemComp/s3.svg";
import s3 from "../assets/systemComp/s3.png";
import s4 from "../assets/systemComp/s4.png";
import s5 from "../assets/systemComp/s5.png";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const SystemComponent = () => {
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
		{ i: s1, t: "Merchant dashboard", l: "/merchantDashboard" },
		{ i: s2, t: "Digital merchant onboarding", l: "/merchantOnboarding" },
		{ i: s3, t: "Accreditation & Certification", l: "/certifications" },
		{ i: s4, t: "Admin Portal", l: "/adminPortal" },
		{ i: s5, t: "Payment gateway", l: "/paymentGatway" },
	];

	return (
		<div className="System_component_container">
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
										<h1 className="color1 gotham fw700">
											A fully integrated platform to meet every business
											challenge.
										</h1>
									</div>
								</div>
								<p className="underHead color1 f18 crice fw600">
									Back end tools for both our clients or their own merchant
									customers.
								</p>
							</div>

							<div className="d-block d-xl-none sliderContainer px-3">
								<Slider {...settings}>
									{data.map((prev, i) => {
										return (
											<div className="text-center mt-5 px-3 px-sm-4 system_card">
												<img
													style={{
														width:
															(prev.t === "Accreditation & Certification" &&
																"68%") ||
															(prev.t === "Digital merchant onboarding" &&
																"70%") ||
															(prev.t === "Payment gateway" && "80%"),
														margin: "auto",
													}}
													src={prev.i}
													alt=""
												/>
												<h5 className="color1 f20 gotham fw600 mt-2">
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
												<img
													style={{
														width:
															(prev.t === "Digital merchant onboarding" &&
																"65%") ||
															(prev.t === "Payment gateway" && "78%"),
													}}
													src={prev.i}
													alt=""
												/>
												<h5 className="color1 f20 gotham fw600 mt-2">
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
