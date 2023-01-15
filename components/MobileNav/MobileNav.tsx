import styles from "./MobileNav.module.css";
import Image from "next/image";
import { useState } from "react";
import ContactLinks from "../ContactLinks/ContactLinks";

const MobileNav = () => {
	const [opened, setOpened] = useState(true);

	function toggleMenu() {
		setOpened((prev) => !prev);
	}

	return (
		<div className={styles.container}>
			{opened ? (
				<div className={styles.opened_menu}>
					<button onClick={toggleMenu}>
						<Image
							src="icons/xmark.svg"
							alt="close menu"
							width={36}
							height={36}
						/>
					</button>
					<ul className={styles.nav_links}>
						<li>About Me</li>
						<li>Projects</li>
						<li>Blog</li>
						<li>Resume</li>
					</ul>
					<div className={styles.links}>
						<ContactLinks />
					</div>
				</div>
			) : (
				<div className={styles.closed_menu}>
					<button onClick={toggleMenu}>
						<Image
							src="icons/bars-solid.svg"
							alt="open menu"
							width={36}
							height={36}
						/>
					</button>
				</div>
			)}
		</div>
	);
};

export default MobileNav;
