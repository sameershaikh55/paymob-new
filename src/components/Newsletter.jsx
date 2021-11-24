import React from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";

const Newsletter = ({ status, message, onSubmitted }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = (data) => {
		console.log(status);
		console.log(data.email);

		// CHIMP SUBMIT FUNCTION START
		onSubmitted({
			EMAIL: data.email,
		});
		// CHIMP SUBMIT FUNCTION END

		swal("Good job!", "Thank you for subscribing", "success");
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="newsletterInp position-relative d-flex justify-content-between px-4 py-2"
		>
			<input
				type="email"
				{...register("email", {
					required: true,
					pattern:
						/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
				})}
				className="border-0 bg-transparent"
				placeholder="joebloggs@address.com"
			/>
			<button type="submit" className="ps-4 bg-transparent color1 f14 fw-bold">
				SUBSCRIBE
			</button>
			<div className="redColor fw-bold position-absolute">
				{errors.email && errors.email.type === "required" && "Required*"}
				{errors.email &&
					errors.email.type === "pattern" &&
					"Invalid Email Address*"}
			</div>
		</form>
	);
};

export default Newsletter;
