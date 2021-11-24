import React from "react";

// IMPORTING IMAGES
import i1 from "../assets/specification/bluetooth.svg";
import i2 from "../assets/specification/wifi.svg";
import i3 from "../assets/specification/communications.svg";
import i4 from "../assets/specification/display.svg";
import i5 from "../assets/specification/coupon.svg";
import i6 from "../assets/specification/smartCard.svg";
import i7 from "../assets/specification/orderTaking.svg";
import i8 from "../assets/specification/scanning.svg";
import i9 from "../assets/specification/nfc.svg";
import i10 from "../assets/specification/dynamicQr.svg";
import i11 from "../assets/specification/audio.svg";
import i12 from "../assets/specification/gps.svg";
import i13 from "../assets/specification/battery.svg";
import i14 from "../assets/specification/camera.svg";
import i15 from "../assets/specification/weight.svg";
import i16 from "../assets/specification/dimensions.svg";
import i17 from "../assets/specification/indicatorLight.svg";
import i18 from "../assets/specification/keys.svg";
import i19 from "../assets/specification/touchscreen.svg";
import i20 from "../assets/specification/processor.svg";
import i21 from "../assets/specification/memory.svg";
import i22 from "../assets/specification/os.svg";
import i23 from "../assets/specification/cardSlot.svg";
import i24 from "../assets/specification/enviromental.svg";
import i25 from "../assets/specification/configuration.svg";
import i26 from "../assets/specification/ports.svg";
import i27 from "../assets/specification/certificats.svg";

const MiniSpecification = () => {
	const data = [
		{ i: i1, t: "Bluetooth", d: "BT 4.x" },
		{ i: i2, t: "WIFI", d: "2.4GHz IEEE802.1 1b/g/n" },
		{ i: i3, t: "Communications", d: "4G | 3G | 2G" },
		{ i: i4, t: "Display", d: "5 inch colour screen 1280 x 720" },
		{ i: i5, t: "Coupon", d: "verification" },
		{ i: i6, t: "IC card" },
		{ i: i7, t: "Order taking" },
		{ i: i8, t: "1D/2D scanning" },
		{ i: i9, t: "NFC" },
		{ i: i10, t: "Dynamic QR code" },
		{
			i: i11,
			t: "Audio",
			d: "Speaker | Microphone",
		},
		{
			i: i12,
			t: "GPS",
			d: "GPS | GLONASS | BeiDou",
		},
		{
			i: i13,
			t: "Battery",
		},
		{
			i: i14,
			t: "Camera",
			d: "2mp rear camera 1D | 2D barcode scan Optional: 5mp rear zoom camera",
		},
		{
			i: i15,
			t: "Weight",
			d: "220g",
		},
		{
			i: i16,
			t: "Dimensions",
			d: "150 x 75 x 16 mm L x W x H",
		},
		{
			i: i17,
			t: "Indicator lights",
			d: "4 NFC LEDs 1 charging indicator",
		},
		{
			i: i18,
			t: "Keys",
			d: "1 power key 1 function key 3 touch keys",
		},
		{
			i: i19,
			t: "Capacitive",
			d: "touchscreen",
		},
		{
			i: i20,
			t: "Processor",
			d: "23 - bit quad-core 1.1Ghz application processor High performance secure processor",
		},
		{
			i: i21,
			t: "Memory",
			d: "1GB RAM  (optional 2 GB) 8GB ROM (optional 16GB)",
		},
		{
			i: i22,
			t: "OS",
			d: "Android 7.1 Ssecure operating system",
		},
		{
			i: i23,
			t: "Card slot",
			d: "1 SIM 2 PSAM",
		},
		{
			i: i24,
			t: "Environmental",
		},
		{
			i: i25,
			t: "Optional configurations",
			d: "Docking station | ASD18 bluetooth printer docking station",
		},
		{
			i: i26,
			t: "Peripheral ports",
			d: "1USB OTG | Type - C | 5V",
		},
		{
			i: i27,
			t: "Certificates",
			d: "PCI PTS 5.X | EMV L1 and L2 | EMV CL | Level 1 Mastercard Paypass | Visa paywave | Amex Expresspay | Mastercard TQM | BIS",
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

export default MiniSpecification;
