import styles from "./Links.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const navigationRoutes = ["home", "projects", "blog", "resume"];

export default function Links() {
	const router = useRouter();
	return (
		<nav className={styles.container}>
			{navigationRoutes.map((singleRoute) => {
				return (
					<NavigationLink
						key={singleRoute}
						href={`/${singleRoute}`}
						text={singleRoute}
						router={router}
					/>
				);
			})}
		</nav>
	);
}

function NavigationLink({
	href,
	text,
	router,
}: {
	href: string;
	text: string;
	router: any;
}) {
	const isActive = router.asPath === (href === "/home" ? "/" : href);
	return (
		<Link
			href={href === "/home" ? "/" : href}
			className={`${isActive && styles.nav_item_active} ${styles.nav_item}`}
		>
			{text.charAt(0).toUpperCase() + text.slice(1)}
		</Link>
	);
}
