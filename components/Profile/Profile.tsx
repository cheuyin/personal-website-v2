import styles from "./Profile.module.css";
import Image from "next/image";

const Profile = () => {
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<Image
					src="/images/profile-pic-cropped.png"
					alt="profile pic"
					quality={100}
					fill
					priority
				/>
			</div>
			<h1>Stanley Cheung</h1>
			<p>Full-stack developer</p>
		</div>
	);
};

export default Profile;
