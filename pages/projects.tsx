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
					<div key={project.id} className={styles.project_card}>
						<Image src={project.image} width={30} height={30} alt="" />
						<p>{project.name}</p>
						<p>{project.description}</p>
					</div>
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
