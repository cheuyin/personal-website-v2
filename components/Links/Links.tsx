import styles from "./Links.module.css";
import { useState } from "react";
import Link from "next/link";

const Links = () => {
	const [selected, setSelected] = useState(false);

	function toggleSelected(event: any) {
		console.log(event.target.className)
		event.target.className += styles.selected;
	}

	return (
		<ul className={styles.container}>
			<li className={styles.selected}><Link href="/">About Me</Link></li>
			<li onClick={toggleSelected} className={styles.selected}><Link href="/projects">Projects</Link></li>
			<li onClick={toggleSelected}><Link href="/blog">Blog</Link></li>
			<li onClick={toggleSelected}><Link href="/resume">Resume</Link></li>
		</ul>
	);
};

export default Links;
