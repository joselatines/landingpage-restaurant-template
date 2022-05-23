import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
	
    body {
    	background: red;
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

		@media screen and (max-width: ${({ theme }) => theme.mediaQueries.table}) {
			padding: 2rem;
		}
	}
	`;
