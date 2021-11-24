import React from "react";
import i2 from "../assets/callback/i2.png";
import i3 from "../assets/callback/i3.png";
import i5 from "../assets/callback/i5.png";
import i6 from "../assets/callback/i6.png";

const CallbackApp = () => {
	return (
		<>
			{/* section one start */}
			<div className="header_containerSize">
				<div className="callbackApp_container">
					<div className="page_container">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-lg-12 mx-auto">
									<div className="col-12 col-sm-10 col-md-8 col-lg-5 ms-auto text-end">
										<h1 className="f34 gotham color1 fw600 lh71">
											Our App-to-app callback flow
										</h1>
										<p className="crice f16 lh27 letterSpace fw600">
											With our API’s you can integrate Paymob payments into your
											existing frontline payment flow, or build our APIs into
											your white label SoftPOS app.
										</p>
									</div>

									<div className="row align-items-center mt-5">
										<div className="col-10 col-sm-11 col-md-6 mx-auto order-1 order-md-0">
											<img className="w-100" src={i2} alt="" />
										</div>
										<div className="col-md-6 mx-auto text-center mb-5 mb-md-0">
											<h1 className="f64 orangeC lh71 gotham fw-bold">
												1.{" "}
												<span className="f35 letterSpace lh27 fw-bold color1">
													Authorisation
												</span>
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* section one end */}

			{/* section two start */}
			<div className="callbackPayment_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-10 mx-auto ms-md-auto">
								<div className="row align-items-center">
									<div className="col-12 col-md-7 col-lg-9 text-center">
										<h1 className="f64 color5 lh71 gotham fw-bold">
											2.
											<span className="f35 ms-3 letterSpace lh27 fw-bold color1">
												Payment initiation
											</span>
										</h1>
									</div>
									<div className="col-8 col-md-5 mx-auto col-lg-3 text-center mt-5 mt-md-0">
										<img className="w-100 text-center" src={i3} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* section two end */}

			{/* section three start */}
			<div className="header_containerSize">
				<div className="callbackPayment2_container">
					<div className="page_container">
						<div className="container-fluid">
							<div className="row">
								<div className="col-11 col-lg-10 mx-auto ms-md-auto">
									<div className="row align-items-center">
										<div className="col-10 col-sm-11 col-md-6 mx-auto order-1 order-md-0">
											<img className="w-100" src={i5} alt="" />
										</div>
										<div className="col-md-6 mx-auto text-center mb-5 mb-md-0">
											<h1 className="f64 orangeC lh71 gotham fw-bold">
												3.{" "}
												<span className="f35 letterSpace lh27 fw-bold color1">
													Payment processing
												</span>
											</h1>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* section three end */}

			{/* section fourth start */}
			<div className="callbackPayment_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-10 mx-auto ms-md-auto">
								<div className="row align-items-center">
									<div className="col-12 col-md-7 col-lg-9 text-center">
										<h1 className="f64 color5 lh71 gotham fw-bold">
											4.
											<span className="f35 ms-3 letterSpace lh27 fw-bold color1">
												Transaction result
											</span>
										</h1>
									</div>
									<div className="col-8 col-md-5 mx-auto col-lg-3 text-center mt-5 mt-md-0">
										<img className="w-100 text-center" src={i6} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* section fourth end */}
		</>
	);
};

export default CallbackApp;
