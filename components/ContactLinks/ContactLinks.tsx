import Image from "next/image";
import styles from "./ContactLinks.module.css";

const ContactLinks = () => {
	return (
		<div className={styles.container}>
			<Image
				src="/icons/linkedin-icon.svg"
				alt="linkedin"
				width={36}
				height={36}
			/>
			<Image src="/icons/github-icon.svg" alt="github" width={36} height={36} />
			<Image src="/icons/email-icon.svg" alt="email" width={49} height={36} />
		</div>
	);
};

export default ContactLinks;
