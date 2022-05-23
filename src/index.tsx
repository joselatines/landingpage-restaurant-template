import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';

import { darkTheme } from './styles/themes';
import { GlobalStyles } from './styles/globalStyles';
const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
