import React from "react";

const AboutDetail = () => {
	return (
		<div className="aboutDetail_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-8 mx-auto mx-md-0 ms-md-auto">
							<div className="d-flex flex-column">
								<h5 className="text-white f22 gotham fw-bold mb-4">
									<span>Our hist</span>ory
								</h5>
								<div className="second text-white">
									<p className="crice f16 lh27 fw600">
										Our founders have specialised for 10 years as experts in the
										fintech space as providers of electronic payment services,
										bank processing systems, mobile devices and payment
										terminals. Developing innovative, market-leading products
										that meet all international security standards.
									</p>
									<p className="crice f16 lh27 fw600 mt-3">
										In 2019, having noticed a dynamic shift in consumer
										behaviour, and the rise in digital payments, they decided to
										develop a payment gateway and accompanying digital
										infrastructure to enable any business to accept payments
										with the same ease and accessibility as their customers were
										making them - thus the smartphone terminal was born. In
										2021, after three years of development, testing and rigorous
										certification processes, Paymob Smart Payments was ready to
										launch.
									</p>
								</div>
							</div>
							<div className="d-flex flex-column mt-5">
								<h5 className="text-white f22 gotham fw-bold mb-4">
									<span>Our miss</span>ion
								</h5>
								<div className="second text-white">
									<p className="crice f16 lh27 fw600">
										At Paymob we want to enable any business, both large and
										small to provide their own Tap to Phone financial services,
										transforming ordinary smartphones into a direct card reading
										terminal. Whether thats embedding our technology into an
										existing app, or working with us to build a bespoke SoftPOS
										application for merchant customers.
									</p>
									<p className="crice f16 lh27 fw600 mt-3">
										– We are ushering in the next generation of payments.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutDetail;
