import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
		// If there are an unknown CSS bug look at this
		scroll-behavior: smooth;
    }
	
    body {
    	background: ${({ theme }) => theme.colors.bg};
       	color: ${({ theme }) => theme.colors.font};
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;;

		@media screen and (min-width: 320px) {
    		font-size: calc(${({ theme }) => theme.font.size.default} + 6 * ((100vw - 320px) / 680));	
		}

		@media screen and (min-width: 1000px) {
   			font-size: 22px;
		}
		// Project styles

		padding: 0 5rem;
		a {
			all: unset;
			cursor: pointer;
			
		}
		img { 
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 5px;
		}
		@media screen and (max-width: ${({ theme }) => theme.mediaQueries.table}) {
			padding: 2rem;
		}
	}
	`;
