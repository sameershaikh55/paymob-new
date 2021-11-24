import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

// IMPORTS
import logo from "../assets/logo.png";

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
									Overview <IoIosArrowForward />
								</button>
							</NavLink>
						</div>
						<div className="col-6">
							<NavLink exact to="/contact">
								<button className="color1 border-0 shadow-none bg-transparent f14">
									Contact <IoIosArrowForward />
								</button>
							</NavLink>
						</div>
					</div>
				</div>
			</div>

			<div className="inner_dropdown container-fluid pt-5 pb-4">
				<div className="row">
					<div className="col-6">
						<h6 className="bottomHead mb-3 f14">PAYMENT TOOLS</h6>
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/androidSdk"
									className="color1 text-decoration-none color1 fw600"
								>
									Android mobile SDK <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/softPos"
									className="color1 text-decoration-none color1 fw600"
								>
									SoftPOS app <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/mposCard"
									className="color1 text-decoration-none color1 fw600"
								>
									mPOS card reader <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/miniPos"
									className="color1 text-decoration-none color1 fw600"
								>
									Mini POS terminal <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/smartPos"
									className="color1 text-decoration-none color1 fw600"
								>
									Smart POS terminal <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-6">
						<h6 className="bottomHead mb-3 f14">SYSTEM COMPONENETS</h6>
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/merchantOnboarding"
									className="color1 text-decoration-none color1 fw600"
								>
									Digital merchant onboarding <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 fw600">
								<NavLink
									to="/adminPortal"
									className="color1 text-decoration-none color1 fw600"
								>
									Admin portal <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 fw600">
								<NavLink
									to="/merchantDashboard"
									className="color1 text-decoration-none color1 fw600"
								>
									Merchant dashboard <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 fw600">
								<NavLink
									to="/paymentGatway"
									className="color1 text-decoration-none color1 fw600"
								>
									Payment gateway <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3 color1 fw600">
								<NavLink
									to="/certifications"
									className="color1 text-decoration-none color1 fw600"
								>
									Certifications <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
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
									className="color1 text-decoration-none color1 fw600"
								>
									Industry Sectors <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/partners"
									className="color1 text-decoration-none color1 fw600"
								>
									Friends of Paymob <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/caseStudies"
									className="color1 text-decoration-none color1 fw600"
								>
									Case Studies <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
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
									className="color1 text-decoration-none color1 fw600"
								>
									Developer tools <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/callback"
									className="color1 text-decoration-none color1 fw600"
								>
									App to app API <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/inHouseDeployement"
									className="color1 text-decoration-none color1 fw600"
								>
									In-house deployment <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<a
									className="color1 text-decoration-none color1 fw600"
									target="blank"
									href="https://airtable.com/shrL21Fd1xLND39mK"
								>
									Create a demo account <IoIosArrowForward />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
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
									className="color1 text-decoration-none color1 fw600"
								>
									About us <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/blogList"
									offset={-120}
									smooth={true}
									duration={600}
									spy={true}
									className="color1 text-decoration-none color1 fw600 pointer"
								>
									Paymob INsights <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/faq"
									className="color1 text-decoration-none color1 fw600"
								>
									FAQs <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/press"
									className="color1 text-decoration-none color1 fw600"
								>
									Press <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-6">
						<ul className="list-unstyled mb-0">
							<li className="f14 mb-3">
								<NavLink
									to="/team"
									className="color1 text-decoration-none color1 fw600"
								>
									Our team <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/careers"
									className="color1 text-decoration-none color1 fw600"
								>
									Careers <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/certifications"
									className="color1 text-decoration-none color1 fw600"
								>
									Certifications and security <IoIosArrowForward />
								</NavLink>
							</li>
							<li className="f14 mb-3">
								<NavLink
									to="/contact"
									className="color1 text-decoration-none color1 fw600"
								>
									Contact us <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
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
									className="color1 text-decoration-none color1 fw600"
								>
									Basic fee setup <IoIosArrowForward />
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* ARROW START */}
			{/* <div className="tria_icon">
				<img src={triangle} alt="" />
			</div> */}
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
		<div className="header_container">
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
											<span onClick={first} className="blackC pointer">
												Products
											</span>
											{/* {nestedNav.first && <ProductList />} */}
											<div className="dropdown_one">
												<ProductList />
											</div>
										</li>
										<li className="nav_two ms-5 position-relative">
											<span onClick={second} className="blackC pointer">
												Use cases
											</span>
											{/* {nestedNav.second && <UseCases />} */}
											<div className="dropdown_two">
												<UseCases />
											</div>
										</li>
										<li className="nav_three ms-5 position-relative">
											<span onClick={third} className="blackC pointer">
												Developers
											</span>
											{/* {nestedNav.third && <Developers />} */}
											<div className="dropdown_three">
												<Developers />
											</div>
										</li>
										<li className="nav_four ms-5 position-relative">
											<span onClick={fourth} className="blackC pointer">
												Pricing
											</span>
											{/* {nestedNav.fourth && <Pricing />} */}
											<div className="dropdown_four">
												<Pricing />
											</div>
										</li>
										<li className="nav_five ms-5 position-relative">
											<span onClick={fifth} className="blackC pointer">
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
										<button className="color1 border-0 bg-white py-2 px-4 fw800">
											Contact us
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
