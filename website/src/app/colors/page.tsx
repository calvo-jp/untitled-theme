import {Box, Flex, Grid} from '@/styled-system/jsx';
import colors from '@untitled-theme/colors';
import type {Metadata} from 'next';
import {Suspense} from 'react';
import {Searchbar} from './searchbar';

export const metadata: Metadata = {
	title: 'Colors',
	description: 'Untitled UI colors for Tailwind and Panda',
};

interface Props {
	searchParams: {
		search?: string | string[];
	};
}

export default function Page({searchParams}: Props) {
	const items = getItems({search: searchParams.search?.toString()});

	return (
		<Box fontFamily="mono">
			<Suspense>
				<Searchbar />
			</Suspense>

			<Flex
				direction="column"
				gap="6"
				mt={{
					base: '5',
					lg: '8',
				}}
			>
				{items.map((item) => (
					<Flex
						key={item.label}
						flexDir={{
							base: 'column',
						}}
						gap={{
							base: '3',
							lg: '2',
						}}
					>
						<Box w="8rem" fontWeight="medium">
							{item.label}
						</Box>

						<Grid
							gridTemplateColumns={{
								base: 4,
								md: 8,
								lg: 12,
							}}
							gap="3"
						>
							{item.value.map((subItem) => (
								<Box key={subItem.label}>
									<Box
										aspectRatio="square"
										style={{
											backgroundColor: subItem.value,
										}}
									/>

									<Box mt="2" fontSize="sm">
										{subItem.label}
									</Box>
									<Box
										fontSize="xs"
										lineHeight="none"
										color={{
											base: 'gray-true.700',
											_dark: 'gray-true.500',
										}}
									>
										{subItem.value}
									</Box>
								</Box>
							))}
						</Grid>
					</Flex>
				))}
			</Flex>
		</Box>
	);
}

function getItems({search}: {search?: string}) {
	const o: {
		label: string;
		value: {
			label: string;
			value: string;
		}[];
	}[] = [];

	Object.entries(colors).forEach(([k, v]) => {
		if (typeof v === 'string') return;

		o.push({
			label: k,
			value: Object.entries(v).map(([k1, v1]) => ({
				label: k1,
				value: v1,
			})),
		});
	});

	return o.filter((item) => {
		if (!search) return true;

		return item.label
			.replace(/-/, '')
			.toLowerCase()
			.includes(search.toLowerCase().replace(/-/, '').replace(/\s/, ''));
	});
}
