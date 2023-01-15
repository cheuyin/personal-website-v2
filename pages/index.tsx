import Layout from "../components/Layout/Layout";
import Info from "../components/Info/Info";
import Profile from "../components/Profile/Profile";

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
		</Layout>
	);
}
