import * as React from "react";
import Dialog from "@mui/material/Dialog";

const Cookies = () => {
	const [open, setOpen] = React.useState(true);

	const handleClose = () => {
		setOpen(false);
		localStorage.setItem("cookies", false);
	};
	return (
		<div className="cookies_container">
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<div className="py-4 px-3 px-md-5">
					<h2 className="text-center gotham f24 fw-bold text-white">
						Privacy Policy and Cookies
					</h2>

					<p className="text-center mt-4 f12 gotham fw-bold text-white">
						COLLECTION AND PROCESSING OF PERSONAL DATA (based on data Protection
						Act 2018 and General Data Protection Regulation (GDPR) EU Reg,
						2016/679)
					</p>
					<p className="text-center mt-4 f12 gotham fw-bold text-white">
						Pursuant to Data Protection Act 2018 and the EU Reg, 2016/679 Laying
						down
					</p>

					<div className="d-flex justify-content-center mt-4">
						<button
							onClick={handleClose}
							className="bg-transparent text-white border border-2 border-white rounded-pill f12 fw-bold gotham me-3 me-md-5"
						>
							Yes, I accept Cookies.
						</button>
						<button
							onClick={handleClose}
							className="bg-transparent text-white border border-2 border-white rounded-pill f12 fw-bold gotham"
						>
							No, thanks.
						</button>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default Cookies;
