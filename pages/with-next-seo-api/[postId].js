import axios from 'axios';
import { NextSeo } from 'next-seo';

function WithAPI({ blog }) {
	// console.log(blog);
	return (
		<>
			<NextSeo
				title={blog?.title}
				description={blog?.body}
				defaultTitle={blog?.title}
				openGraph={{
					url: `https://jsonplaceholder.typicode.com/posts/${blog?.id}`,
					title: blog?.title,
					description: blog?.body,
					type: 'website'
				}}
			/>
			<h1>{blog?.title}</h1>
			<h3>Product ID: {blog?.id}</h3>
		</>
	);
}

export default WithAPI;

export async function getStaticPaths() {
	const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
	const paths = res.data.map((post) => ({
		params: {
			postId: post.id.toString()
		}
	}));
	return {
		paths,
		fallback: 'blocking'
	};
}

export async function getStaticProps({ params }) {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);
	return {
		props: {
			blog: data
		}
	};
}
