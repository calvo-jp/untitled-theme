import {Clipboard, ClipboardIndicator, ClipboardTrigger} from '@/lib/clipboard';
import {Icon} from '@/lib/icon';
import {Box, Flex, Grid} from '@/styled-system/jsx';
import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-react';
import {Suspense} from 'react';
import {Searchbar} from '../searchbar';
import {getColors} from '../utils';

interface Props {
	searchParams: {
		search?: string | string[];
	};
}

export default async function Page({searchParams}: Props) {
	const colors = await getColors(searchParams.search?.toString());

	return (
		<>
			<Suspense>
				<Searchbar />
			</Suspense>

			<Flex
				fontFamily="mono"
				direction="column"
				gap={{
					base: '4',
					lg: '6',
				}}
				mt={{
					base: '5',
					lg: '8',
				}}
			>
				{Object.entries(colors).map(([name, shades]) => {
					return (
						<Flex
							key={name}
							flexDir={{
								base: 'column',
							}}
							gap="2"
							className="group"
						>
							<Flex alignItems="center" gap="2">
								<Box fontWeight="medium">{name}</Box>

								<Clipboard
									value={JSON.stringify({[name]: shades}, null, 2)}
									display="flex"
									transform={{
										lg: 'scale(0)',
									}}
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
									base: '6',
									md: '12',
								}}
								gap={{
									base: '1',
									lg: '2',
								}}
							>
								{Object.entries(shades).map(([shade, value]) => (
									<Box key={shade}>
										<Box
											aspectRatio="square"
											style={{
												backgroundColor: value,
											}}
										/>

										<Box
											mt="2"
											fontSize="sm"
											display={{
												base: 'none',
												lg: 'block',
											}}
										>
											{shade}
										</Box>
										<Box
											display={{
												base: 'none',
												lg: 'block',
											}}
											fontSize="xs"
											lineHeight="none"
											color={{
												base: 'gray-true.700',
												_dark: 'gray-true.500',
											}}
										>
											{value}
										</Box>
									</Box>
								))}
							</Grid>
						</Flex>
					);
				})}
			</Flex>
		</>
	);
}
