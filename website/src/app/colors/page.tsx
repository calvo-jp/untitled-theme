import {Clipboard} from '@ark-ui/react';
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

			<div className="font-mono flex flex-col gap-4 lg:gap-6 mt-5 lg:mt-8">
				{Object.entries(colors).map(([name, shades]) => {
					return (
						<div key={name} className="group flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<div className="font-medium">{name}</div>

								<Clipboard.Root
									value={JSON.stringify({[name]: shades}, null, 2)}
									className="flex lg:scale-0 transition-transform duration-150 focus-within:scale-100 group-hover:scale-100"
								>
									<Clipboard.Trigger className="cursor-pointer">
										<Clipboard.Indicator copied={<CheckIcon className="icon text-success-500" />}>
											<Copy01Icon className="icon" />
										</Clipboard.Indicator>
									</Clipboard.Trigger>
								</Clipboard.Root>
							</div>

							<div className="grid grid-cols-6 md:grid-cols-12 gap-1 lg:gap-2">
								{Object.entries(shades).map(([shade, value]) => (
									<div key={shade}>
										<div
											className="aspect-square"
											style={{
												backgroundColor: value,
											}}
										/>

										<div className="mt-2 text-sm hidden lg:block">{shade}</div>
										<div className="hidden lg:block text-xs leading-none text-gray-true-700 dark:text-gray-true-500">
											{value}
										</div>
									</div>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
