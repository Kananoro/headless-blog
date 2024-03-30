import Image from "next/image";
import styles from "./card.module.scss";
import ConditionalRenderer from "../conditional-renderer";
import CustomLink from "../button/custom-link";
import getCategoryColor from "@/helper/get-category-color";

const Card = ({
	label,
	title,
	summary,
	href,
	btnIcon,
	btnLabel,
	className,
	imgSrc,
	imgAlt,
}) => {
	return (
		<div className={`${styles.card_wrap} ${className || ""}`}>
			<div className={styles.card}>
				<div className={styles.card_imageWrap}>
					<div className={styles.card_image}>
						<Image src={imgSrc} alt={imgAlt} fill={true} />
					</div>
				</div>
				<div className={styles.card_content}>
					<ConditionalRenderer condition={label}>
						<div
							className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(
								label
							)}`}
						>
							{label}
						</div>
					</ConditionalRenderer>
					<ConditionalRenderer condition={title}>
						<div className={`${styles.card_title} h3 mb-20`}>{title}</div>
					</ConditionalRenderer>
					<ConditionalRenderer condition={summary}>
						<p className={`${styles.card_summary} fw-600`}>{summary}</p>
					</ConditionalRenderer>
					<ConditionalRenderer condition={href}>
						<CustomLink href={href} icon={btnIcon}>
							{btnLabel || "Read More"}
						</CustomLink>
					</ConditionalRenderer>
				</div>
			</div>
		</div>
	);
};

export default Card;
