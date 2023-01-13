import NavBar from "../NavBar/NavBar";
import MobileNav from "../MobileNav/MobileNav";
import styles from "./Layout.module.css";

const Layout = () => {
	return (
		<div>
			<header>
				<MobileNav />
				<NavBar />
			</header>
		</div>
	);
};

export default Layout;
