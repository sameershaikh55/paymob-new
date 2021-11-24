import React from "react";

// IMPORTS
import b1 from "../assets/businessLogos/b1.png";
import b2 from "../assets/businessLogos/b2.png";
import b3 from "../assets/businessLogos/b3.png";
import b4 from "../assets/businessLogos/b4.png";
import b5 from "../assets/businessLogos/b5.png";

const BrandPartners = () => {
	const data = [b1, b2, b3, b4, b5];

	return (
		<div className="brandPartners_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<p className="orangeC f18 text-end gotham">
								Join our growing community of Paymob partners
							</p>

							<div className="fincialBrandCont d-flex justify-content-center justify-content-md-between flex-wrap">
								{data.map((prev, i) => {
									return (
										<img
											className="px-3 px-sm-4 mt-4"
											key={i}
											src={prev}
											alt=""
										/>
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

export default BrandPartners;
