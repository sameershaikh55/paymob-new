import React from "react";

const SoftDetails = () => {
	const data = [
		{
			t: (
				<h5 className="fw600 text-white mb-4">
					<span className="bottomLineGrayLight pb-2">Bespoke </span>technology
				</h5>
			),
			d: "An adaptable solution designed to fit your own branding style for both back end portals to customer facing interfaces. Powered by paymob, looks like you!",
		},
		{
			t: (
				<h5 className="fw600 text-white mb-4">
					<span className="bottomLineGrayLight pb-2">Light a</span>
					nd portable
				</h5>
			),
			d: "Our SDK can fit into your existing app behind your own branding, or as an external redirect to our Paymob SoftPOS app.",
		},
		{
			t: (
				<h5 className="fw600 text-white mb-4">
					<span className="bottomLineGrayLight pb-2">Any smar</span>
					tphone is a POS
				</h5>
			),
			d: "Immediate and smooth recall to your own app upon payment acceptance.",
		},
		{
			t: (
				<h5 className="fw600 text-white mb-4">
					<span className="bottomLineGrayLight pb-2">Paperles</span>s e-receipts
				</h5>
			),
			d: "Get the most out of our solution with our digital merchant onboarding, pre-built client and admin dashboards and PCI-DSS L1 security standards.",
		},
	];

	return (
		<div className="sdk_detail_container softDetails mt-5">
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

export default SoftDetails;
