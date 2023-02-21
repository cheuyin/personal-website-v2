import styles from "./SkillsTable.module.css";
import ProgressBar from "./ProgressBar/ProgressBar.js";

const SkillsTable = () => {
	return (
		<div className={styles.container}>
			<div className={styles.skill_box}>
				<p>Java</p>
				<ProgressBar percent={30} />
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
			<div className={styles.skill_box}>
				<p>Java</p>
			</div>
		</div>
	);
};

export default SkillsTable;
