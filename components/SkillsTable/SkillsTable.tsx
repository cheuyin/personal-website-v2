import styles from "./SkillsTable.module.css";
import ProgressBar from "./ProgressBar/ProgressBar.js";

const SkillsTable = () => {
	return (
		<div className={styles.container}>
			<div className={styles.skill_box}>
				<p>Java</p>
				<ProgressBar percent={75} />
			</div>
			<div className={styles.skill_box}>
				<p>React</p>
                <ProgressBar percent={70} />
			</div>
			<div className={styles.skill_box}>
				<p>Next.js</p>
                <ProgressBar percent={75} />
			</div>
			<div className={styles.skill_box}>
				<p>Tailwind</p>
                <ProgressBar percent={80} />
			</div>
			<div className={styles.skill_box}>
				<p>Python</p>
                <ProgressBar percent={50} />
			</div>
			<div className={styles.skill_box}>
				<p>Git/GitHub</p>
                <ProgressBar percent={80} />
			</div>
			<div className={styles.skill_box}>
				<p>Figma</p>
                <ProgressBar percent={90} />
			</div>
			<div className={styles.skill_box}>
				<p>JavaScript</p>
                <ProgressBar percent={90} />
			</div>
			<div className={styles.skill_box}>
				<p>HTML</p>
                <ProgressBar percent={90} />
			</div>
			<div className={styles.skill_box}>
				<p>CSS</p>
                <ProgressBar percent={90} />
			</div>
            <div className={styles.skill_box}>
				<p>TypeScript</p>
                <ProgressBar percent={50} />
			</div>
            <div className={styles.skill_box}>
				<p>MongoDB</p>
                <ProgressBar percent={40} />
			</div>
		</div>
	);
};

export default SkillsTable;
