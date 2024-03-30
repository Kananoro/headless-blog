import { IconTypes } from "@/components/button/custom-link";
import Card from "./components/card/card";
import config from "@/config";
import fetchBlogs from "./helper/fetch-blogs";

const Home = async () => {
	const [featuredBlogs, blogs] = await Promise.all([
		await fetchBlogs(`&filters[IsFeatured][$eq]=true`),
		await fetchBlogs(`&filters[IsFeatured][$eq]=false`),
	]);

	return (
		<div className="container pb-80">
			{featuredBlogs.data.map((featuredBlog) => (
				<Card
					key={featuredBlog.attributes.id}
					label={featuredBlog.attributes.Category}
					title={featuredBlog.attributes.Title}
					summary={featuredBlog.attributes.Summary}
					href={`/${featuredBlog.attributes.slug}`}
					imgSrc={`${config.api}${featuredBlog.attributes.PreviewImage.data.attributes.url}`}
					imgAlt="Featured Image"
					btnIcon={"ARROW_RIGHT"}
					btnLabel={featuredBlog.attributes.btnContent}
					className="mb-30"
				/>
			))}
			<div className="row">
				{blogs.data.map((blog) => (
					<div key={blog.attributes.id} className="col col-4 m-mw-100">
						<Card
							label={blog.attributes.Category}
							title={blog.attributes.Title}
							summary={blog.attributes.Summary}
							href={`/${blog.attributes.slug}`}
							imgSrc={`${config.api}${blog.attributes.PreviewImage.data.attributes.url}`}
							imgAlt="Thumbnail"
							btnIcon={"arrow_right"}
							btnLabel={blog.attributes.btnContent}
							className="mb-30"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
