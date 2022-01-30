import React from "react";

// IMPORTS
import i1 from "../assets/certificateDetails/i1.svg";
import i2 from "../assets/certificateDetails/i2.svg";
import i3 from "../assets/certificateDetails/i3.svg";
import i4 from "../assets/certificateDetails/i4.svg";
import i5 from "../assets/certificateDetails/i5.svg";
import i6 from "../assets/certificateDetails/i6.svg";

const CertificationDetail = () => {
	const data = [
		{
			i: i1,
			t: "SECURED CLOUD",
			d: "All servers are in secured Microsoft Azure PCI DSS certified zone. We are PCI-DSS Level 1 certified.",
		},
		{
			i: i2,
			t: "DIGITAL ONBOARDING",
			d: "The procedure is identical to the application for obtaining a regular payment terminal in a bank. Risk covered by banking partner.",
		},
		{
			i: i3,
			t: "PAYMENT PROCESSING",
			d: "All risks related to payment processing is covered by bank acquirer.",
		},
		{
			i: i4,
			t: "CRYPTOGRAPHY",
			d: "Crypto kernel developed according to industry standard and certified by VISA and Mastercard.",
		},
		{
			i: i5,
			t: "STANDARD AMC / KYC",
			d: "Partner bank makes all required procedures. Risk covered by banking partner.",
		},
		{
			i: i6,
			t: "CLAIMS",
			d: "All payment claims processed by bank acquirer. Claims are rare for contactless payments.",
		},
	];

	return (
		<>
			<div className="certificationDetail_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								<div className="row d-none d-md-flex gy-4">
									{data.map((prev, ind) => {
										const { i, t, d } = prev;
										return (
											<div
												key={ind}
												className="col-10 col-sm-6 col-md-4 mt-5 mx-auto"
											>
												<div className="d-flex flex-column justify-content-center align-items-center">
													<div className="row">
														<div className="col-10 mx-auto">
															<img className="w-100" src={i} alt="" />
														</div>
													</div>
													<div className="text-center">
														<h5 className="mt-4 mb-2 color1 f18 circe">{t}</h5>
														<p className="color2 f16 circe">{d}</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>

								<div className="row d-flex d-md-none gy-4">
									{data.splice(0, 3).map((prev, ind) => {
										const { i, t, d } = prev;
										return (
											<div
												key={ind}
												className="col-10 col-md-6 col-md-4 mt-5 mx-auto"
											>
												<div className="d-flex flex-column justify-content-center align-items-center">
													<div className="row">
														<div className="col-10 mx-auto">
															<img className="w-100" src={i} alt="" />
														</div>
													</div>
													<div className="text-center">
														<h5 className="mt-4 mb-2 color1 f18 circe">{t}</h5>
														<p className="color2 f16 circe">{d}</p>
													</div>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container-fluid d-block d-md-none py-5">
				<div className="row gy-4">
					{data.splice(0, 3).map((prev, ind) => {
						const { i, t, d } = prev;
						return (
							<div key={ind} className="col-10 col-md-6 col-md-4 mt-5 mx-auto">
								<div className="d-flex flex-column justify-content-center align-items-center">
									<div className="row">
										<div className="col-10 mx-auto">
											<img className="w-100" src={i} alt="" />
										</div>
									</div>
									<div className="text-center">
										<h5 className="mt-4 mb-2 color1 f18 circe">{t}</h5>
										<p className="color2 f16 circe">{d}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default CertificationDetail;
