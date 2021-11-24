import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import blog from "../assets/home/blog.svg";

const BlogListBody = ({ blogsPag }) => {
	return (
		<div className="insights_container blogBody">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row desktop_insights">
								{blogsPag.map((prev, ind) => {
									return (
										<>
											{ind >= 1 && (
												<div className="col-11 col-md-6 mt-5" key={ind}>
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
																Learn more <IoIosArrowForward />
															</button>
														</Link>
													</div>
												</div>
											)}
										</>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogListBody;
