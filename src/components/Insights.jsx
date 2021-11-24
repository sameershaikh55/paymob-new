import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import blog from "../assets/home/blog.svg";

// IMPORTING REDUX
import { blogApi } from "../redux/actions";

const Insights = ({ blogApi, blogs }) => {
	useEffect(() => {
		blogApi();
	}, []);

	if (blogs.length) {
		var blogMobile = [blogs[0], blogs[1]];
	}

	var settings = {
		centerMode: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
	};

	return (
		<>
			{(blogs.length && (
				<div id="insight" className="insights_container">
					<div className="page_container">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-lg-12 mx-auto">
									<div className="text-end">
										<div className="row">
											<div className="ms-auto col-12 col-md-8">
												<p className="f18 orangeC mb-1 mb-md-0">
													Paymob INsights
												</p>
												<h1 className="fw600">Updates from our blog</h1>
											</div>
										</div>
									</div>

									<div className="mobile_insights d-block d-md-none sliderContainer px-3">
										<Slider {...settings}>
											{blogMobile.map((prev, ind) => {
												console.log(prev);
												return (
													<div
														className="col-11 col-md-6 mx-auto mt-5 px-3"
														key={ind}
													>
														{(prev.feature_image && (
															<img
																className="w-100"
																src={prev.feature_image}
																alt=""
															/>
														)) || <img className="w-100" src={blog} alt="" />}

														<div className="ps-3 mt-3">
															{/* <div
																dangerouslySetInnerHTML={{
																	__html: prev.category_list,
																}}
																className="category_link f14 crice mb-0 mb-md-2"
															></div> */}
															<h2
																dangerouslySetInnerHTML={{
																	__html: prev.title,
																}}
																className="color1 f20 fw700"
															></h2>
															<Link to={`/blogInside/${prev.slug}`}>
																<button className="f14 border-0 bg-transparent orangeC fw600">
																	Keep reading <IoIosArrowForward />
																</button>
															</Link>
														</div>
													</div>
												);
											})}
										</Slider>
									</div>

									<div className="desktop_insights d-none d-md-block">
										<div className="row">
											{blogMobile.map((prev, ind) => {
												return (
													<>
														<div
															className="col-11 col-md-6 mx-auto mt-5"
															key={ind}
														>
															{(prev.feature_image && (
																<img
																	className="thumbnail"
																	src={prev.feature_image}
																	alt=""
																/>
															)) || <img src={blog} alt="" />}
															<div className="ps-3 mt-3">
																{/* <div
																	dangerouslySetInnerHTML={{
																		__html: prev.category_list,
																	}}
																	className="category_link f14 crice mb-0 mb-md-2"
																></div> */}
																<h2
																	dangerouslySetInnerHTML={{
																		__html: prev.title,
																	}}
																	className="color1 f20 fw700"
																></h2>
																<Link to={`/blogInside/${prev.slug}`}>
																	<button className="f14 border-0 bg-transparent orangeC fw600">
																		Keep reading <IoIosArrowForward />
																	</button>
																</Link>
															</div>
														</div>
													</>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)) ||
				""}
		</>
	);
};

const mapStatetoProps = (state) => {
	return {
		blogs: state.reducer.blogs,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		blogApi: function () {
			dispatch(blogApi());
		},
	};
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Insights);
