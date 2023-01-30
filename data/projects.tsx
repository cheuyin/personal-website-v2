import node_films from "../public/project_images/node_films.png";
import smart_foods from "../public/project_images/smart_foods.png";

const projects = [
	{
		id: 1,
		name: "Smart Foods",
		image: smart_foods,
		skills: ["Next.js", "React"],
		description: "nwHacks project for finding the best food prices",
		gitHubLink: "https://github.com/nwHacks2023-smart-food/smart-foods",
	},
	{
		id: 2,
		name: "Node Films",
		image: node_films,
		skills: ["Node.js", "Rest API", "Promises"],
		description: "Data retriever for all your favorite movies",
		gitHubLink: "https://github.com/cheuyin/node-films",
	},
];

export default projects;
