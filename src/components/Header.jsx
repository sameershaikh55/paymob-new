import React, { useEffect, useState } from "react";
import triangle from "../assets/triangle.svg";
import rightArrow from "../assets/rightArrow.svg";
import wRightArrow from "../assets/wRightArrow.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

// IMPORTS
import logo from "../assets/logo.svg";

const ProductList = () => {
	return (
		<div className="dropdownList pt-5">
			<div>
				<h6 className="f18 mb-3 orangeC fw600 px-4">Products</h6>
				<div className="container-fluid pb-4">
					<div className="row">
						<div className="col-6">
							<NavLink exact to="/productOverview">
								<button className="color1 border-0 shadow-none bg-transparent f14">
									Overview <img className="arrow" src={rightArrow} alt="" />
								</button>
							</NavLink>
						</div>
						<div className="col-6">
							<NavLink exact to="/contact">
								<button className="color1 border-0 shadow-none bg-transparent f14">
									Contact <img className="arrow" src={rightArrow} alt="" />
								</button>
							</NavLink>
						</div>
					</div>
				</div>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-6">
						<h6 className="mb-3 fw-light f14">PAYMENT TOOLS</h6>
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/androidSdk"
									className="text-white text-decoration-none fw-bold"
								>
									Android mobile SDK{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/softPos"
									className="text-white text-decoration-none fw-bold"
								>
									SoftPOS app <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							{/* <li className="f14 mb-3">
								<NavLink
									to="/mposCard"
									className="text-white text-decoration-none fw-bold"
								>
									mPOS card reader <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/miniPos"
									className="text-white text-decoration-none fw-bold"
								>
									Mini POS terminal <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/smartPos"
									className="text-white text-decoration-none fw-bold"
								>
									Smart POS terminal <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li> */}
						</ul>
					</div>
					<div className="col-6">
						<h6 className="mb-3 fw-light f14">SYSTEM COMPONENETS</h6>
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/merchantOnboarding"
									className="text-white text-decoration-none fw-bold"
								>
									Digital merchant onboarding{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 bold">
								<NavLink
									to="/adminPortal"
									className="text-white text-decoration-none fw-bold"
								>
									Admin portal{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 bold">
								<NavLink
									to="/merchantDashboard"
									className="text-white text-decoration-none fw-bold"
								>
									Merchant dashboard{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 bold">
								<NavLink
									to="/paymentGatway"
									className="text-white text-decoration-none fw-bold"
								>
									Payment gateway{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 bold">
								<NavLink
									to="/certifications"
									className="text-white text-decoration-none fw-bold"
								>
									Certifications{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			<div className="tria_icon">
				<img src={triangle} alt="" />
			</div>
			{/* ARROW END */}
		</div>
	);
};

const UseCases = () => {
	return (
		<div className="dropdownList dev pt-5">
			<div>
				<h6 className="f18 mb-3 orangeC fw600 px-4">Use Cases</h6>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-12">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/industrySector"
									className="text-white text-decoration-none fw-bold"
								>
									Industry Sectors{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/partners"
									className="text-white text-decoration-none fw-bold"
								>
									Friends of Dapio{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/caseStudies"
									className="text-white text-decoration-none fw-bold"
								>
									Case Studies{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			<div className="tria_icon">
				<img src={triangle} alt="" />
			</div>
			{/* ARROW END */}
		</div>
	);
};

const Developers = () => {
	return (
		<div className="dropdownList dev pt-5">
			<div>
				<h6 className="f18 mb-3 py-2 orangeC fw600 px-4">Developers</h6>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-12">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/developers"
									className="text-white text-decoration-none fw-bold"
								>
									Developer tools{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/callback"
									className="text-white text-decoration-none fw-bold"
								>
									App to app API{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/inHouseDeployement"
									className="text-white text-decoration-none fw-bold"
								>
									In-house deployment{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<a
									className="text-white text-decoration-none fw-bold"
									target="blank"
									href="https://airtable.com/shrL21Fd1xLND39mK"
								>
									Create a demo account{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			<div className="tria_icon">
				<img src={triangle} alt="" />
			</div>
			{/* ARROW END */}
		</div>
	);
};

const About = () => {
	return (
		<div className="dropdownList pt-5">
			<div>
				<h6 className="f18 mb-3 orangeC fw600 px-4">About us</h6>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-6">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/about"
									className="text-white text-decoration-none fw-bold"
								>
									About us <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/blogList"
									offset={-120}
									smooth={true}
									duration={600}
									spy={true}
									className="text-white text-decoration-none fw-bold pointer"
								>
									Dapio INsights{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/faq"
									className="text-white text-decoration-none fw-bold"
								>
									FAQs <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/press"
									className="text-white text-decoration-none fw-bold"
								>
									Press <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-6">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/team"
									className="text-white text-decoration-none fw-bold"
								>
									Our team <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/careers"
									className="text-white text-decoration-none fw-bold"
								>
									Careers <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/certifications"
									className="text-white text-decoration-none fw-bold"
								>
									Certifications and security{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/contact"
									className="text-white text-decoration-none fw-bold"
								>
									Contact us <img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			<div className="tria_icon">
				<img src={triangle} alt="" />
			</div>
			{/* ARROW END */}
		</div>
	);
};

const Pricing = () => {
	return (
		<div className="dropdownList pricing pt-5">
			<div>
				<h6 className="f18 mb-3 orangeC fw600 px-4">Pricing</h6>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-12">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/pricing"
									className="text-white text-decoration-none fw-bold"
								>
									Basic fee setup{" "}
									<img className="arrow" src={wRightArrow} alt="" />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			<div className="tria_icon">
				<img src={triangle} alt="" />
			</div>
			{/* ARROW END */}
		</div>
	);
};

const Header = ({ ClickEvent, isOpen }) => {
	let history = useHistory();

	useEffect(() => {
		// FOR NAVBAR SCROLLING EFFECT START
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".header_container");
			if (header !== null) {
				header.classList.toggle("sticky", window.scrollY > 0);
			}
		});
	}, []);
	const [nestedNav, setNestedNav] = useState({
		first: true,
		second: true,
		third: true,
		fourth: true,
		fifth: true,
	});

	const first = () => {
		history.push("/productOverview");

		setNestedNav({
			first: !nestedNav.first,
			second: false,
			third: false,
			fourth: false,
			fifth: false,
		});
	};
	const second = () => {
		history.push("/industrySector");

		setNestedNav({
			first: false,
			second: !nestedNav.second,
			third: false,
			fourth: false,
			fifth: false,
		});
	};
	const third = () => {
		history.push("/developers");

		setNestedNav({
			first: false,
			second: false,
			third: !nestedNav.third,
			fourth: false,
			fifth: false,
		});
	};
	const fourth = () => {
		history.push("/pricing");

		setNestedNav({
			first: false,
			second: false,
			third: false,
			fourth: !nestedNav.fourth,
			fifth: false,
		});
	};
	const fifth = () => {
		history.push("/about");

		setNestedNav({
			first: false,
			second: false,
			third: false,
			fourth: false,
			fifth: !nestedNav.fifth,
		});
	};
	return (
		<div
			style={{
				background: (!isOpen && "#fff") || "#f1efec",
				boxShadow: isOpen && "none",
			}}
			className="header_container"
		>
			<div className="header_containerSize w-100">
				<div className="container-fluid ps-4 ps-md-2 pe-0 h-100 w-100">
					<div className="row h-100 w-100">
						<div className="col-11 h-100 mx-auto w-100">
							<div className="d-flex justify-content-between align-items-center w-100 h-100">
								<div className="logo_container">
									<NavLink to="/">
										<img src={logo} alt="" />
									</NavLink>
								</div>
								{/* HAMBERGER START */}
								{(!isOpen && (
									<div className="d-block d-lg-none pointer">
										<GiHamburgerMenu onClick={ClickEvent} fontSize="1.8rem" />
									</div>
								)) || <FaTimes onClick={ClickEvent} fontSize="2.2rem" />}
								{/* HAMBERGER END */}
								<div className="d-none d-lg-block">
									<ul className="d-flex list-unstyled mb-0">
										<li className="nav_one position-relative">
											<span onClick={first} className="blackC pointer fw600">
												Products
											</span>
											{/* {nestedNav.first && <ProductList />} */}
											<div className="dropdown_one">
												<ProductList />
											</div>
										</li>
										<li className="nav_two ms-5 position-relative">
											<span onClick={second} className="blackC pointer fw600">
												Use cases
											</span>
											{/* {nestedNav.second && <UseCases />} */}
											<div className="dropdown_two">
												<UseCases />
											</div>
										</li>
										<li className="nav_three ms-5 position-relative">
											<span onClick={third} className="blackC pointer fw600">
												Developers
											</span>
											{/* {nestedNav.third && <Developers />} */}
											<div className="dropdown_three">
												<Developers />
											</div>
										</li>
										<li className="nav_four ms-5 position-relative">
											<span onClick={fourth} className="blackC pointer fw600">
												Pricing
											</span>
											{/* {nestedNav.fourth && <Pricing />} */}
											<div className="dropdown_four">
												<Pricing />
											</div>
										</li>
										<li className="nav_five ms-5 position-relative">
											<span onClick={fifth} className="blackC pointer fw600">
												About us
											</span>
											{/* {nestedNav.fifth && <About />} */}
											<div className="dropdown_five">
												<About />
											</div>
										</li>
									</ul>
								</div>
								<div className="d-none d-lg-block">
									<NavLink to="/contact">
										<button className="color1 border-0 bg-white py-2 px-4 fw-bold">
											Request Demo
										</button>
									</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
