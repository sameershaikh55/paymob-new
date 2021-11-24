import React from "react";

// IMPORTS
import newFeature from "../assets/gifs/Pin on glass (1).gif";

const NewFeature = () => {
	return (
		<div className="new_feature_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-md-6">
									<p className="orangeC gotham f18 mb-0 mb-md-2">
										New features
									</p>
									<div className="row">
										<div className="col-12 col-md-12">
											<h1 className="color1 gotham fw700">
												Payments without limits with Pin on Glass!
											</h1>
										</div>
									</div>
									<p className="underHead color1 f18 crice fw600">
										How does it work? Once the customer taps their card (or
										e-wallet) on the merchants smartphone, they simply type in
										their pin, and bingo! The payment is complete. The
										smartphone terminal is now a one-stop-shop for all
										transactions, no matter how big or small.
									</p>
								</div>
								<div className="col-md-6 text-center">
									<div className="col-12 col-sm-8 col-md-12 mx-auto ">
										<img className="w-100" src={newFeature} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewFeature;
