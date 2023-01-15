import NavBar from "../NavBar/NavBar";
import MobileNav from "../MobileNav/MobileNav";
import styles from "./Layout.module.css";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<header>
				<MobileNav />
				<NavBar />
			</header>
			<main className={styles.main_container}>{children}</main>
		</div>
	);
};

export default Layout;
