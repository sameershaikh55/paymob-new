import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BlogPagination = ({
	postsPerPage,
	totalPosts,
	paginate,
	currentPage,
	setCurrentPage,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="py-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="d-flex align-items-center justify-content-center">
								{currentPage >= 2 && (
									<button
										onClick={() => setCurrentPage(currentPage - 1)}
										className="themeBtn bg-white color1 gotham fw-bold py-2 px-3 border-0 f18 me-3"
									>
										<IoIosArrowBack /> Prev
									</button>
								)}
								<p className="f18 mb-0 me-3 color2">
									{currentPage} / {pageNumbers.length}
								</p>
								{currentPage !== pageNumbers.length && (
									<button
										onClick={() => setCurrentPage(currentPage + 1)}
										className="themeBtn bg-white color1 gotham fw-bold py-2 px-3 border-0 f18"
									>
										Next <IoIosArrowForward />
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPagination;
