import React from "react";
// import Slider from "react-slick";

// IMPORTS
// import i1 from "../assets/hiworks/i1.svg";
// import i2 from "../assets/hiworks/i2.svg";
// import i3 from "../assets/hiworks/i3.svg";
// import centerPhone from "../assets/softpos/centerPhone.svg";
import soft from "../assets/softpos/SoftPOS.svg";

const HiwSoft = () => {
	// var settings = {
	// 	centerMode: true,
	// 	dots: false,
	// 	infinite: true,
	// 	speed: 500,
	// 	slidesToShow: 1,
	// 	slidesToScroll: 1,
	// 	initialSlide: 0,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 2,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 		{
	// 			breakpoint: 575,
	// 			settings: {
	// 				slidesToShow: 1,
	// 				slidesToScroll: 1,
	// 			},
	// 		},
	// 	],
	// };

	// const data = [
	// 	{ i: i1, t: "Enable contactless payments" },
	// 	{ i: i1, t: "No extra hardware, plugins or dongles" },
	// 	{
	// 		i: i3,
	// 		t: "Payment successful, funds are deposited into the merchants bank",
	// 	},
	// ];

	return (
		<div className="howitWorks_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 col-lg-12 mx-auto">
							<div className="row">
								<div className="ms-auto col-12 col-md-10 col-lg-8 text-end">
									<p className="f20 orangeC mb-0 gotham">How does it work</p>
									<h1 className="fw700 gotham color1">
										The stand alone Tap to Phone app
									</h1>
								</div>

								<div className="mt-3">
									<img className="w-100" src={soft} alt="" />
								</div>

								{/* <div className="d-block d-lg-none sliderContainer px-3">
									<Slider {...settings}>
										{data.map((prev, i) => {
											return (
												<div className="text-center mt-5 px-3 system_card">
													<img src={prev.i} alt="" />
													<h5 className="color1 f20 gotham fw600 mt-3">
														{prev.t}
													</h5>
												</div>
											);
										})}
									</Slider>
								</div> */}

								{/* <div className="d-none d-lg-flex justify-content-center mt-5">
									{data.map((pre, i) => {
										return (
											<div
												key={i}
												className="hiwSoft_card text-center px-5 px-lg-0"
											>
												<img src={pre.i} alt="" />
												<p className="col-10 mx-auto f18 mt-2 color1 fw600 gotham">
													{pre.t}
												</p>
											</div>
										);
									})}
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HiwSoft;
