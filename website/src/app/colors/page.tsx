import {Clipboard, ClipboardIndicator, ClipboardTrigger} from '@/lib/clipboard';
import {Icon} from '@/lib/icon';
import {Box, Flex, Grid} from '@/styled-system/jsx';
import colors from '@untitled-theme/colors';
import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-react';
import type {Metadata} from 'next';
import {Suspense} from 'react';
import {Searchbar} from '../searchbar';

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
					<Item key={item.label} data={item} />
				))}
			</Flex>
		</Box>
	);
}

interface IItem {
	label: string;
	value: {
		label: string;
		value: string;
	}[];
}

function Item({data}: {data: IItem}) {
	const asJson = {
		[data.label]: data.value.reduce<Record<string, unknown>>((o, i) => {
			o[i.label] = i.value;
			return o;
		}, {}),
	};

	return (
		<Flex
			key={data.label}
			flexDir={{
				base: 'column',
			}}
			gap={{
				base: '3',
				lg: '2',
			}}
			className="group"
		>
			<Flex alignItems="center" gap="2">
				<Box fontWeight="medium">{data.label}</Box>

				<Clipboard
					value={JSON.stringify(asJson, null, 2)}
					display="flex"
					transform="scale(0)"
					transition="transform 200ms"
					_groupHover={{
						transform: 'scale(1)',
					}}
					_focusWithin={{
						transform: 'scale(1)',
					}}
				>
					<ClipboardTrigger cursor="pointer">
						<ClipboardIndicator
							copied={
								<Icon w="4" h="4" color="success.500">
									<CheckIcon />
								</Icon>
							}
						>
							<Icon w="4" h="4">
								<Copy01Icon />
							</Icon>
						</ClipboardIndicator>
					</ClipboardTrigger>
				</Clipboard>
			</Flex>

			<Grid
				gridTemplateColumns={{
					base: 4,
					md: 8,
					lg: 12,
				}}
				gap="2"
			>
				{data.value.map((subItem) => (
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
	);
}

function getItems({search}: {search?: string}) {
	const o: IItem[] = [];

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
			.includes(search.trim().toLowerCase().replace(/-/, '').replace(/\s/, ''));
	});
}
