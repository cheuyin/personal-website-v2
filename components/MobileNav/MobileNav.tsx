import styles from "./MobileNav.module.css";
import Image from "next/image";
import { useState } from "react";

const MobileNav = () => {
	const [opened, setOpened] = useState(true);

	function toggleMenu() {
		setOpened(prev => !prev);
	}

	return (
		<div className={styles.container}>
			{opened ? (
				<div className={styles.opened_menu}>
					<ul>
						<li>Hello! I am the mobile nav bar.</li>
					</ul>
				</div>
			) : (
				<div className={styles.closed_menu}>
					<button onClick={toggleMenu}>
						<Image
							src="icons/bars-solid.svg"
							alt="menu"
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
