import { BreadcrumbJsonLd } from 'next-seo';

const BreadCrumbs = () => (
	<>
		<BreadcrumbJsonLd
			itemListElements={[
				{
					position: 1,
					name: 'Home',
					item: 'https://dhanar98.hashnode.dev/'
				},
				{
					position: 2,
					name: 'Visual Studio Code',
					item: 'https://dhanar98.hashnode.dev/visual-studio-code'
				}
			]}
		/>
	</>
);

export default BreadCrumbs;
