import Image from "next/image";
import styles from "./ContactLinks.module.css";

const ContactLinks = () => {
	return (
		<div className={styles.container}>
			<a
				href="https://www.linkedin.com/in/yinstanleycheung/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<Image
					src="/icons/linkedin-icon.svg"
					alt="linkedin"
					width={24}
					height={24}
				/>
			</a>
			<a
				href="https://github.com/cheuyin"
				target="_blank"
				rel="noreferrer noopener"
			>
				<Image
					src="/icons/github-icon.svg"
					alt="github"
					width={24}
					height={24}
				/>
			</a>
			<a
				href="mailto:yinstanleycheung@gmail.com"
				target="_blank"
				rel="noreferrer noopener"
			>
				<Image src="/icons/email-icon.svg" alt="email" width={33} height={24} />
			</a>
		</div>
	);
};

export default ContactLinks;
