import React from "react";
import i2 from "../assets/InHouse/i2.svg";

const InHouseDetail = () => {
	return (
		<div className="inHouseDetail_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-6">
									<h4 className="gotham text-white f22 lh-base fw-bold">
										For the Paymob system to work, it is necessary to ensure the
										work on the servers of the following software:
									</h4>
								</div>
								<div className="col-12 col-md-6">
									<img className="w-100" src={i2} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InHouseDetail;
