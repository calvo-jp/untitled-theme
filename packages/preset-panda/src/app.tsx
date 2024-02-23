import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/open-sans/400.css';
import './app.css';

import {lazy, Suspense} from 'react';
import {BrowserRouter, Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {css} from 'styled-system/css';
import {Flex, HTMLStyledProps, styled} from 'styled-system/jsx';

const items = [
	{
		url: '/button',
		name: 'Button',
		component: lazy(() => import('./pages/button')),
	},
	{
		url: '/input',
		name: 'Input',
		component: lazy(() => import('./pages/input')),
	},
];

export function App() {
	return (
		<BrowserRouter>
			<Flex>
				<Sidebar />

				<styled.main p={12}>
					<Suspense fallback={<Spinner w={8} h={8} color="gray-light.500" />}>
						<Routes>
							{items.map((item) => (
								<Route key={item.url} path={item.url} Component={item.component} />
							))}

							<Route path="*" element={<Navigate to={items[0].url} />} />
						</Routes>
					</Suspense>
				</styled.main>
			</Flex>
		</BrowserRouter>
	);
}

function Sidebar() {
	return (
		<styled.nav p={12} w="16rem">
			<styled.ul>
				{items.map((item) => {
					return (
						<styled.li key={item.name}>
							<NavLink
								to={item.url}
								className={css({
									py: 0.5,
									display: 'block',
									fontFamily: 'heading',
								})}
							>
								{item.name}
							</NavLink>
						</styled.li>
					);
				})}
			</styled.ul>
		</styled.nav>
	);
}

function Spinner(props: HTMLStyledProps<'svg'>) {
	return (
		<styled.svg xmlns="http://www.w3.org/2000/svg" w={6} h={6} viewBox="0 0 24 24" {...props}>
			<path
				fill="currentColor"
				d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
				opacity=".25"
			/>
			<path
				fill="currentColor"
				d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
			>
				<animateTransform
					attributeName="transform"
					dur="0.75s"
					repeatCount="indefinite"
					type="rotate"
					values="0 12 12;360 12 12"
				/>
			</path>
		</styled.svg>
	);
}
