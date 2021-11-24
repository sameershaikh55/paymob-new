import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import blog from "../assets/home/blog.svg";

const RecomendedBlogs = ({ blogs }) => {
	useEffect(() => {
		for (let i = blogs.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[blogs[i], blogs[j]] = [blogs[j], blogs[i]];
		}
	});

	return (
		<div className="insights_container recomended">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="desktop_insights row">
								{blogs.map((prev, ind) => {
									return (
										<>
											{ind <= 1 && (
												<div className="col-11 col-md-6 mx-auto mt-5" key={ind}>
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

export default RecomendedBlogs;
