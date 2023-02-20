import styles from "./Profile.module.css";
import Image from "next/image";
import PersonalDescription from "./PersonalDescription/PersonalDescription.js";

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
			<PersonalDescription />
		</div>
	);
};

export default Profile;
