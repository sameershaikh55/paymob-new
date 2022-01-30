import "./styles/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Switch } from "react-router-dom";

// IMPORTING REDUX PROVIDER AND STORE
import { Provider } from "react-redux";
import store from "./redux/store";

// IMPORTING PAGES
import Home from "./pages/Home.jsx";
import ProductOverview from "./pages/ProductOverview";
import AndroidSdk from "./pages/AndroidSdk";
import SoftPos from "./pages/SoftPos";
import MposCard from "./pages/MposCard";
import MiniPos from "./pages/MiniPos";
import SmartPos from "./pages/SmartPos";
import MerchantOnboarding from "./pages/MerchantOnboarding";
import MerchantDashboard from "./pages/MerchantDashboard";
import AdminPortal from "./pages/AdminPortal";
import PaymentGatway from "./pages/PaymentGatway";
import Pricing from "./pages/Pricing";
import Certifications from "./pages/Certifications";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import JobOpenings from "./pages/JobOpenings";
import About from "./pages/About";
import IndustrySector from "./pages/IndustrySector";
import Partners from "./pages/Partners";
import CaseStudies from "./pages/CaseStudies";
import Developers from "./pages/Developers";
import BlogList from "./pages/BlogList";
import BlogInside from "./pages/BlogInside";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Callback from "./pages/Callback";
import InHouseDeployement from "./pages/InHouseDeployement";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import logoW from "./assets/logoW.svg";

function App() {
	let cookies = localStorage.getItem("cookies");

	useEffect(() => {
		if (!cookies) {
			localStorage.setItem("cookies", true);
		}

		document.body.style.overflow = "hidden";

		window.addEventListener("load", (event) => {
			document.body.style.overflowY = "auto";
			const load = document.querySelector(".loading_page");
			load.style.opacity = "0";
			load.style.display = "none";
		});
	}, []);

	return (
		<>
			<div className="loading_page">
				<div className="inner_loading d-flex flex-column align-items-center">
					<img src={logoW} alt="" />
				</div>
			</div>
			<ScrollToTop />
			<Provider store={store}>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/productOverview" component={ProductOverview} />
					<Route exact path="/androidSdk" component={AndroidSdk} />
					<Route exact path="/softPos" component={SoftPos} />
					{/* <Route exact path="/mposCard" component={MposCard} /> */}
					{/* <Route exact path="/miniPos" component={MiniPos} /> */}
					{/* <Route exact path="/smartPos" component={SmartPos} /> */}
					<Route
						exact
						path="/merchantOnboarding"
						component={MerchantOnboarding}
					/>
					<Route
						exact
						path="/merchantDashboard"
						component={MerchantDashboard}
					/>
					<Route exact path="/adminPortal" component={AdminPortal} />
					<Route exact path="/paymentGatway" component={PaymentGatway} />
					<Route exact path="/certifications" component={Certifications} />
					<Route exact path="/pricing" component={Pricing} />
					<Route exact path="/team" component={Team} />
					<Route exact path="/careers" component={Careers} />
					<Route exact path="/careers/job_openings" component={JobOpenings} />
					<Route exact path="/about" component={About} />
					<Route exact path="/industrySector" component={IndustrySector} />
					<Route exact path="/partners" component={Partners} />
					<Route exact path="/caseStudies" component={CaseStudies} />
					<Route exact path="/developers" component={Developers} />
					<Route
						exact
						path={["/blogList", "/blogList/:page"]}
						component={BlogList}
					/>
					<Route
						exact
						path={["/blogInside/:singleBlog", "/blogInside/:page/:singleBlog"]}
						component={BlogInside}
					/>
					<Route exact path="/press" component={Press} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/faq" component={Faq} />
					<Route exact path="/callback" component={Callback} />
					<Route
						exact
						path="/inHouseDeployement"
						component={InHouseDeployement}
					/>
				</Switch>
			</Provider>
		</>
	);
}

export default App;
