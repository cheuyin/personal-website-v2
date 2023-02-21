/* eslint-disable @next/next/no-img-element */
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import JavascriptIcon from "@mui/icons-material/Javascript";
import FunctionsIcon from "@mui/icons-material/Functions";
import GroupsIcon from "@mui/icons-material/Groups";
import LanguageIcon from "@mui/icons-material/Language";

const Timeline = () => {
	return (
		<VerticalTimeline lineColor="black">
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="2021 - 2022"
				iconStyle={{ background: "#0892A5", color: "#fff" }}
				contentStyle={{ color: "#808080" }}
				icon={<JavascriptIcon />}
			>
				<h3 className="vertical-timeline-element-title">
					Self-taught programmer
				</h3>
				<h4 className="vertical-timeline-element-subtitle">Vancouver, BC</h4>
				<p>
					Learned HTML, CSS, JS, and CS fundamentals from various online
					resources
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Sept. 2022 - Present"
				iconStyle={{
					background: "#BB7E5D",
					color: "#fff",
				}}
				contentStyle={{ color: "#808080" }}
				icon={<SchoolIcon />}
			>
				<h3 className="vertical-timeline-element-title">
					B.Sc in Computer Science (intended)
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					The University of British Columbia
				</h4>
				<p>Learning robust code, testing, and OOP principles</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Oct. 2022 - Feb. 2023"
				iconStyle={{ background: "#0892A5", color: "#fff" }}
				contentStyle={{ color: "#808080" }}
				icon={<FunctionsIcon />}
			>
				<h3 className="vertical-timeline-element-title">
					Online private tutor
				</h3>
				<h4 className="vertical-timeline-element-subtitle">
					iSmart Education Canada
				</h4>
				<p>Privately tutored two students on AP Calculus and AP CSA</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				date="Jan. 2023"
				iconStyle={{ background: "#BB7E5D", color: "#fff" }}
				contentStyle={{ color: "#808080" }}
				icon={<GroupsIcon />}
			>
				<h3 className="vertical-timeline-element-title">Hacker</h3>
				<h4 className="vertical-timeline-element-subtitle">nwHacks 2023</h4>
				<p>
					Admitted to the largest hackathon in the Pacific Northwest, and led a
					project with a team of 4
				</p>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--education"
				date="Feb. 2023 - Present"
				iconStyle={{ background: "#0892A5", color: "#fff" }}
				contentStyle={{ color: "#808080" }}
				icon={<LanguageIcon />}
			>
				<h3 className="vertical-timeline-element-title">React developer</h3>
				<h4 className="vertical-timeline-element-subtitle">
					UBC Data Science Club
				</h4>
				<p>
					Working as the front-end developer on the main website for the Pacific
					Conference on A.I{" "}
				</p>
			</VerticalTimelineElement>
		</VerticalTimeline>
	);
};

export default Timeline;
