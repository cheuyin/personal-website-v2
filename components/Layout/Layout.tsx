import NavBar from "../NavBar/NavBar";
import MobileNav from "../MobileNav/MobileNav";
import styles from "./Layout.module.css";
import React from "react";
import Head from "next/head";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const currentYear = new Date().getFullYear();

	return (
		<div className={styles.layout_container}>
			<Head>
				<title>Stanley Cheung</title>
			</Head>
			<header>
				<MobileNav />
				<NavBar />
			</header>
			<main className={styles.main_container}>{children}</main>
			<footer className={styles.footer}>
				© {currentYear} Stanley Cheung
			</footer>
		</div>
	);
};

export default Layout;
