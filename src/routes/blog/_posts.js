import slugify from 'slugify';
import in_a from 'in-a-nutshell';
import keyword_extractor from 'keyword-extractor';

const posts = [
	{
		title: 'Curabitur et convallis nibh',
		image: '',
		author: 'chovy',
		category: 'news',
		timestamp: new Date('2022-06-15'),
		html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue maximus euismod. Etiam egestas quis sapien id pretium. Etiam consequat lacus sem, eu tempor elit egestas ac. Mauris vel justo vehicula, imperdiet erat tincidunt, fermentum quam. Ut sit amet libero venenatis, sollicitudin nisl vel, bibendum leo. Aliquam erat volutpat. Sed odio nibh, interdum sed aliquet non, posuere ac turpis. Etiam efficitur sollicitudin sem, eget dapibus dui dapibus in. Donec ligula purus, sodales at tristique sodales, ultrices at erat. Ut suscipit urna ac massa semper, vel consequat leo consequat. Sed id sapien ante. Nunc lacus felis, mollis at hendrerit eget, pulvinar vel dolor. In at neque non sem cursus ullamcorper. Nam nec felis id enim imperdiet molestie. Nulla sed blandit libero, vitae aliquet risus. Maecenas eu quam elementum, ultrices sem sit amet, fermentum dui.</p>

		<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum quam ac tortor interdum, sed vehicula erat suscipit. Integer quis felis non urna aliquet tempor vel vel eros. Duis arcu neque, vehicula convallis rhoncus eget, faucibus id turpis. Fusce et tellus vehicula, convallis nibh non, molestie dui. Mauris vel dolor nisi. Fusce tristique varius enim id tristique. Mauris in velit pellentesque, maximus dui nec, interdum purus. Maecenas nec nibh vitae augue luctus lobortis. Donec nec facilisis enim. Nullam a ligula mauris. In rutrum mi cursus sodales interdum. Sed non elit ut erat tincidunt sagittis eget non ligula.</p>
		
		<p>Duis vitae convallis dui. Phasellus sagittis auctor ornare. Nam vel eros eu tortor dictum rhoncus. Etiam dictum risus diam, et dapibus est faucibus sit amet. Vestibulum ut auctor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quis ultrices sem, mattis molestie mauris. Nulla facilisi. Phasellus ex nulla, rhoncus ac sem at, mollis tempus ante. Pellentesque vel ligula sed augue tristique feugiat.</p>
		
		<p>Aliquam et diam rutrum dui iaculis pharetra vitae eget enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at neque ac erat posuere accumsan id eu arcu. Nam pellentesque pulvinar commodo. Nulla id lorem sapien. Praesent vitae tortor rhoncus ante commodo efficitur at nec lacus. Vestibulum nisi dui, varius non vulputate pellentesque, iaculis pharetra massa. Sed arcu nisl, finibus sed hendrerit ac, rutrum a dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nec dapibus turpis.</p>
		
		<p>Sed viverra sed turpis eget condimentum. Pellentesque sit amet ipsum neque. Vivamus risus nisl, lobortis eu leo et, auctor sollicitudin tortor. Morbi posuere tellus tortor, id eleifend urna dictum sed. Aliquam ultrices dignissim urna, ultrices vestibulum tellus faucibus vel. Nullam placerat ac ligula non tempor. Etiam scelerisque, lacus eget dignissim tincidunt, lorem magna vulputate magna, in faucibus sem massa ac felis. Praesent nulla magna, facilisis at pretium sed, commodo vitae velit.</p>`
	},
	{
		title: 'Fusce augue mauris, suscipit',
		image: '',
		author: 'chovy',
		category: 'news',
		timestamp: new Date('2022-06-16'),
		html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue maximus euismod. Etiam egestas quis sapien id pretium. Etiam consequat lacus sem, eu tempor elit egestas ac. Mauris vel justo vehicula, imperdiet erat tincidunt, fermentum quam. Ut sit amet libero venenatis, sollicitudin nisl vel, bibendum leo. Aliquam erat volutpat. Sed odio nibh, interdum sed aliquet non, posuere ac turpis. Etiam efficitur sollicitudin sem, eget dapibus dui dapibus in. Donec ligula purus, sodales at tristique sodales, ultrices at erat. Ut suscipit urna ac massa semper, vel consequat leo consequat. Sed id sapien ante. Nunc lacus felis, mollis at hendrerit eget, pulvinar vel dolor. In at neque non sem cursus ullamcorper. Nam nec felis id enim imperdiet molestie. Nulla sed blandit libero, vitae aliquet risus. Maecenas eu quam elementum, ultrices sem sit amet, fermentum dui.</p>

		<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum quam ac tortor interdum, sed vehicula erat suscipit. Integer quis felis non urna aliquet tempor vel vel eros. Duis arcu neque, vehicula convallis rhoncus eget, faucibus id turpis. Fusce et tellus vehicula, convallis nibh non, molestie dui. Mauris vel dolor nisi. Fusce tristique varius enim id tristique. Mauris in velit pellentesque, maximus dui nec, interdum purus. Maecenas nec nibh vitae augue luctus lobortis. Donec nec facilisis enim. Nullam a ligula mauris. In rutrum mi cursus sodales interdum. Sed non elit ut erat tincidunt sagittis eget non ligula.</p>
		
		<p>Duis vitae convallis dui. Phasellus sagittis auctor ornare. Nam vel eros eu tortor dictum rhoncus. Etiam dictum risus diam, et dapibus est faucibus sit amet. Vestibulum ut auctor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quis ultrices sem, mattis molestie mauris. Nulla facilisi. Phasellus ex nulla, rhoncus ac sem at, mollis tempus ante. Pellentesque vel ligula sed augue tristique feugiat.</p>
		
		<p>Aliquam et diam rutrum dui iaculis pharetra vitae eget enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at neque ac erat posuere accumsan id eu arcu. Nam pellentesque pulvinar commodo. Nulla id lorem sapien. Praesent vitae tortor rhoncus ante commodo efficitur at nec lacus. Vestibulum nisi dui, varius non vulputate pellentesque, iaculis pharetra massa. Sed arcu nisl, finibus sed hendrerit ac, rutrum a dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nec dapibus turpis.</p>
		
		<p>Sed viverra sed turpis eget condimentum. Pellentesque sit amet ipsum neque. Vivamus risus nisl, lobortis eu leo et, auctor sollicitudin tortor. Morbi posuere tellus tortor, id eleifend urna dictum sed. Aliquam ultrices dignissim urna, ultrices vestibulum tellus faucibus vel. Nullam placerat ac ligula non tempor. Etiam scelerisque, lacus eget dignissim tincidunt, lorem magna vulputate magna, in faucibus sem massa ac felis. Praesent nulla magna, facilisis at pretium sed, commodo vitae velit.</p>`
	},
	{
		title: 'Fusce non tellus hendrerit',
		image: '',
		author: 'chovy',
		category: 'news',
		timestamp: new Date('2022-06-17'),
		html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue maximus euismod. Etiam egestas quis sapien id pretium. Etiam consequat lacus sem, eu tempor elit egestas ac. Mauris vel justo vehicula, imperdiet erat tincidunt, fermentum quam. Ut sit amet libero venenatis, sollicitudin nisl vel, bibendum leo. Aliquam erat volutpat. Sed odio nibh, interdum sed aliquet non, posuere ac turpis. Etiam efficitur sollicitudin sem, eget dapibus dui dapibus in. Donec ligula purus, sodales at tristique sodales, ultrices at erat. Ut suscipit urna ac massa semper, vel consequat leo consequat. Sed id sapien ante. Nunc lacus felis, mollis at hendrerit eget, pulvinar vel dolor. In at neque non sem cursus ullamcorper. Nam nec felis id enim imperdiet molestie. Nulla sed blandit libero, vitae aliquet risus. Maecenas eu quam elementum, ultrices sem sit amet, fermentum dui.</p>

		<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum quam ac tortor interdum, sed vehicula erat suscipit. Integer quis felis non urna aliquet tempor vel vel eros. Duis arcu neque, vehicula convallis rhoncus eget, faucibus id turpis. Fusce et tellus vehicula, convallis nibh non, molestie dui. Mauris vel dolor nisi. Fusce tristique varius enim id tristique. Mauris in velit pellentesque, maximus dui nec, interdum purus. Maecenas nec nibh vitae augue luctus lobortis. Donec nec facilisis enim. Nullam a ligula mauris. In rutrum mi cursus sodales interdum. Sed non elit ut erat tincidunt sagittis eget non ligula.</p>
		
		<p>Duis vitae convallis dui. Phasellus sagittis auctor ornare. Nam vel eros eu tortor dictum rhoncus. Etiam dictum risus diam, et dapibus est faucibus sit amet. Vestibulum ut auctor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quis ultrices sem, mattis molestie mauris. Nulla facilisi. Phasellus ex nulla, rhoncus ac sem at, mollis tempus ante. Pellentesque vel ligula sed augue tristique feugiat.</p>
		
		<p>Aliquam et diam rutrum dui iaculis pharetra vitae eget enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at neque ac erat posuere accumsan id eu arcu. Nam pellentesque pulvinar commodo. Nulla id lorem sapien. Praesent vitae tortor rhoncus ante commodo efficitur at nec lacus. Vestibulum nisi dui, varius non vulputate pellentesque, iaculis pharetra massa. Sed arcu nisl, finibus sed hendrerit ac, rutrum a dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nec dapibus turpis.</p>
		
		<p>Sed viverra sed turpis eget condimentum. Pellentesque sit amet ipsum neque. Vivamus risus nisl, lobortis eu leo et, auctor sollicitudin tortor. Morbi posuere tellus tortor, id eleifend urna dictum sed. Aliquam ultrices dignissim urna, ultrices vestibulum tellus faucibus vel. Nullam placerat ac ligula non tempor. Etiam scelerisque, lacus eget dignissim tincidunt, lorem magna vulputate magna, in faucibus sem massa ac felis. Praesent nulla magna, facilisis at pretium sed, commodo vitae velit.</p>`
	},
	{
		title: 'Curabitur et convallis nibh',
		image: '',
		author: 'chovy',
		category: 'news',
		timestamp: new Date('2022-06-18'),
		html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue maximus euismod. Etiam egestas quis sapien id pretium. Etiam consequat lacus sem, eu tempor elit egestas ac. Mauris vel justo vehicula, imperdiet erat tincidunt, fermentum quam. Ut sit amet libero venenatis, sollicitudin nisl vel, bibendum leo. Aliquam erat volutpat. Sed odio nibh, interdum sed aliquet non, posuere ac turpis. Etiam efficitur sollicitudin sem, eget dapibus dui dapibus in. Donec ligula purus, sodales at tristique sodales, ultrices at erat. Ut suscipit urna ac massa semper, vel consequat leo consequat. Sed id sapien ante. Nunc lacus felis, mollis at hendrerit eget, pulvinar vel dolor. In at neque non sem cursus ullamcorper. Nam nec felis id enim imperdiet molestie. Nulla sed blandit libero, vitae aliquet risus. Maecenas eu quam elementum, ultrices sem sit amet, fermentum dui.</p>

		<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum quam ac tortor interdum, sed vehicula erat suscipit. Integer quis felis non urna aliquet tempor vel vel eros. Duis arcu neque, vehicula convallis rhoncus eget, faucibus id turpis. Fusce et tellus vehicula, convallis nibh non, molestie dui. Mauris vel dolor nisi. Fusce tristique varius enim id tristique. Mauris in velit pellentesque, maximus dui nec, interdum purus. Maecenas nec nibh vitae augue luctus lobortis. Donec nec facilisis enim. Nullam a ligula mauris. In rutrum mi cursus sodales interdum. Sed non elit ut erat tincidunt sagittis eget non ligula.</p>
		
		<p>Duis vitae convallis dui. Phasellus sagittis auctor ornare. Nam vel eros eu tortor dictum rhoncus. Etiam dictum risus diam, et dapibus est faucibus sit amet. Vestibulum ut auctor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quis ultrices sem, mattis molestie mauris. Nulla facilisi. Phasellus ex nulla, rhoncus ac sem at, mollis tempus ante. Pellentesque vel ligula sed augue tristique feugiat.</p>
		
		<p>Aliquam et diam rutrum dui iaculis pharetra vitae eget enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at neque ac erat posuere accumsan id eu arcu. Nam pellentesque pulvinar commodo. Nulla id lorem sapien. Praesent vitae tortor rhoncus ante commodo efficitur at nec lacus. Vestibulum nisi dui, varius non vulputate pellentesque, iaculis pharetra massa. Sed arcu nisl, finibus sed hendrerit ac, rutrum a dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nec dapibus turpis.</p>
		
		<p>Sed viverra sed turpis eget condimentum. Pellentesque sit amet ipsum neque. Vivamus risus nisl, lobortis eu leo et, auctor sollicitudin tortor. Morbi posuere tellus tortor, id eleifend urna dictum sed. Aliquam ultrices dignissim urna, ultrices vestibulum tellus faucibus vel. Nullam placerat ac ligula non tempor. Etiam scelerisque, lacus eget dignissim tincidunt, lorem magna vulputate magna, in faucibus sem massa ac felis. Praesent nulla magna, facilisis at pretium sed, commodo vitae velit.</p>`
	},
	{
		title: 'Fusce augue mauris, suscipit',
		image: '',
		author: 'chovy',
		category: 'news',
		timestamp: new Date('2022-06-19'),
		html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue maximus euismod. Etiam egestas quis sapien id pretium. Etiam consequat lacus sem, eu tempor elit egestas ac. Mauris vel justo vehicula, imperdiet erat tincidunt, fermentum quam. Ut sit amet libero venenatis, sollicitudin nisl vel, bibendum leo. Aliquam erat volutpat. Sed odio nibh, interdum sed aliquet non, posuere ac turpis. Etiam efficitur sollicitudin sem, eget dapibus dui dapibus in. Donec ligula purus, sodales at tristique sodales, ultrices at erat. Ut suscipit urna ac massa semper, vel consequat leo consequat. Sed id sapien ante. Nunc lacus felis, mollis at hendrerit eget, pulvinar vel dolor. In at neque non sem cursus ullamcorper. Nam nec felis id enim imperdiet molestie. Nulla sed blandit libero, vitae aliquet risus. Maecenas eu quam elementum, ultrices sem sit amet, fermentum dui.</p>

		<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris condimentum quam ac tortor interdum, sed vehicula erat suscipit. Integer quis felis non urna aliquet tempor vel vel eros. Duis arcu neque, vehicula convallis rhoncus eget, faucibus id turpis. Fusce et tellus vehicula, convallis nibh non, molestie dui. Mauris vel dolor nisi. Fusce tristique varius enim id tristique. Mauris in velit pellentesque, maximus dui nec, interdum purus. Maecenas nec nibh vitae augue luctus lobortis. Donec nec facilisis enim. Nullam a ligula mauris. In rutrum mi cursus sodales interdum. Sed non elit ut erat tincidunt sagittis eget non ligula.</p>
		
		<p>Duis vitae convallis dui. Phasellus sagittis auctor ornare. Nam vel eros eu tortor dictum rhoncus. Etiam dictum risus diam, et dapibus est faucibus sit amet. Vestibulum ut auctor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in ornare lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quis ultrices sem, mattis molestie mauris. Nulla facilisi. Phasellus ex nulla, rhoncus ac sem at, mollis tempus ante. Pellentesque vel ligula sed augue tristique feugiat.</p>
		
		<p>Aliquam et diam rutrum dui iaculis pharetra vitae eget enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at neque ac erat posuere accumsan id eu arcu. Nam pellentesque pulvinar commodo. Nulla id lorem sapien. Praesent vitae tortor rhoncus ante commodo efficitur at nec lacus. Vestibulum nisi dui, varius non vulputate pellentesque, iaculis pharetra massa. Sed arcu nisl, finibus sed hendrerit ac, rutrum a dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nec dapibus turpis.</p>
		
		<p>Sed viverra sed turpis eget condimentum. Pellentesque sit amet ipsum neque. Vivamus risus nisl, lobortis eu leo et, auctor sollicitudin tortor. Morbi posuere tellus tortor, id eleifend urna dictum sed. Aliquam ultrices dignissim urna, ultrices vestibulum tellus faucibus vel. Nullam placerat ac ligula non tempor. Etiam scelerisque, lacus eget dignissim tincidunt, lorem magna vulputate magna, in faucibus sem massa ac felis. Praesent nulla magna, facilisis at pretium sed, commodo vitae velit.</p>`
	}
]
	.map((post) => {
		post.html = post.html?.replace(/^\t{3}/gm, '');
		post.markdown = post.markdown?.replace(/^\t{3}/gm, '');
		post.slug = slugify(post.title, { lower: true });
		post.summary = in_a.nutshell(post.html || post.markdown, 3);
		post.tags = keyword_extractor
			.extract(`${post.title} - ${post.html || post.markdown}`, {
				language: 'english',
				remove_digits: true,
				return_changed_case: true,
				remove_duplicates: false,
				return_chained_words: false
			})
			.map(function process(topic) {
				topic = topic.toLowerCase().trim();
				topic = topic.replace(/[\W_]+/g, '');
				topic = topic.replace(/\s+/g, '-');

				return topic;
			});

		const counts = post.tags.reduce(
			(acc, value) => ({
				...acc,
				[value]: (acc[value] || 0) + 1
			}),
			{}
		);

		let topics = [];

		for (let topic in counts) {
			topics.push({ topic, count: counts[topic] });
		}

		topics = topics.filter((t) => t.topic);
		topics = topics.sort((a, b) => {
			return b.count - a.count;
		});

		topics = topics.slice(0, 10);
		topics = topics.map((topic) => topic.topic);
		post.tags = topics;

		return post;
	})
	.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

export default posts;
