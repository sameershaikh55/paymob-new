import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Cookies from "../components/Cookies";
import { useHooks } from "../Hooks/useHooks";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
	const { isOpen, OnClick } = useHooks();
	let location = useLocation();
	let cookies = localStorage.getItem("cookies");

	return (
		<>
			{cookies == "true" && location.pathname === "/" && <Cookies />}
			<Header ClickEvent={OnClick} isOpen={isOpen} />
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
