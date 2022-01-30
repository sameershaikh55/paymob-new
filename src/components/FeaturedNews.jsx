import React from "react";

const FeaturedNews = () => {
	const data = [
		{
			t: "MAY 19, 2021",
			d: "Interview with Kosta Du, CEO and Co-Founder at Soft POS Payment Platform: Paymob",
		},
		{
			t: "APR 06, 2021",
			d: "Tap on Phone Payments – the Future of Contactless",
		},
		{
			t: "APR 04, 2021",
			d: "Ten Startups Graduate from Techstars Hub71 Accelerator Programme",
		},
		{
			t: "MAR 01, 2021",
			d: "Paymob Technologies Announces New Channel Partner TÆPP AS",
		},
		{
			t: "SEP 27, 2020",
			d: "Paymob: All-in-One Smart POS Terminals",
		},
	];

	return (
		<div className="featureNews_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							{/* <h1 className="color1 gotham f34 fw600">Featured news</h1> */}
							<ul className="list-unstyled mt-5">
								{data.map((prev, ind) => {
									const { t, d } = prev;
									return (
										<li
											key={ind}
											className="d-flex flex-column flex-lg-row mb-5"
										>
											<div className="me-4 orangeC gotham f18 lh27 letterSpace">
												{t}
											</div>
											<div className="letterSpace gotham f18 lh27 text-white fw600 text-decoration-underline">
												{d}
											</div>
										</li>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedNews;
