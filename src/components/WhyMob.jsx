import React from "react";
import whyMob from "../assets/gifs/Globe.gif";

const WhyMob = () => {
	const data = [
		{
			t: (
				<h3 className="f20 fw700">
					<span className="bottomLineGray pb-1">Next gene</span>ration
					technology
				</h3>
			),
			d: "Sleek and smart",
		},
		{
			t: (
				<h3 className="f20 fw700">
					<span className="bottomLineGray pb-1">Bespok</span>e
				</h3>
			),
			d: "An entirly customisable app in line with your brand identity.",
		},
		{
			t: (
				<h3 className="f20 fw700">
					<span className="bottomLineGray pb-1">Seamle</span>ss ease of use
				</h3>
			),
			d: "Our payment solutions are easy to navigate for both our partners and their small business customers.",
		},
		{
			t: (
				<h3 className="f20 fw700">
					<span className="bottomLineGray pb-1">Compe</span>titive transaction
					fee
				</h3>
			),
			d: "We offer an affordable flat-rate fee of 1.5% RRP",
		},
		{
			t: (
				<h3 className="f20 fw700">
					<span className="bottomLineGray pb-1">Simple </span>SDK and in-app API
				</h3>
			),
			d: "Our app-to-app API and SDK integration is developer friendly and easy to embed into your existing product.",
		},
		{
			t: (
				<h3 className="f20 fw700">
					<span className="bottomLineGray">Excelle</span>nt customer support
				</h3>
			),
			d: "We're here whenever you need us, from front end customer onboarding to back end developer support.",
		},
	];

	return (
		<div className="whyMob_container">
			<div className="d-flex">
				<div className="d-none d-lg-block img_container">
					<img src={whyMob} alt="" />
				</div>
				<div className="container-fluid mt-5 ps-2 ps-md-4">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="whyMobTop">
								<p className="f18 topP orangeC mb-0 mb-md-2">Why Paymob?</p>
								<h1 className="fw600">
									On-demand finance solutions for the moving economy.
								</h1>
								<p className="f18 fw-bold">
									Enhance your financial service offering and generate an
									additional revenue stream using our bespoke finance solutions,
									on the go, anywhere in the world.
								</p>
							</div>

							<div className="row">
								{data.map((prev, i) => {
									const { t, d } = prev;
									return (
										<div key={i} className="mobCard col-6 mt-4">
											{t}
											<p className="mt-3 f14 fw-bold mt-4 pt-3">{d}</p>
										</div>
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

export default WhyMob;
