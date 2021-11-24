import React from "react";
import b1 from "../assets/businessLogos/b1.png";
import b2 from "../assets/businessLogos/b2.png";
import b3 from "../assets/businessLogos/b3.png";
import b4 from "../assets/businessLogos/b4.png";
import b5 from "../assets/businessLogos/b5.png";
import financial1 from "../assets/financial1.png";
import financial2 from "../assets/financial2.png";

const FinancialService = () => {
	const data = [b1, b2, b3, b4, b5];

	return (
		<div className="financial_service_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="text-white">
								<div className="row">
									<div className="col-md-10 col-lg-7">
										<h1 className="fw600">
											Enabling any business to offer financial services.
										</h1>
									</div>
								</div>

								<div className="row">
									<div className="col-md-8 col-lg-5">
										<p className="headText mt-3 f18 crice fw-bold">
											Join our likeminded pay-tech community utalising Paymob’s
											payment gateway, bespoke SoftPOS app, seamless SDK
											integration and API architecture.
										</p>
									</div>
								</div>
							</div>

							<div className="bottomSec">
								<p className="orangeC f18 text-end">Who we work with</p>

								<div className="fincialBrandCont d-flex justify-content-center justify-content-md-between flex-wrap">
									<span className="d-none d-md-block">
										<img className="w-100" src={financial1} alt="" />
									</span>
									<span className="d-block d-md-none">
										<img className="mt-3 w-100" src={financial2} alt="" />
									</span>

									{/* {data.map((prev, i) => {
										return (
											<img
												className="px-3 px-sm-4 mt-4"
												key={i}
												src={prev}
												alt=""
											/>
										);
									})} */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FinancialService;
