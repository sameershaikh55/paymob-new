import React from "react";

// IMPORTS
import { IoIosArrowForward } from "react-icons/io";
import t1 from "../assets/ourTeam/t1.png";
import t2 from "../assets/ourTeam/t2.png";
import t3 from "../assets/ourTeam/t3.png";
import t4 from "../assets/ourTeam/t4.png";
import t5 from "../assets/ourTeam/t5.png";
import t7 from "../assets/ourTeam/t7.png";
import t9 from "../assets/ourTeam/t9.png";
import t10 from "../assets/ourTeam/t10.png";
import t11 from "../assets/ourTeam/t11.png";
import t12 from "../assets/ourTeam/t12.png";
import t13 from "../assets/ourTeam/t13.png";
import t15 from "../assets/ourTeam/t15.png";
import t16 from "../assets/ourTeam/t16.png";
import { NavLink } from "react-router-dom";

const TeamBody = () => {
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
			i: t5,
			t: "Charlotte P",
			d: "Social Media & Community Manager",
		},
		{
			i: t15,
			t: "Andrew",
			d: "Lead Front End Developer",
		},
		{
			i: t4,
			t: "Kate L",
			d: "Project Manager",
		},
		{
			i: t11,
			t: "June R",
			d: "Business Development Executive",
		},
		{
			i: t10,
			t: "Bulat M",
			d: "Graphic Designer",
		},
		{
			i: t16,
			t: "Anton S",
			d: "Back End Developer",
		},
		{
			i: t13,
			t: "Dmitry P",
			d: "Lead Generation Executive",
		},
		{
			i: t7,
			t: "Alex B",
			d: "Compliance Officer",
		},
		{
			i: t12,
			t: "Kate I",
			d: "Communications Associate",
		},
		{
			i: t9,
			t: "Alex K",
			d: "Dev Ops Engineer",
		},
		{
			i: t10,
			t: "Bulat M",
			d: "Graphic Designer",
		},
	];

	return (
		<div className="our_team_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="color1 gotham fw-bold">Meet the team</h1>

							<div className="row mt-2 mt-md-3">
								{data.map((prev, ind) => {
									return (
										<div
											key={ind}
											className={`${
												(ind + 1 < data.length && "col-6 col-md-4 col-lg-3") ||
												"col-12 col-md-4 col-lg-3"
											} text-center mt-3`}
										>
											{(ind + 1 < data.length && (
												<>
													<img className="w-100" src={prev.i} alt="" />
													<h6 className="color2 gotham f16 mt-2 mb-1">
														{prev.t}
													</h6>
													<p className="color2 f16 crice fw600">{prev.d}</p>
												</>
											)) || (
												<div className="d-flex flex-column align-items-center align-items-md-start justify-content-end height_set mt-3 mt-sm-0">
													<p className="color2 gotham">Want to work with us?</p>
													<NavLink to="/contact">
														<button className="themeBtn bg-white gotham fw-bold py-2 px-3 border-0 f16">
															View our job openings <IoIosArrowForward />
														</button>
													</NavLink>
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
	);
};

export default TeamBody;
