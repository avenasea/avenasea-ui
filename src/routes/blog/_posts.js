import slugify from 'slugify';
import in_a from 'in-a-nutshell';
import keyword_extractor from 'keyword-extractor';

const posts = [
	{
		title: 'What are Hotel RFPs?',
		image: '/images/blog/what-are-rfps.jpg',
		author: 'chovy',
		category: 'news',
		timestamp: new Date('2022-07-01'),
		html: null,
		markdown: `We hear the term "RFP" all the time, but do you really know what it means? If you're a planner, then chances are good that you've received an RFP from a potential venue or supplier. And if you haven't yet received one, there's always a chance that one will come your way in the future. It's important to know what an RFP is so that you can properly respond to them and get the business!

## avenasea makes it easy to create and track your responses to every RFP.

When you respond to an RFP, you will have a better chance of getting the business. A well-written response can help your company stand out from the competition and provide details that show how your services are truly unique.

avenasea helps you create an unforgettable event by finding the perfect venue for every type of meeting and event.

The first step in this process is responding to hotel RFPs, which we've made easy with our RFP template builder.

Whether it's a formal or informal meeting, avenasea has all of your needs covered when it comes to booking great spaces for conferences and conventions at any venue size!

## We also help planners find the best venue for their event.

We also help planners find the best venue for their event. We offer a comprehensive list of venues and hotels, as well as an easy-to-use system that allows you to search and filter based on your needs. For example, you can search by location and date range, or browse through our comprehensive list of venues in order to find one that fits all your needs.

We also help planners find the best hotel for their event. We have partnered with multiple hotels across the country that provide great rates and amenities—all at competitive prices! You can book rooms directly through us or use our booking platform if you prefer to handle things yourself.

## We can help you respond to hotel RFPs.

Planning an event is challenging enough without having to work out how to respond to a hotel RFP. avenasea makes it easy for planners to create and track their responses with our RFP solution, which also helps them find the best venue for their event.

## Have questions?

If you have any questions, please [email us](mailto:hello@avenasea.com?subject=avenasea) or [call us](tel:18886902044). We're happy to help!

Our team is available 24/7 and we respond within 24 hours.

## avenasea is here to help you get more business.

The avenasea platform is designed to help you do more, faster. Whether you're planning your next conference or managing an event in real time, avenasea has what you need to plan and execute flawless events. And because our solution is fully integrated, it's the only event technology platform that can help you manage all of your events from one place—saving time and money while ensuring a consistent experience for your attendees.

We’ve been helping planners and venues connect with our new platform, so we know what it takes to get a successful event. If you’re looking to grow your business with hotel RFPs, avenasea can help. Our software integrates with GBTA, has an intuitive and professional interface, and is fully customizable for any industry or event type – from small meetings to large conventions!`
	},
	{
		title: 'Fusce augue mauris, suscipit',
		image: '',
		author: 'chovy',
		category: 'news',
		timestamp: new Date('2022-06-16'),
		html: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue maximus euismod. Etiam egestas quis sapien id pretium. Etiam consequat lacus sem, eu tempor elit egestas ac. Mauris vel justo vehicula, imperdiet erat tincidunt, fermentum quam. Ut sit amet libero venenatis, sollicitudin nisl vel, bibendum leo. Aliquam erat volutpat. Sed odio nibh, interdum sed aliquet non, posuere ac turpis. Etiam efficitur sollicitudin sem, eget dapibus dui dapibus in. Donec ligula purus, sodales at tristique sodales, ultrices at erat. Ut suscipit urna ac massa semper, vel consequat leo consequat. Sed id sapien ante. Nunc lacus felis, mollis at hendrerit eget, pulvinar vel dolor. In at neque non sem cursus ullamcorper. Nam nec felis id enim imperdiet molestie. Nulla sed blandit libero, vitae aliquet risus. Maecenas eu quam elementum, ultrices sem sit amet, fermentum dui.</p>

When you respond to an RFP, you will have a better chance of getting the business. A well-written response can help your company stand out from the competition and provide details that show how your services are truly unique.

avenasea helps you create an unforgettable event by finding the perfect venue for every type of meeting and event.

The first step in this process is responding to hotel RFPs, which we've made easy with our RFP template builder.

Whether it's a formal or informal meeting, avenasea has all of your needs covered when it comes to booking great spaces for conferences and conventions at any venue size!

## We also help planners find the best venue for their event.

We also help planners find the best venue for their event. We offer a comprehensive list of venues and hotels, as well as an easy-to-use system that allows you to search and filter based on your needs. For example, you can search by location and date range, or browse through our comprehensive list of venues in order to find one that fits all your needs.

We also help planners find the best hotel for their event. We have partnered with multiple hotels across the country that provide great rates and amenities—all at competitive prices! You can book rooms directly through us or use our booking platform if you prefer to handle things yourself.

## We can help you respond to hotel RFPs.

Planning an event is challenging enough without having to work out how to respond to a hotel RFP. avenasea makes it easy for planners to create and track their responses with our RFP solution, which also helps them find the best venue for their event.

## Have questions?

If you have any questions, please <a href="mailto:hello@avenasea.com">contact us</a>. We’re happy to help!

Our team is available 24/7 and we respond within 24 hours.

## avenasea is here to help you get more business.

The avenasea platform is designed to help you do more, faster. Whether you're planning your next conference or managing an event in real time, avenasea has what you need to plan and execute flawless events. And because our solution is fully integrated, it's the only event technology platform that can help you manage all of your events from one place—saving time and money while ensuring a consistent experience for your attendees.

We’ve been helping planners and venues connect with our new platform, so we know what it takes to get a successful event. If you’re looking to grow your business with hotel RFPs, avenasea can help. Our software integrates with GBTA, has an intuitive and professional interface, and is fully customizable for any industry or event type – from small meetings to large conventions!`
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
