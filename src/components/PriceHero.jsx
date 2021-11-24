import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const PriceHero = () => {
	return (
		<div className="hero_container pricing mt-lg-5">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="row align-items-center">
								<div className="col-12 col-md-8 col-lg-6">
									<h1 className="fw-bolder">Basic fee setup</h1>
									<p className="mt-3 mt-md-4 fw-bold">
										Paymob fees are individually tailored to each client, we
										offer 4 types of accounts, from flat rate to bespoke. If you
										are interested in joining forces with us to launch your own
										Tap to Phone solution, get in touch or request a demo.{" "}
									</p>
									<a
										target="blank"
										href="https://airtable.com/shrL21Fd1xLND39mK"
									>
										<button className="py-2 px-3 border-0 f18 mt-2 mt-md-3">
											Request demo <IoIosArrowForward />
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PriceHero;
