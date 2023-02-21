import styles from "../styles/home.module.css";
import Layout from "../components/Layout/Layout";
import SkillsTable from "../components/SkillsTable/SkillsTable";
import Profile from "../components/Profile/Profile";
import VerticalTimeline from "../components/Timeline/Timeline.js";

export default function Home() {
	return (
		<Layout>
			<Profile />
			<section className={styles.section}>
				<h3 className={styles.section_header}>Experience</h3>
				<VerticalTimeline />
			</section>
			<section className={styles.section}>
				<h3 className={styles.section_header}>Skills</h3>
				<SkillsTable />
			</section>
		</Layout>
	);
}
