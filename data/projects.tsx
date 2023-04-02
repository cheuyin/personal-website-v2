import node_films from "../public/project_images/node_films.png";
import smart_foods from "../public/project_images/smart_foods.png";
import pca from "../public/project_images/pca.png";

const projects = [
	{
		id: 1,
		name: "Smart Foods",
		image: smart_foods,
		skills: ["Next.js", "React"],
		description: "nwHacks project for finding the best food prices",
		link: "https://github.com/nwHacks2023-smart-food/smart-foods",
	},
	{
		id: 2,
		name: "Node Films",
		image: node_films,
		skills: ["Node.js", "Rest API", "Promises"],
		description: "Data retriever for all your favorite movies",
		link: "https://github.com/cheuyin/node-films",
	},
	{
		id: 3,
		name: "Pacific Conference on A.I 2023",
		image: pca,
		skills: ["React", "Tailwind"],
		description: "Main website for PCA 2023",
		link: "https://pca2023.com"
	}
];

export default projects;
