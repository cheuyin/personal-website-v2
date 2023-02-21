import Layout from "../components/Layout/Layout";
import styles from "../styles/projects.module.css";
import projects from "../data/projects";
import Image from "next/image";

interface Project {
	id: number;
	name: string;
	image: string;
	skills: string[];
	description: string;
	gitHubLink: string;
}

type Projects = Project[];

const Projects = ({ projects }: { projects: Projects }) => {
	return (
		<Layout>
			<div className={styles.container}>
				{projects.map((project: Project) => (
					<a
						key={project.id}
						className={styles.project_card}
						target="_blank"
						rel="noopener noreferrer"
						href={project.gitHubLink}
					>
						<div className={styles.image_container}>
							<Image
								src={project.image}
								alt="project image"
								placeholder="blur"
								priority
								style={{ width: "100%", height: "30%" }}
							/>
						</div>
						<div className={styles.horizontal_bar}>
							<h2>{project.name}</h2>
						</div>
						<p className={styles.description}>{project.description}</p>
						<p className={styles.skills}>{project.skills.join(" ")}</p>
					</a>
				))}
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	return {
		props: {
			projects,
		},
	};
}

export default Projects;
