import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import './app.css';

import {lazy, Suspense} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {styled} from 'styled-system/jsx';
import {Navbar} from './navbar';
import {Sidebar} from './sidebar';

const LandingPage = lazy(() => import('./pages/landing'));
const ButtonPage = lazy(() => import('./pages/button'));

export function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<styled.div display="flex">
				<Sidebar />
				<styled.main p={5}>
					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path="/" Component={LandingPage} />
							<Route path="/button" Component={ButtonPage} />
						</Routes>
					</Suspense>
				</styled.main>
			</styled.div>
		</BrowserRouter>
	);
}

function Loading() {
	return (
		<styled.div textStyle="text.sm" color="gray-light.500">
			Loading...
		</styled.div>
	);
}
