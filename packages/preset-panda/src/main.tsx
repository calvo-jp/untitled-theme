import '@/assets/styles/globals.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {styled} from 'styled-system/jsx';
import {Navbar} from './navbar';
import {ButtonPage} from './pages/button';
import {LandingPage} from './pages/landing';
import {Sidebar} from './sidebar';

createRoot(document.getElementById('app')!).render(
	<StrictMode>
		<BrowserRouter>
			<Navbar />
			<styled.div display="flex">
				<Sidebar />
				<styled.main p={5}>
					<Routes>
						<Route path="/" Component={LandingPage} />
						<Route path="/button" Component={ButtonPage} />
					</Routes>
				</styled.main>
			</styled.div>
		</BrowserRouter>
	</StrictMode>,
);
