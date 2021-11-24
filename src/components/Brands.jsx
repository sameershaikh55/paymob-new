import React from "react";
import Slider from "react-slick";
import b1 from "../assets/brands/b1.png";
import b2 from "../assets/brands/b2.png";
import b3 from "../assets/brands/b3.png";
import b4 from "../assets/brands/b4.png";

const Brands = () => {
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
			t: "Accredited and certified by",
		},
		{
			l: "t",
		},
		{
			i: b2,
			t: "Authorised",
		},
		{
			l: "t",
		},
		{
			i: b3,
			t: "A proud alumni of",
		},
		{
			l: "t",
		},
		{
			i: b4,
			t: "Member of",
		},
	];

	const data2 = [
		{
			i: b1,
			t: "Accredited and certified by",
		},
		{
			i: b2,
			t: "Authorised",
		},
		{
			i: b3,
			t: "A proud alumni of",
		},
		{
			i: b4,
			t: "Member of",
		},
	];

	return (
		<div className="brand_container mt-5">
			<div className="header_containerSize">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<div className="d-block d-lg-none sliderContainer px-3">
								<Slider {...settings}>
									{data2.map((p, i) => {
										return (
											<div key={i} className="text-center  px-4 px-lg-0">
												<p className="color1 f16">{p.t}</p>
												<img src={p.i} alt="" className="mx-auto w-100" />
											</div>
										);
									})}
								</Slider>
							</div>

							<div className="d-none d-lg-flex justify-content-between align-items-start flex-wrap">
								{data.map((p, i) => {
									return (
										<div key={i} className="mt-5 mt-lg-0">
											{(p.l && <div className="line"></div>) || (
												<>
													<p className="color1 f16">{p.t}</p>
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

export default Brands;
