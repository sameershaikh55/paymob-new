import React from "react";

const PressUpdate = () => {
	return (
		<div className="press_update_container d-flex justify-content-center align-items-center">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto text-center">
							<h1 className="color1 gotham f34 fw600">Press updates</h1>
							<p className="my-5 color2 crice f16 lh27 fw600 letterSpace">
								If you'd like to receive press releases, join our distribution
								list.
							</p>
							<div className="newsletterInp d-flex px-4 py-2">
								<input
									type="text"
									name=""
									id=""
									className="border-0 gotham bg-transparent w-100 pe-3"
									placeholder="joebloggs@email.com"
								/>
								<button className="ps-4 bg-transparent color1 f14 fw-bold">
									JOIN
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PressUpdate;
