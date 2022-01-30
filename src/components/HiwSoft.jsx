import React from "react";

import soft from "../assets/softpos/SoftPOS.svg";

const HiwSoft = () => {
	return (
		<div className="howitWorks_container pb-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 col-lg-12 mx-auto">
							<div className="row">
								<div className="ms-auto col-12 col-md-10 col-lg-8 text-start text-md-end">
									<p className="f20 orangeC mb-0 gotham">How does it work</p>
									<h1 className="fw700 gotham color1">
										The stand alone Tap to Phone app
									</h1>
								</div>

								<div className="mt-3">
									<img className="w-100" src={soft} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HiwSoft;
