import config from "@/config";

const fetchBlogs = async (params) => {
	const reqOptions = {
		headers: {
			Authorization: `Bearer ${config.token}`,
		},
		cache: "no-store",
	};

	const request = await fetch(
		`${config.api}/api/blogs?populate=*${params}`,
		reqOptions
	);
	const response = await request.json();

	return response;
};

export default fetchBlogs;
