// For fix theme provider props
// https://medium.com/rbi-tech/theme-with-styled-components-and-typescript-209244ec15a3
import 'styled-components';
interface Colors {
	primary: string;
	secondary: string;
	helper: string;
	danger: string;
	bg: string;
	white: string;
	gray: string;
	black: string;
	font: string;
}
interface Font {
	style: string;
	size: {
		default: string;
		xxl: string;
		xl: string;
		lg3: string;
		lg2: string;
		lg1: string;
		lg: string;
		md: string;
		sm: string;
		xs: string;
	};
	weight: {
		light: number;
		regular: number;
		medium: number;
		bold: number;
		black: number;
		thin: number;
	};
}
interface Transitions {
	smoothShort: string;
}
interface MediaQueries {
	table: string;
	phone: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: Colors;
		font: Font;
		transitions: Transitions;
		mediaQueries: MediaQueries;
	}
}
