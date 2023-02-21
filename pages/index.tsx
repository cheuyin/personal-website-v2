import styles from "../styles/home.module.css";
import Layout from "../components/Layout/Layout";
import Info from "../components/Info/Info";
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
		</Layout>
	);
}
