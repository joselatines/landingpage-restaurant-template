import { DefaultTheme } from 'styled-components';

const font = {
	style: 'Roboto',
	size: {
		default: '16px',
		xxl: '5em', //80px
		xl: '3em', //48px
		lg3: '2.7em', //43.2px
		lg2: '2.5em', //40px
		lg1: '1.625em', //26px
		lg: '1.5em', //24px
		md: '1.25em', //18px
		sm: '1em', //16px
		xs: '0.75em', //12px
	},
	weight: {
		light: 300, // Most used
		regular: 400, // Most used
		medium: 500, // Most used

		bold: 700,
		black: 900,
		thin: 100,
	},
};
const transitions = {
	smoothShort: '0.3s ease-in-out',
};

const mediaQueries = {
	table: '60em',
};

export const darkTheme: DefaultTheme = {
	colors: {
		primary: '#7C2CE5',
		secondary: '#2C3AB9',
		helper: '#15D562',
		danger: 'red',
		bg: '#000624',
		white: '#fff',
		gray: '#8189B4',
		black: '#000',
		font: '#fff',
	},
	font,
	transitions,
	mediaQueries,
};

export const lightTheme: DefaultTheme = {
	colors: {
		primary: '#2C3AB9',
		secondary: '#15D562',
		helper: 'red',
		danger: 'red',
		bg: '#fff',
		white: '#fff',
		gray: '#8189B4',
		black: '#000',
		font: '#000',
	},
	font,
	transitions,
	mediaQueries,
};
