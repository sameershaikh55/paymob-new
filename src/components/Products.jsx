import React from "react";
import p1 from "../assets/products/p1.svg";
import p2 from "../assets/products/p2.svg";
import { IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Products = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	};

	const data = [
		{
			t: "Android mobile SDK",
			i: p1,
			d: "Initiate contactless card payments from within your app.",
			l: "/androidSdk",
		},
		{
			t: "White label SoftPOS app",
			i: p2,
			d: "Offer your own SoftPOS financial services.",
			l: "/softPos",
		},
	];
	return (
		<div className="product_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="text-end">
								<div className="row">
									<div className="ms-auto col-12 col-md-10 col-lg-8">
										<p className="f18 orangeC mb-0">Products</p>
										<h1 className="fw700">
											An adaptable integrated framework tailored to your
											industry.
										</h1>
									</div>
								</div>

								<div className="row">
									<div className="col-12 col-md-10 col-lg-6 ms-auto">
										<p className="color1 lh39 f18">
											Our payment rails are an adaptable framework to suit any
											industry recieving frontline payments.
										</p>
									</div>
								</div>
							</div>

							<div className="d-block d-md-none sliderContainer px-3">
								<Slider {...settings}>
									{data.map((prev, i) => {
										return (
											<div
												key={i}
												className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 card_product text-center mt-5 mt-sm-0"
											>
												<div className="row">
													<div className="col-10 col-sm-12 mx-auto">
														<img className="w-100" src={prev.i} alt="" />
													</div>
												</div>
												<div className="mt-4">
													<h3 className="fw800 text-start color1 max_content">
														{prev.t}
													</h3>
													<p className="text-start f16 max_content mb-1 mb-sm-2 fw-bold">
														{prev.d}
													</p>
													<div className="text-start">
														<Link to={prev.l}>
															<button className="f14 border-0 bg-transparent orangeC fw600 gotham">
																Learn more <IoIosArrowForward />
															</button>
														</Link>
													</div>
												</div>
											</div>
										);
									})}
								</Slider>
							</div>

							<div className="d-none d-md-block">
								<div className="row justify-content-around align-items-end mt-5">
									{data.map((prev, i) => {
										return (
											<div
												key={i}
												className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4 card_product text-center mt-5 mt-sm-0"
											>
												<div className="row">
													<div className="col-10 col-sm-12 mx-auto">
														<img className="w-100" src={prev.i} alt="" />
													</div>
												</div>
												<div className="mt-4">
													<h3 className="fw800 text-start color1 max_content">
														{prev.t}
													</h3>
													<p className="text-start f16 max_content mb-1 mb-sm-2 fw-bold">
														{prev.d}
													</p>
													<div className="text-start">
														<Link to={prev.l}>
															<button className="f14 border-0 bg-transparent orangeC fw600 gotham">
																Learn more <IoIosArrowForward />
															</button>
														</Link>
													</div>
												</div>
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

export default Products;
