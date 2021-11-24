import React from "react";

const SdkDetails = () => {
	const data = [
		{
			t: (
				<h5 className="fw600 color1 mb-4">
					<span className="bottomLineGray pb-2">Ready-to</span>-go
				</h5>
			),
			d: "An adaptable solution designed to fit your own branding style for both back end portals to customer facing interfaces. Powered by paymob, looks like you!",
		},
		{
			t: (
				<h5 className="fw600 color1 mb-4">
					<span className="bottomLineGray pb-2">Branded </span>experience
				</h5>
			),
			d: "Our SDK can fit into your existing app behind your own branding, or as an external redirect to our Paymob SoftPOS app.",
		},
		{
			t: (
				<h5 className="fw600 color1 mb-4">
					<span className="bottomLineGray pb-2">Instant ca</span>llback
				</h5>
			),
			d: "Immediate and smooth recall to your own app upon payment acceptance.",
		},
		{
			t: (
				<h5 className="fw600 color1 mb-4">
					<span className="bottomLineGray pb-2">Back-end</span> system
					components
				</h5>
			),
			d: "Get the most out of our solution with our digital merchant onboarding, pre-built client and admin dashboards and PCI-DSS L1 security standards.",
		},
	];

	return (
		<div className="sdk_detail_container mt-5">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 mx-auto">
							<div className="row">
								{data.map((prev, i) => {
									return (
										<div className="col-sm-6 col-md-4 col-lg-3 mt-5" key={i}>
											<h6 className="gotham f16 max_content">{prev.t}</h6>
											<p className="col-11 crice fw600">{prev.d}</p>
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

export default SdkDetails;
