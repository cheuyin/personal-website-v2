import Layout from "../components/Layout/Layout";
import Image from "next/image";
import styles from "../styles/index.module.css";

export default function Home() {
	return (
		<Layout>
			<div className={styles.profile}>
				<Image
					src="/images/profile-pic-cropped.png"
					alt="profile pic"
					width={200}
					height={200}
					quality={100}
					priority
				/>
				<h1>Stanley Cheung</h1>
				<p>Full-stack developer</p>
			</div>
		</Layout>
	);
}
