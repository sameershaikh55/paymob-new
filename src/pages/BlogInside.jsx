import React from "react";
import { useEffect } from "react";
import logoW from "../assets/logoW.svg";

// IMPORTING COMPONENTS
import Layout from "../layout";
import BlogInsideBody from "../components/BlogInsideBody";
import RecomendedBlogs from "../components/RecomendedBlogs";
import BlogSeo from "../components/BlogSeo";

// IMPORTING REDUX
import { connect } from "react-redux";
import { blogApi } from "../redux/actions";
import { useParams } from "react-router";

const BlogInside = ({ blogApi, blogs }) => {
	const { singleBlog } = useParams();

	useEffect(() => {
		blogApi();
	}, []);

	console.log(singleBlog);

	if (blogs.length) {
		var filteredData = blogs.filter((prev) => singleBlog === prev.slug);
	}

	return (
		<>
			{(!blogs.length && (
				<div className="loading_page">
					<div className="inner_loading d-flex flex-column align-items-center">
						<img src={logoW} alt="" />
					</div>
				</div>
			)) || (
				<Layout>
					<BlogSeo data={singleBlog} />
					<BlogInsideBody filteredData={filteredData} />
					<RecomendedBlogs blogs={blogs} />
				</Layout>
			)}
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

export default connect(mapStatetoProps, mapDispatchtoProps)(BlogInside);
