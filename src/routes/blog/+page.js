import posts from './_posts';

export async function load({ url, params }) {
	const category = url.search.replace('?category=', '') || 'all';

	// get list of categories
	let categories = [];
	posts.forEach((post) => {
		if (post.category && !categories.includes(post.category)) {
			categories.push(post.category);
		}
	});

	// filter posts by category
	let filteredPosts =
		category == 'all' ? posts : posts.filter((post) => post.category == category);

	console.log(categories);
	console.log(category);
	return {
		category,
		categories,
		filteredPosts
	};
}
