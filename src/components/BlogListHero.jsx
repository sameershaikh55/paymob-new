import React from "react";
import blog from "../assets/home/blog.svg";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogListHero = ({ blogs }) => {
	return (
		<div className="blog_list_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="text-center">
								<h1 className="color1 gotham f50 fw-bold">Paymob INsights.</h1>
								<p className="orangeC gotham f20 mb-4">
									Recent updates, trending news, business tips and advice from
									the Paymob team.
								</p>
							</div>

							<div className="row align-items-center gx-2 gx-lg-5 inner_container">
								<div className="col-12 col-md-6 pe-lg-5 text-end h-100">
									<div className="row h-100">
										<div className="col-12 col-lg-9 ms-auto h-100 d-flex flex-column justify-content-between">
											<h2
												dangerouslySetInnerHTML={{
													__html: blogs[0].title,
												}}
												className="f35 gotham fw600 text-white"
											></h2>
											<div className="mt-2 mt-md-5">
												<Link to={`/blogInside/${blogs[0].slug}`}>
													<button className="f14 border-0 bg-transparent orangeC fw600 gotham">
														Learn more <IoIosArrowForward />
													</button>
												</Link>
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6 mt-5 mt-md-0">
									{(blogs[0].feature_image && (
										<img
											className="thumbnail"
											src={blogs[0].feature_image}
											alt=""
										/>
									)) || <img className="thumbnail" src={blog} alt="" />}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogListHero;
