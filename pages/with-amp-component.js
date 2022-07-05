import { NextSeo } from 'next-seo';
export const config = { amp: true };
function WithAmpComponent() {
	const date = new Date();
	return (
		<div>
			<NextSeo
				title="Check out this seo superpower from Next js"
				titleTemplate="Check out this seo superpower from Next js"
				defaultTitle="Check out this seo superpower from Next js"
				description="Check out this seo superpower from Next js"
			/>
			<p>Some time: {date.toJSON()}</p>
			<amp-timeago
				width="0"
				height="15"
				datetime={date.toJSON()}
				layout="responsive"
			>
				.
			</amp-timeago>
		</div>
	);
}

export default WithAmpComponent;
