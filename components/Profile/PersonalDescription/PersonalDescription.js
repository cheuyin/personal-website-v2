import Typed from "typed.js";
import React from "react";

const PersonalDescription = () => {
	// Create reference to store the DOM element containing the animation
	const el = React.useRef(null);
	// Create reference to store the Typed instance itself
	const typed = React.useRef(null);

	React.useEffect(() => {
		const options = {
			strings: [
				"Full-stack developer",
				"Computer science student",
				"AP Calculus and AP Computer Science tutor",
				"Self-learner",
			],
			typeSpeed: 50,
			backSpeed: 50,
		};

		// elRef refers to the <span> rendered below
		typed.current = new Typed(el.current, options);

		return () => {
			// Make sure to destroy Typed instance during cleanup
			// to prevent memory leaks
			typed.current.destroy();
		};
	}, []);

	return (
		<div className="wrap">
			<p className="type-wrap">
				<span style={{ whiteSpace: "pre" }} ref={el} />
			</p>
		</div>
	);
};

export default PersonalDescription;
