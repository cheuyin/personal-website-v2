import node_films from "../public/project_images/node_films.png";
import etch_sketch from "../public//project_images/etch_sketch.png";

const projects = [
	{
		id: 1,
		name: "Node Films",
		image: node_films,
		skills: ["Node", "REST API", "Promises"],
        description: "Automatic description retriever for your favourite movies",
		gitHubLink: "https://github.com/cheuyin/node-films"
	},
	{
		id: 2,
		name: "Etch-a-Sketch",
		image: etch_sketch,
		skills: ["JavaScript", "HTML", "CSS"],
        description: "Online tool for making quick, fun sketches",
		gitHubLink: "https://github.com/cheuyin/etch-a-sketch"
	},
]

export default projects;