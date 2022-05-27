import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/globalStyles';
import Loader from './components/shared/Loader';
const App = lazy(() => import('./App'));
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Suspense fallback={<Loader />}>
				<App />
			</Suspense>
		</ThemeProvider>
	</React.StrictMode>
);
