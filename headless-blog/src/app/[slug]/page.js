import Image from "next/image";
import getCategoryColor from "../helper/get-category-color";
import styles from "./style.module.scss";
import config from "@/config";
import fetchBlogs from "@/helper/fetch-blogs";
import BackButton from "@/components/back-button/back-button";
import parse from "html-react-parser";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const BlogDetails = async (props) => {
	const blog = await fetchBlogs(`&filters[slug][$eq]=${props.params.slug}`);
	return (
		<div className="container pb-80">
			{blog.data.map((blogs) => (
				<div>
					<div className="row mb-50">
						<div className="col col-9">
							<div
								className={`h6 mb-20 c-${getCategoryColor(
									`${blogs.attributes.Category}`
								)}`}
							>
								{blogs.attributes.Category}
							</div>
							<h2>{blogs.attributes.Title}</h2>
						</div>
					</div>

					<Image
						className={`${styles.featuredImage} col-12 mb-30`}
						src={`${config.api}${blogs.attributes.BlogImage.data.attributes.url}`}
						alt="Featured Image"
						width="1280"
						height="387"
					/>

					<div className="row mb-30">
						<div className="col col-9 blocksrenderer">
							<BlocksRenderer content={blogs.attributes.Content} />
						</div>
					</div>
				</div>
			))}
			<BackButton icon={"arrow_left"} children="Back" />
		</div>
	);
};

export default BlogDetails;
