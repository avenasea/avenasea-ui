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
		title: 'How to Reach Luxury Planners for Hotel Events',
		image: '/images/blog/event-planner.jpg',
		author: 'chovy',
		category: 'news',
		timestamp: new Date('2022-07-06'),
		html: `<p>Luxury planners are
a group of highly-sought after people with the power to influence
hotels in their decisions. They have high standards, but they also
know that luxury comes at a price—and they're willing to pay it. In
order for you to get their business, you need to be able to show them
why your hotel is worth every penny.</p>
<h2>Personalize your approach.</h2>
<p>Personalize your
approach.</p>
<p>The luxury hotel
event planner is a busy, on-the-go professional who is responsible
for creating and executing fantastic events at luxury hotels. They
are a combination of marketing, operations and sales all rolled into
one. As such, they have many demands on their time. Make it easy for
them to respond to your request by using their name when contacting
them. Also use their title (if applicable), company name and location
(if applicable), as well as their industry or role within the
organization (if applicable). If you can find out their contact
information and include that in any communication with them as well –
even better!</p>
<h2>Understand the importance of customer
relationships.</h2>
<p>Customer
relationship management (CRM) is the process of managing
relationships with customers, while simultaneously improving their
enjoyment and loyalty. It's a critical aspect of business growth and
success, but it isn't as simple as it sounds.</p>
<p>If you want to build
strong customer relationships, you need to communicate with those
customers on a regular basis. You also need to be able to listen
closely when they talk back—as well as react quickly when they have
an issue or concern. In order for this process to work smoothly, it's
important that all your employees are trained in effective
communication techniques like active listening and empathy-based
problem solving skills (EBS).</p>
<h2>Show off your unique selling proposition.</h2>
<p>Every good business
has a unique selling proposition (USP). It's the one thing that makes
your company stand out from the competition. A USP can be something
as simple as a product feature or price point, but it can also be
something more intangible, like your brand identity and personality.
If you want to reach luxury planners for hotel events, you need to
develop an attention-grabbing USP—and then convey it in every email
and conversation you have with potential clients.</p>
<p>The best way to
create a compelling USP is through research into your target
audience's needs and desires. Think about what they're looking for in
their ideal event planner: how much experience do they have? What
kind of service do they expect? What are their budget limitations?
Once you've identified these factors, think about how they affect
what kinds of events you offer—and why those events will resonate
with this particular clientele.</p>
<p>Once you've got this
figured out, it's time for the fun part: sharing your findings with
potential clients! You'll want to find ways of communicating this
information that reflect both who your target audience is (i.e.,
affluent) and what makes them unique (their desire for high-quality
products).</p>
<h2>Give them something to talk about.</h2>
<p>Give them something
to talk about.</p>
<p>The best and most
effective way to attract luxury planners is by giving them a reason
to talk about your hotel, your event, and/or your brand. If they have
something interesting to share with their followers and their
clients, they'll be happy that you provided it for them.</p>
<h2>Emphasize the value of face-to-face
communications.</h2>
<p>We live in a world
where we think we can do everything online. But events are not an
easy task to plan. If you want to get the best results from your
event, there are some things that work better in person than over
email or chat. Let's look at some of them:</p>
<ul>
	<li><p>A
	creative process requires creative thinking and a lot of
	communication. Planning an event is often a collaborative process
	between different departments within the organization and external
	vendors. You need all these people to brainstorm together in order
	for your idea to come alive for your attendees. In other words, it
	requires face-to-face communications or video calls so everyone can
	see each other's ideas at once, rather than just reading them on a
	screen or having one person send emails back and forth with another
	person who might not be available right away due to time zone
	differences (or just because they don't check their emails every
	second).</p>
</ul>
<h2>Direct engagement with planners is the key to
winning their business.</h2>
<p>It's important to
understand that planners are often working on tight deadlines, with
multiple clients and competing demands. They need to know that you
can deliver what they need—and that it will be worth their while.
Show them how your company can set them apart from the competition by
providing personalized service and top-notch food and beverage.</p>
<p>Make sure that you
can answer questions about your own unique approach, highlight its
value in a clear way, and show how it will benefit the planner's
clients. For example: “My winemaking philosophy emphasizes terroir,
which means that each vintage is unique because it reflects its
environment. In addition to having an established reputation for
selecting excellent grapes from vineyards around the world (which
makes my wines special), we also have our own production facility
here in Napa Valley where we craft our wines with care every step of
the way.&quot;</p>
<h2>Conclusion</h2>
<p>To sum up, we've
covered a lot of ground in this post. We've looked at the ways that
luxury planners can be reached, and how you should approach them. We
hope that you've found some useful tips here to help guide your
plans for meeting with luxury planners. The bottom line is that there
are many different types of planners out there, so it's important
that you understand what makes each group tick in order to reach them
effectively</p>`
	},
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
