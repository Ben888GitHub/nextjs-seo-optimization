import { NextSeo } from 'next-seo';

function WithNextSeo() {
	return (
		<>
			<NextSeo
				title="Check out this seo superpower from Next js"
				titleTemplate="Check out this seo superpower from Next js"
				defaultTitle="Check out this seo superpower from Next js"
				description="Check out this seo superpower from Next js"
				canonical="https://www.avneesh.tech/" // this is your website domain
				openGraph={{
					url: 'https://www.avneesh.tech/',
					title: 'Avneesh Agarwal',
					description:
						'A full stack web developer, who loves to design and develop beautiful websites. I have been coding for over a year now. One of my hobbies is writing, I love to document my journey by writing blog posts and also teach others through them.',
					images: [
						{
							url: '/og-image.png',
							width: 800,
							height: 420,
							alt: 'Avneesh Agarwal'
						}
					]
				}} // this data will be shown when you share this links on  on discord, Twitter, Facebook, WhatsApp, Slack, etc
				twitter={{
					handle: '@avneesh0612',
					site: '@avneesh0612',
					cardType: 'summary_large_image'
				}} // define how the twitter card should look like on Twitter
			/>
			<h1>With Next SEO</h1>
		</>
	);
}

export default WithNextSeo;
