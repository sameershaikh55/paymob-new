import React from "react";

const MoDetails = ({ adminP }) => {
	var data;

	if (adminP) {
		data = [
			{
				t: (
					<h5 className="fw600 color1 mb-4">
						<span className="bottomLineGray pb-2">Branded</span> experience
					</h5>
				),
				d: "We customise your Tap to Phone features to meet your spesific brand identity, for continuity accross all back-end and merchant facing tools.",
			},
			{
				t: (
					<h5 className="fw600 color1 mb-4">
						<span className="bottomLineGray pb-2">At a gla</span>nce reporting
					</h5>
				),
				d: "Gain insights into how and when your business customers are using their solution, along with the spending habits of the end-customer.",
			},
			{
				t: (
					<h5 className="fw600 color1 mb-4">
						<span className="bottomLineGray pb-2">Access a</span>
						nywhere, anytime
					</h5>
				),
				d: "Keep on top of payments from anywhere in the world from any laptop or smartphone.",
			},
			{
				t: (
					<h5 className="fw600 color1 mb-4">
						<span className="bottomLineGray pb-2">Transac</span>tion overview
					</h5>
				),
				d: "View all business customer transactions in one place, filter by top performing terminals over any time period.",
			},
		];
	} else {
		data = [
			{
				t: (
					<h5 className="fw600 color1 mb-4">
						<span className="bottomLineGray pb-2">Ready-to</span>-go
					</h5>
				),
				d: "Hit the ground running and begin onboarding new merchants from day one.",
			},
			{
				t: (
					<h5 className="fw600 color1 mb-4">
						<span className="bottomLineGray pb-2">Branded </span>experience
					</h5>
				),
				d: "An entirely adaptable framework. Utalise our pre-built onboarding form, or work with us to localise and unify your unique brand identity within our exisiting architecture.",
			},
			{
				t: (
					<h5 className="fw600 color1 mb-4">
						<span className="bottomLineGray pb-2">Time sa</span>ving
					</h5>
				),
				d: "Utalising our exisiting merchant onboarding allows our clients the freedom to focus on their own business while merchants onboard themselves to your payment platform.",
			},
			{
				t: (
					<h5 className="fw600 color1 mb-4">
						<span className="bottomLineGray pb-2">Seamless</span> KYC
					</h5>
				),
				d: "Paymob oversee the know your customer (KYC) process, checks, ID verification to align with all neccesary requirements.",
			},
		];
	}

	return (
		<div className={`sdk_detail_container ${!adminP && "mt-5 mt-md-0"}`}>
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

export default MoDetails;
