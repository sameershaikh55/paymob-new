import React from "react";

const SdkDetails = () => {
	const data = [
		{
			t: <h5 className="fw600 text-white mb-4">Ready-to-go</h5>,
			d: "An adaptable solution designed to fit your own branding style for both back end portals to customer facing interfaces. Powered by Dapio, looks like you!",
		},
		{
			t: <h5 className="fw600 text-white mb-4">Branded experience</h5>,
			d: "Our SDK can fit into your existing app behind your own branding, or as an external redirect to our Dapio SoftPOS app.",
		},
		{
			t: <h5 className="fw600 text-white mb-4">Instant callback</h5>,
			d: "Immediate and smooth recall to your own app upon payment acceptance.",
		},
		{
			t: <h5 className="fw600 text-white mb-4">Back-end system components</h5>,
			d: "Get the most out of our solution with our digital merchant onboarding, pre-built client and admin dashboards and PCI-DSS L1 security standards.",
		},
	];

	return (
		<div className="sdk_detail_container">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 mx-auto">
							<div className="row">
								{data.map((prev, i) => {
									return (
										<div className="col-sm-6 col-md-4 col-lg-3 mt-5" key={i}>
											<h6 className="text-white gotham f16 max_content">
												{prev.t}
											</h6>
											<p className="text-white col-11 crice fw600">{prev.d}</p>
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
