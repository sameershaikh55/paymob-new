import React from "react";
import i3 from "../assets/InHouse/i3.png";
import i4 from "../assets/InHouse/i4.png";

const InHouseTableOne = () => {
	const data = [
		{
			tr: [
				"Test",
				"1 – 2",
				"Installing to application server and database on one server",
				"1 x 4 core",
				"6 GB",
				"1 x 7200 rpm",
			],
		},
		{
			tr: [
				"Small",
				"5",
				"Distributed installation of the database and application server",
				"2 x 4 core",
				"16 GB",
				"2 x 7200 rpm RAID I",
			],
		},
		{
			tr: [
				"Medium",
				"10",
				"Distributed installation of the database and application server",
				"4 x 4 core",
				"32 GB",
				"2 x 10,000 rpm RAID I",
			],
		},
		{
			tr: [
				"Large",
				"20",
				"Distributed installation of the database and application server",
				"4 x 6 core",
				"64 GB",
				"4 x 10,000 rpm RAID I",
			],
		},
	];

	const data2 = [
		{
			tr: [
				"Small",
				"2 x 4 core",
				"16 GB",
				"2 x 2700 rpm RAID I, 128 GB+",
				"Windows Server 2008+ 64bit, CentOS 6.5+ 64bit or RHEL 6.5+ 64bit",
				"Oracle Database 12 or PostgreSQL 10.7",
			],
		},
		{
			tr: [
				"Medium & large",
				"4 x 4 core",
				"32 GB",
				"2 x 10,000 rpm RAID I, 512 GB+",
				"Windows Server 2008+ 64bit, CentOS 6.5+ 64bit or RHEL 6.5+ 64bit",
				"Oracle Database 12 or PostgreSQL 10.7",
			],
		},
	];
	return (
		<div className="inHouse_table">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<p className="color2 gotham fw600 f16 letterSpace">
								Server configuration for Paymob services depending on the
								expected load.
							</p>

							<div className="table_container">
								<table className="table table-bordered text-center">
									<thead>
										<tr>
											<td className="color1 fw-bold gotham">
												Infrastructure size
											</td>
											<td className="color1 fw-bold gotham">TPS</td>
											<td className="color1 fw-bold gotham">Description</td>
											<td className="color1 fw-bold gotham">CPU</td>
											<td className="color1 fw-bold gotham">RAM</td>
											<td className="color1 fw-bold gotham">Storage system*</td>
										</tr>
									</thead>

									<tbody>
										{data.map((prev, i) => {
											return (
												<tr key={i}>
													{prev.tr.map((pre, ind) => {
														return (
															<td className="blackC f14 gotham" key={ind}>
																{pre}
															</td>
														);
													})}
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>

							<p className="color2 gotham fw600 f16 letterSpace mt-4 mt-md-5">
								In the case of the deployment of several servers according to
								the active-active scheme, it is necessary to use servers with
								equivalent power for uniform load distribution.
							</p>

							<p className="color2 gotham fw600 f16 letterSpace mt-4 mb-5">
								Configuration of the server providing the database for Paymob
								services depending on the load:
							</p>

							<div className="table_container">
								<table className="table table-bordered text-center mb-0">
									<thead>
										<tr>
											<td className="color1 fw-bold gotham">
												Infrastructure size
											</td>
											<td className="color1 fw-bold gotham">CPU</td>
											<td className="color1 fw-bold gotham">RAM</td>
											<td className="color1 fw-bold gotham">Storage system*</td>
											<td className="color1 fw-bold gotham">
												Operating system
											</td>
											<td className="color1 fw-bold gotham">Database</td>
										</tr>
									</thead>

									<tbody>
										{data2.map((prev, i) => {
											return (
												<tr key={i}>
													{prev.tr.map((pre, ind) => {
														return (
															<td className="blackC f14 gotham" key={ind}>
																{pre}
															</td>
														);
													})}
												</tr>
											);
										})}
									</tbody>
								</table>
								<p className="text-end mt-0 color2 gotham f16">
									*SSD is recommended instead of HDD
								</p>
							</div>

							<div className="col-11 col-md-10 mx-auto bankHost_img">
								<img className="w-100" src={i3} alt="" />
							</div>
							<div className="col-11 col-md-10 mx-auto bankHost_img">
								<img className="w-100" src={i4} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InHouseTableOne;
