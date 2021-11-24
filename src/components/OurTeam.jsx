import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

// IMPORTS
import t1 from "../assets/ourTeam/t1.png";
import t2 from "../assets/ourTeam/t2.png";
import t3 from "../assets/ourTeam/t3.png";
import t4 from "../assets/ourTeam/t4.png";

const OurTeam = () => {
	const data = [
		{
			i: t1,
			t: "Grigory Gurbanov",
			d: "CTO & Founder",
		},
		{
			i: t2,
			t: "Kosta Du",
			d: "CEO & Co-Founder",
		},
		{
			i: t3,
			t: "Rod P",
			d: "IR Manager",
		},
		{
			i: t4,
			t: "Kate L",
			d: "Project Manager",
		},
	];

	return (
		<div className="ourTeam_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<p className="orangeC gotham mb-0 f18">Our team</p>

							<div className="row mt-md-3">
								{data.map((prev, ind) => {
									return (
										<div
											key={ind}
											className="col-6 col-md-4 col-lg-3 mt-4 text-center"
										>
											<img className="w-100" src={prev.i} alt="" />
											<h6 className="color2 gotham f16 mt-2 mb-1">{prev.t}</h6>
											<p className="color2 f16 crice fw600">{prev.d}</p>
										</div>
									);
								})}
							</div>

							<div className="col-12 text-end mt-4 mt-md-5">
								<Link to="/team">
									<button className="themeBtn bg-white gotham fw-bold py-2 px-3 border-0 f16">
										Meet the team <IoIosArrowForward />
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurTeam;
