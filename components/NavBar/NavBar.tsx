import ContactIcons from "../ContactLinks/ContactLinks";
import styles from "./NavBar.module.css";
import Links from "../Links/Links";

const NavBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.website_title}>cheungstanley.com</div>
			<Links />
			<ContactIcons />
		</div>
	);
};

export default NavBar;
