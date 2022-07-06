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

We've been helping planners and venues connect with our new platform, so we know what it takes to get a successful event. If you're looking to grow your business with hotel RFPs, avenasea can help. Our software integrates with GBTA, has an intuitive and professional interface, and is fully customizable for any industry or event type – from small meetings to large conventions!`
	},
	{
		title: 'Win more RFP bids',
		image: '/images/blog/win-more-bids.jpg',
		author: 'chovy',
		category: 'news',
		timestamp: new Date('2022-07-06'),
		html: null,
		markdown: `If you're a hotel owner or manager, then you understand the importance of standing out from your competitors. But if you're not careful, your RFPs can end up blending into the background noise and losing their impact. Fortunately, there are ways to make sure that doesn't happen:

## Do you want to stand out among the competition? Then your RFPs need to be better.

RFPs are a great way to get new customers, but only if you win them. And the more RFP bids you win, the more likely you are to be successful in your business. In fact, RFPs have become an important part of many companies' marketing strategies and serve as another way for businesses and organizations to find the right products or services for their needs.

But how do you make sure your company wins as many RFP bids as possible? The answer is simple: write better responses!

## What differentiates you from your competitors?

What differentiates you from your competitors?

A lot of people think that simply being the best hotel in town is enough to win an RFP. But as competitive as the hospitality industry has become, and for good reason, it's not enough to be "just" a great hotel. Hoteliers need to take a hard look at why they are better than their competitors—and then make sure they communicate this difference clearly in their proposal. For example:

- If you have a smaller footprint that allows for more personalized service and less waiting time, say so.
- If you offer an offsite dining experience that is worth traveling across town for, say so.
- If your location offers a view of something special (a national park or city landmark), mention it!

## What are the greatest threats to your market share?

For each of these threats, list the top three to five ways you can mitigate that threat.

For example:

- Competition: We will be offering a new product line in the next six months that will increase our presence and reduce competition for our current clientele.
- Technology: Our company has developed a proprietary mobile app that will allow customers to access our products from anywhere at any time. This will make it easier for them to shop with us without having to drive all over town trying different stores looking for what they need or want.

## In a poor economy, how well do you manage costs and expenses?

- How do you manage costs and expenses?
- How can you cut back on expenses?
- What are the most effective ways to reduce costs in a hotel?
- What are the most effective ways to reduce costs in a hotel chain?

## How do you measure the success of your hotel?

Hotel success can be measured in any number of ways. It's important to understand what your goals are, and then to measure the items that will drive your goals. Here are some examples:

- Revenue (i.e., room nights sold)
- Guest satisfaction (i.e., customer satisfaction surveys)
- Number of repeat bookings by existing guests

You can also measure other things like brand awareness and social media engagement, but those are less likely to have a direct impact on revenue.

## How do you measure guest satisfaction?

How do you measure guest satisfaction?

It's a common question that hoteliers ask. Guests are the lifeblood of your business and if they stay happy, then things will run smoothly for your hotel.

The best way to gauge guest satisfaction is through surveys and feedback. You can try asking them if they would recommend the hotel to friends or family members or perhaps see what their biggest complaint was about their stay. This information can be used as a starting point for improving customer service and making changes to improve it further down the line.

It's much more effective than relying on reviews alone because those only reflect one person's experience while reviews are often filtered by travel bloggers who want a good review themselves in exchange (and often don't tell anyone else).

## How does your hotel support the community?

How does your hotel support the community?

To win an RFP, you need to know how your hotel's services support the interests of all stakeholders (customers, employees and community). Your community involvement should include:

- Community outreach programs that help bring awareness to local issues affecting people in the area.
- Community events, such as charity walks and cultural festivals.
- Donation programs that provide funding for local charities and non-profits that align with your brand. This could include food donations or money donated through a matching program where customers donate money to a designated organization when they stay at your hotel.

## What tools does your hotel use to track guest feedback and preferences?

Customer feedback is one of the most powerful tools you can use to improve your hotel's guest experience, satisfaction, loyalty and retention.

But if you're not tracking customer feedback effectively, it's like driving a car without a steering wheel or brakes. You'll never be able to make any changes or improvements until something goes wrong (and then it might be too late).

Here are some questions for you:

- How do you know what your guests want?
- Are your employees always giving feedback? Do they know how important it is?
- Do you have a system in place to gather guest comments and complaints and analyze them regularly?

## Making sure that your RFPs are targeted and personalized is important in this industry.

Making sure that your RFPs are targeted and personalized is important in this industry. Don't just send out a standard response to every RFP you get; make sure it's tailored to the hotel and community in question. To do this, first read the RFP thoroughly to determine what they're looking for. Then make sure that your proposal answers those questions and addresses their needs properly. Remember: they're not just going to give the bid away because you answered all of their questions correctly - there are other companies out there vying for the same job as well! You'll have to go above and beyond if you want them to choose yours over theirs!

## Conclusion

We hope that our tips and tricks for improving your RFPs have helped you win more bids. We know that this is a competitive industry, but if you know how to reach out to potential clients and make them want your services then there's no reason why you shouldn't be successful!`
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
