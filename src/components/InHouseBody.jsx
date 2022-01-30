import React from "react";
import i1 from "../assets/InHouse/i1.png";

const InHouseBody = () => {
	return (
		<>
			<div className="inHouseBody_hero">
				<div className="page_container">
					<div className="container-fluid text-white">
						<h1 className="text-start text-md-center gotham f64 fw-bold lh71">
							In-house deployment
						</h1>
						<p className="f16 letterSpace mt-3 mb-3 mt-md-5 mb-md-5 fw600 gotham">
							To host Paymob services for a working configuration, we recommend
							using two hardware servers with virtualization. One for operation
							of the Paymob system and the second for operation of the Database
							(for launching a pilot project, all services can be deployed on
							one hardware server).
						</p>

						<ol className="pt-5 mb-5">
							<li className="fw-bold gotham">
								Paymob System
								<ol>
									<li className="fw-bold gotham">Paymob.core</li>
									<ol>
										<li className="fw-bold">
											Paymob.Internal (for active-active sceheme)
										</li>
									</ol>
									<li className="fw-bold">Paymob.Admin</li>
									<li className="fw-bold">Paymob.LKM</li>
									<li className="fw-bold">Paymob.Back</li>
									<li className="fw-bold">Paymob.App</li>
								</ol>
							</li>
							<li className="fw-bold pt-3 mt-5 pt-md-5 gotham">Database</li>
							<p className="f14 letterSpace mb-5 fw600 gotham">
								The architecture of the system allows you to run the system on
								one instance as well as on several to increase the performance
								of individual parts of the iystem. By deploying the system on a
								small configuration, you can subsequently increase the system
								power horizontally by adding new instances.
							</p>
							<h6 className="fw-bold mt-3 mt-md-5 pt-md-4 gotham">
								General scheme of the system
							</h6>
							<p className="f14 letterSpace mb-4 fw600 gotham">
								This diagram shows an example of starting the system on two
								hardware servers with virtualiration support. On one of the
								servers, database instances are deployed according to the
								master-stave scheme (which will ensure high performance and data
								safety for the database), on the second. the Paymob system is
								deployed according to the active-active scheme.
							</p>
							<p className="f14 letterSpace mb-5 fw600 gotham">
								Requests between system elements are distributed by the balancer
								of the bank, increasing overall productivity.
							</p>
						</ol>
					</div>
				</div>
			</div>

			<div className="inHouseBody_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								<div className="mb-5">
									<img className="w-100" src={i1} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InHouseBody;
