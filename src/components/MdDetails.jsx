import React from "react";

const MdDetails = () => {
	const data = [
		{
			t: (
				<h5 className="fw600 color1 mb-4 text-white">
					<span className="bottomLineGrayLight pb-2">Full tran</span>
					saction overview
				</h5>
			),
			d: "An adaptable solution designed to fit your own branding style for both back end portals to customer facing interfaces. Powered by paymob, looks like you!",
		},
		{
			t: (
				<h5 className="fw600 color1 mb-4 text-white">
					<span className="bottomLineGrayLight pb-2">Business</span>{" "}
					intelligence tools
				</h5>
			),
			d: "Upload products and services into categories to manage and track sales in real time.",
		},
		{
			t: (
				<h5 className="fw600 color1 mb-4 text-white">
					<span className="bottomLineGrayLight pb-2">Access a</span>
					nywhere, anytime
				</h5>
			),
			d: "Keep on top of payments from anywhere in the world from any laptop or smartphone.",
		},
		{
			t: (
				<h5 className="fw600 color1 mb-4 text-white">
					<span className="bottomLineGrayLight pb-2">Instant a</span>nalytics
				</h5>
			),
			d: "Analytics at your fingertips with easy to digest reports, staff insights and a comprehensive transaction history.",
		},
	];
	return (
		<div className="sdk_detail_container softDetails mt-5 mt-md-0">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 mx-auto">
							<div className="row">
								{data.map((prev, i) => {
									return (
										<div className="col-sm-6 col-md-4 col-lg-3 mt-5" key={i}>
											<h6 className="gotham f16 max_content">{prev.t}</h6>
											<p className="col-11 crice fw600 color6">{prev.d}</p>
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

export default MdDetails;
