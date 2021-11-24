import React from "react";

// IMPORTS
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import hero from "../assets/gifs/Globe.gif";

const ProductHero = () => {
	return (
		<div className="productHero_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-sm-10 col-md-6">
									<h1 className="color1 fw-bolder">Product</h1>
									<p className="color2 fw600">
										Paymob exist to help other businesses offer their own
										financial services. We have built several packages to suit
										the individual needs of our Paymob partners from ready-to-go
										solutions to a bespoke white labeled application.
									</p>
									<p className="color2 fw600">
										So you can focus on growing your business, while Paymob take
										care of the backend and onboarding.
									</p>
									<Link to="/contact">
										<button className="py-2 px-3 border-0 f18 mt-2 mt-md-4">
											Contact sales <IoIosArrowForward />
										</button>
									</Link>
								</div>
								<div className="col-10 col-md-6 mx-auto mt-4 mt-md-0 px-2 px-lg-0">
									<img className="w-100" src={hero} alt="hero" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductHero;
