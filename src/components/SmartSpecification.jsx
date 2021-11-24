import React from "react";

// IMPORTING IMAGES
import i1 from "../assets/specification/os.svg";
import i2 from "../assets/specification/gps.svg";
import i3 from "../assets/specification/communications.svg";
import i4 from "../assets/specification/display.svg";
import i5 from "../assets/specification/weight.svg";
import i6 from "../assets/specification/smartCard.svg";
import i7 from "../assets/specification/dimensions.svg";
import i8 from "../assets/specification/battery.svg";
import i9 from "../assets/specification/keys.svg";
import i10 from "../assets/specification/processor.svg";
import i11 from "../assets/specification/ports.svg";
import i12 from "../assets/specification/cardSlot.svg";
import i13 from "../assets/specification/memory.svg";
import i14 from "../assets/specification/certificats.svg";
import i15 from "../assets/specification/configuration.svg";
import i16 from "../assets/specification/enviromental.svg";
import i17 from "../assets/specification/camera.svg";

const SmartSpecification = () => {
	const data = [
		{ i: i1, t: "OS", d: "Android 5.1" },
		{ i: i2, t: "GPS", d: "GPS | GLONASS | BeiDou" },
		{ i: i3, t: "Communications", d: "4G | 3G | 2G" },
		{ i: i4, t: "Display", d: "5 inch colour screen 1280 x 720" },
		{ i: i5, t: "Weight", d: "500g (battery included)" },
		{ i: i6, t: "IC card" },
		{ i: i7, t: "Dimensions", d: "206 x 82 x 48 mm L x W x H" },
		{ i: i8, t: "Battery", d: "Lithium-ion Poly Battery | 3.8V/6000mAh" },
		{ i: i9, t: "Keys", d: "2 Physical keys | 3 Touch keys" },
		{ i: i10, t: "Processor", d: "Security CPU with 32-bit high performance" },
		{
			i: i11,
			t: "Peripheral ports",
			d: "1 micro USB2.0 1 Pogo pin port 1 standard 3.5mm earphone port",
		},
		{
			i: i12,
			t: "Card slot",
			d: "2 SAM card slots 2 SIM slots 1 Micro SD card holder",
		},
		{
			i: i13,
			t: "Memory",
			d: "1G RAM (optional 2G) 8G FLASH ROM (optional 16G) Micro SD (TF) port Support maximum 32GB",
		},
		{
			i: i14,
			t: "Certificates",
			d: "PCI PTS 5.X | EMV L1 and L2 | EMV CL | Level 1 Mastercard Paypass | Visa paywave | Amex Expresspay | Mastercard TQM | BIS",
		},
		{
			i: i15,
			t: "Optional configurations",
			d: "Fingerprint identification | Smart docking station",
		},
		{
			i: i16,
			t: "Environmental",
		},
		{
			i: i17,
			t: "Camera",
			d: "Front camera 2mp rear camera",
		},
	];

	return (
		<div className="specification_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-lg-12 mx-auto">
							<h1 className="color1 fw-bold gotham">Specifications</h1>

							<div className="row inner_cont">
								{data.map((prev, ind) => {
									const { i, t, d } = prev;
									return (
										<div
											key={ind}
											className="specification_card col-6 col-6 col-sm-6 col-md-4 col-lg-3 text-center"
										>
											<img src={i} alt="" />
											<h6 className="gotham f20 color1 fw500 mb-0">{t}</h6>
											<p className="col-12 col-md-10 mx-auto text-center color2">
												{d}
											</p>
											{t === "Environmental" && (
												<p className="col-12 col-md-10 mx-auto text-center color2">
													Operating temperature: <br /> 0°C - 50°C <br />{" "}
													Storage temperature: <br /> -20°C - 70°C <br />{" "}
													Relative humidity: <br /> 5% - 95%, <br />{" "}
													Non-condensing
												</p>
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

export default SmartSpecification;
