import styles from "./ProgressBar.module.css";
import React from "react";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ percent }) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
	});


	return (
		<div className={styles.container} ref={ref}>
			<div
				className={styles.progress}
				style={{ width: inView ? percent + "%" : 0 }}
			></div>
		</div>
	);
};

export default ProgressBar;
