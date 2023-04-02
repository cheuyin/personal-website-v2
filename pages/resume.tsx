import Layout from "../components/Layout/Layout";
import styles from "../styles/resume.module.css";

const Resume = () => {
	return (
		<Layout>
			<object className={styles.pdf} data="/Stanley_Cheung_Resume..pdf" type="application/pdf">
				<a
					href="/resume.pdf"
					target="_blank"
					rel="noreferrer"
					className={styles.resume_link}
				>
					DOWNLOAD
				</a>
			</object>
			<a
				href="/resume.pdf"
				target="_blank"
				rel="noreferrer"
				className={`${styles.resume_link} ${styles.alternative}`}
			>
				DOWNLOAD
			</a>
		</Layout>
	);
};

export default Resume;
