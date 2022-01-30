import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const DevelopersBody = () => {
	const data = [
		{
			t: "Create a demo account",
			d: "Test run our solution in minutes.",
			b: [
				{
					t: "Get demo",
					el: "https://airtable.com/shrL21Fd1xLND39mK",
				},
			],
		},
		{
			t: "App to App callback protocol",
			d: "How our app to app callback works within your existing framework.",
			b: [
				{
					t: "Download demo app",
					l: "/callback",
				},
			],
		},
		{
			t: "Merchant dashboard APIs",
			d: "API documentation to build your own merchant dashboard.",
			b: [
				{
					t: "Start building",
					el: "http://back.demo.Dapio.ru/swagger-ui.html",
				},
			],
		},
		{
			t: "Dapio SDK",
			d: "Learn how to integrate our SDK to leverage your own financial services.",
			b: [
				{
					t: "Learn more",
					l: "/androidSdk",
				},
			],
		},
		{
			t: "In-house deployment",
			b: [
				{
					t: "Learn more",
					l: "/inHouseDeployement",
				},
				// {
				// 	t: "Request brochure",
				// 	el: "",
				// },
			],
		},
		{
			// t: "In-house deployment",
			// b: [
			// 	{
			// 		t: "Learn more",
			// 		l: "/inHouseDeployement",
			// 	},
			// 	{
			// 		t: "Request brochure",
			// 		el: "/contact",
			// 	},
			// ],
		},
	];

	return (
		<>
			<div className="developers_hero">
				<div className="page_container">
					<div className="container-fluid">
						<div className="text-center">
							<h1 className="f64 gotham fw-bold text-white">Developer tools</h1>
							<p className="col-12 mt-2 mt-md-4 col-md-10 col-lg-6 mx-auto text-white letterSpace f16 crice fw-bold">
								Resources, references and links for developers to integrate with
								our SoftPOS payment ecosystem.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="developersBody_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-lg-12 mx-auto">
								<div className="mt-5">
									<h4 className="text-center f18 gotham letterSpace fw-bold mb-4">
										Build with Dapio
									</h4>

									<div className="row gx-4 gx-lg-5 gy-4 gy-lg-5">
										{data.map((prev, ind) => {
											return (
												<div key={ind} className="col-12 col-sm-6 col-md-4">
													{(data.length - 1 > ind && (
														<div className="developer_card d-flex flex-column justify-content-between p-3">
															<h5 className="f18 gotham letterSpace color1 fw600">
																{prev.t}
															</h5>
															<p className="crice fw-bold letterSpace f16 mb-0">
																{prev.d}
															</p>
															<div className="d-flex flex-column align-items-start">
																{prev.b.map((prev2, ind2) => {
																	console.log(prev2);
																	return (
																		<>
																			{(!prev2.el && (
																				<Link exact to={prev2.l}>
																					<button className="orangeC border-0 bg-transparent fw600 gotham f16 letterSpace">
																						{prev2.t}
																						<IoIosArrowForward className="orangeC" />
																					</button>
																				</Link>
																			)) || (
																				<a target="blank" href={prev2.el}>
																					<button className="orangeC border-0 bg-transparent fw600 gotham f16 letterSpace">
																						{prev2.t}
																						<IoIosArrowForward className="orangeC" />
																					</button>
																				</a>
																			)}
																		</>
																	);
																})}
															</div>
														</div>
													)) || (
														<div className="d-flex flex-column align-items-center align-items-md-start justify-content-end mt-2 mt-sm-0 h-100">
															<Link to="/contact">
																<button className="themeBtn bg-white gotham fw-bold py-2 px-3 border-0 f16">
																	Contact us <IoIosArrowForward />
																</button>
															</Link>
														</div>
													)}
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DevelopersBody;
