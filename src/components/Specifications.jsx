import React from "react";

// IMPORTING IMAGES
import i1 from "../assets/specification/bluetooth.svg";
import i2 from "../assets/specification/smartCard.svg";
import i3 from "../assets/specification/communications.svg";
import i4 from "../assets/specification/display.svg";
import i5 from "../assets/specification/orderTaking.svg";
import i6 from "../assets/specification/nfc.svg";
import i7 from "../assets/specification/audio.svg";
import i8 from "../assets/specification/battery.svg";
import i9 from "../assets/specification/weight.svg";
import i10 from "../assets/specification/dimensions.svg";
import i11 from "../assets/specification/indicatorLight.svg";
import i12 from "../assets/specification/keys.svg";
import i13 from "../assets/specification/processor.svg";
import i14 from "../assets/specification/memory.svg";
import i15 from "../assets/specification/ports.svg";
import i16 from "../assets/specification/certificats.svg";
import i17 from "../assets/specification/enviromental.svg";
import i18 from "../assets/specification/mangstripe.svg";

const Specifications = () => {
	const data = [
		{ i: i1, t: "Bluetooth" },
		{ i: i2, t: "Smart card" },
		{ i: i3, t: "Communications", d: "Bluetooth 3.0+BLE" },
		{ i: i4, t: "Display", d: "128x64 LCD, Backlight" },
		{ i: i5, t: "Order taking" },
		{ i: i6, t: "NFC" },
		{ i: i7, t: "Audio", d: "Speaker | Microphone" },
		{ i: i8, t: "Battery" },
		{ i: i9, t: "Weight", d: "105kg" },
		{ i: i10, t: "Dimensions", d: "116 x 66 x 14.5 mm L x W x H" },
		{
			i: i11,
			t: "Indicator lights",
			d: "1 Charging indicator 4 LED Indicators",
		},
		{
			i: i12,
			t: "Keys",
			d: "15 Keys Including 3 Functional keys",
		},
		{
			i: i13,
			t: "Processor",
			d: "ARM Secure Processor",
		},
		{
			i: i14,
			t: "Memory",
			d: "RAM: 1MB FLASH: 8MB",
		},
		{
			i: i15,
			t: "Peripheral ports",
			d: "1 Powered USB Type-C, USB Slave",
		},
		{
			i: i16,
			t: "Certificates",
			d: "PCI PTS 5.X | EMV L1 and L2 | EMV CL | Level 1 Mastercard Paypass | Visa paywave | Amex Expresspay | Mastercard TQM | BIS",
		},
		{
			i: i17,
			t: "Environmental",
		},
		{
			i: i18,
			t: "Magstripe",
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
											className="col-6 col-sm-4 col-lg-3 text-center"
										>
											<div className="specification_card">
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

export default Specifications;
