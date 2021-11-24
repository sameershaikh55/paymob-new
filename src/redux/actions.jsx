import { BLOGS } from "./type";
import axios from "axios";

const url = "https://v1.nocodeapi.com/paymob1234/ghost/PgUAPCdEXBfABFYr";

const blogFunc = (data) => {
	return {
		type: BLOGS,
		payload: data,
	};
};

export const blogApi = () => {
	return (dispatch) => {
		axios.get(url + "?limit=100000").then((res) => {
			dispatch(blogFunc(res.data));
		});
	};
};
