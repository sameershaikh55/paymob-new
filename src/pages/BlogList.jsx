import React, { useEffect, useState } from "react";

// IMPORTING COMPONENTS
import Layout from "../layout";
import BlogListHero from "../components/BlogListHero";
import BlogListBody from "../components/BlogListBody";
import BlogPagination from "../components/BlogPagination";
import logoW from "../assets/logoW.svg";
import { connect } from "react-redux";
import { blogApi } from "../redux/actions";

// IMPORT SEO
import Seo from "../components/Seo";

const BlogList = ({ blogApi, blogs }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		blogApi();
	}, []);

	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<>
			<Layout>
				<Seo canonical="https://paymobtech.com/blogList" />

				{(!blogs.length && (
					<div className="loading_page">
						<div className="inner_loading d-flex flex-column align-items-center">
							<img src={logoW} alt="" />
						</div>
					</div>
				)) || (
					<>
						{currentPage === 1 && <BlogListHero blogs={blogs} />}
						<BlogListBody blogsPag={currentPosts} />
					</>
				)}
				<BlogPagination
					currentPage={currentPage}
					postsPerPage={postsPerPage}
					totalPosts={blogs.length}
					paginate={paginate}
					setCurrentPage={setCurrentPage}
				/>
			</Layout>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(BlogList);
