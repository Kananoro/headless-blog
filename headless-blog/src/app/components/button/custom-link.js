import Link from "next/link";
import styles from "./custom-link.module.scss";
import Arrow from "@/helper/arrow";

const CustomLink = ({ href, children, icon }) => {
		return (
			<Link className={styles.button} href={href}>
				{children}
				<Arrow className={icon}/>
			</Link>
		);
};

export default CustomLink;
