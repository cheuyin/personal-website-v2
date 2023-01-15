import styles from "./Info.module.css";

const Info = ({
	header,
	description,
}: {
	header: string;
	description: string;
}) => {
	return (
		<div className={styles.container}>
			<h3>{header}</h3>
			<p>{description}</p>
		</div>
	);
};

export default Info;
