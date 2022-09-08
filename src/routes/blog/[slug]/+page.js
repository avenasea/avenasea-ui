import { error } from '@sveltejs/kit';
import posts from '../_posts.js';

export async function load({ url, params }) {
	const { slug } = params;
	const lookup = new Map();
	posts.forEach((post) => {
		lookup.set(post.slug, post);
	});

	if (lookup.get(slug)) {
		return {
			post: lookup.get(slug)
		};
	} else {
		throw error(404, 'Post not found');
	}
}
