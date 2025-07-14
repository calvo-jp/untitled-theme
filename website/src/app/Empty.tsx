import type {CSSProperties} from 'react';

export interface EmptyProps {
	id?: string;
	style?: CSSProperties;
	className?: string;
}

export function Empty(props: EmptyProps) {
	return (
		<div {...props}>
			<div className="pr-4 lg:pr-8">
				<div className="relative mx-auto size-[8rem] rounded-full bg-neutral-100 lg:size-[12rem] dark:bg-neutral-800">
					<div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 size-[6.5rem] rounded-full bg-white lg:size-[10rem] dark:bg-neutral-900" />
					<div className="-rotate-45 absolute right-0 bottom-0 h-8 w-3 rounded-full bg-neutral-100 lg:h-12 lg:w-4 dark:bg-neutral-800" />
				</div>
			</div>

			<div className="mt-10 lg:mt-12">
				<h3 className="text-center font-bold lg:text-lg">No records found</h3>
				<p className="text-center text-neutral-500 text-sm lg:text-base">
					<span>No record matches your search.</span>
					<a
						href="https://github.com/calvo-jp/untitled-theme/issues/new"
						className="text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
						target="_blank"
						rel="noopener noreferrer"
						data-sveltekit-preload-data="false"
					>
						Create an issue
					</a>
				</p>
			</div>
		</div>
	);
}
