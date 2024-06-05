import {Link} from '@/lib/link';
import {Box, Grid, VisuallyHidden, styled} from '@/styled-system/jsx';
import {Suspense} from 'react';
import {Searchbar} from './searchbar';
import {getIcons} from './utils';

interface Props {
	searchParams: {
		search?: string | string[];
	};
}

export default async function IconsPage({searchParams}: Props) {
	const icons = await getIcons({search: searchParams.search?.toString()});

	let totalHtml = '';

	if (icons.length === 0) {
		totalHtml += 'No icons found';
	} else if (icons.length === 1) {
		totalHtml += '1 icon found';
	} else {
		totalHtml += `${icons.length} icons found`;
	}

	if (searchParams.search) {
		totalHtml += ` for <strong>'${searchParams.search}'</strong>`;
	}

	return (
		<>
			<Suspense>
				<Searchbar />
			</Suspense>

			<Box
				mb="3"
				mt={{
					base: '5',
					lg: '8',
				}}
				fontSize="sm"
				dangerouslySetInnerHTML={{
					__html: totalHtml,
				}}
			/>

			<Grid
				gridTemplateColumns={{
					base: '6',
					md: '8',
					lg: '10',
					xl: '12',
				}}
				gap="2"
			>
				{icons.map((icon) => (
					<Link
						key={icon.slug}
						href={`/icons/${icon.slug}`}
						scroll={false}
						display="flex"
						alignItems="center"
						justifyContent="center"
						rounded="sm"
						p="2"
						borderWidth="1px"
						aspectRatio="square"
						_hover={{
							bg: {
								base: 'gray-true.50',
								_dark: 'gray-true.800/10',
							},
						}}
					>
						<styled.span
							dangerouslySetInnerHTML={{
								__html: icon.html,
							}}
						/>

						<VisuallyHidden>{icon.name.formal}</VisuallyHidden>
					</Link>
				))}
			</Grid>
		</>
	);
}
