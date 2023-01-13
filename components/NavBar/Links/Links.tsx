import styles from "./Links.module.css";
import { useState } from "react";

const Links = () => {
	const [selected, setSelected] = useState(false);

	function toggleSelected(event: any) {
		event.target.className = styles.selected;
	}

	return (
		<ul className={styles.container}>
			<li className={styles.selected}>About Me</li>
			<li onClick={toggleSelected}>Projects</li>
			<li onClick={toggleSelected}>Blog</li>
			<li onClick={toggleSelected}>Resume</li>
		</ul>
	);
};

export default Links;
