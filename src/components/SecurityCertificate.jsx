import React from "react";
import Slider from "react-slick";
import b1 from "../assets/securityCertificate/i1.png";
import b2 from "../assets/securityCertificate/i2.svg";
import b3 from "../assets/securityCertificate/i3.svg";

const SecurityCertificate = () => {
	var settings = {
		centerMode: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		centerPadding: 0,
		responsive: [
			{
				breakpoint: 768,	
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
				},
			},
		],
	};

	const data = [
		{
			i: b1,
		},
		{
			l: "t",
		},
		{
			i: b2,
		},
		{
			l: "t",
		},
		{
			i: b3,
		},
	];

	const data2 = [
		{
			i: b1,
		},
		{
			i: b2,
		},
		{
			i: b3,
		},
	];

	return (
		<div className="sdk_brand_container mt-5 mb-4">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<h6 className="text-center me-0 me-md-5 mb-4 color2 f18 crice fw-bold">
								Security certifications
							</h6>

							<div className="d-block d-lg-none sliderContainer px-3">
								<Slider {...settings}>
									{data2.map((p, i) => {
										return (
											<div key={i} className="text-center px-5 px-lg-0">
												<img src={p.i} alt="" className="mx-auto w-100" />
											</div>
										);
									})}
								</Slider>
							</div>

							<div className="d-none d-lg-flex justify-content-center align-items-start flex-wrap">
								{data.map((p, i) => {
									return (
										<div key={i} className="mt-5 mt-lg-0 px-3">
											{(p.l && <div className="line"></div>) || (
												<>
													<img src={p.i} alt="" />
												</>
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

export default SecurityCertificate;
