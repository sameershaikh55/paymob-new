import React from "react";

const JobOpening = () => {
	return (
		<div className="career_container d-flex justify-content-center align-items-center text-center">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="gotham fw-bolder">Careers at Paymob.</h1>
							<div className="row">
								<div className="col-12 col-sm-11 col-md-10 col-lg-9 col-xl-8 mx-auto my-1 my-sm-3">
									<p className="color2 f20 gotham lh27 fw-bolder">
										There are currently no vacancies available.
									</p>
									<p className="color2 f20 gotham lh27">
										However, we are always keen to meet energetic and talented
										professionals who would like to join our team.
									</p>
									<p className="color2 f20 gotham lh27">
										If you wish to be considered for any future positions,
										please send your CV and covering letter to:
									</p>
									<p>
										<a
											className="text-decoration-none color2 f18 crice lh27 fw600"
											href="mailto:careers@paymobtech.com"
										>
											careers@paymobtech.com
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default JobOpening;
