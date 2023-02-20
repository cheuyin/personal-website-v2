import Layout from "../components/Layout/Layout";
import Info from "../components/Info/Info";
import Profile from "../components/Profile/Profile";
import VerticalTimeline from "../components/Timeline/Timeline.js";

export default function Home() {
	return (
		<Layout>
			<Profile />
			<section>
				<Info
					header="Education"
					description="The University of British Columbia B.Sc, intended Major in CS"
				/>
				<Info
					header="Skills"
					description="Next.js, TypeScript, Tailwind.css, React, Node.js, Java, Git, MongoDB"
				/>
			</section>
			<section>
				<h3>Experience</h3>
				<VerticalTimeline />
			</section>
		</Layout>
	);
}
