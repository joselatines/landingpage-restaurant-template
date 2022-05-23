import styled, { css } from 'styled-components';

interface Props {
	size?: number;
	outline?: boolean;
}

export const Button = styled.button<Props>`
	cursor: pointer;
	outline: none;
	font-size: ${({ size }) => (size ? size : '1em')};
	text-align: center;
	width: max-content;
	padding: 0.5em 1.5em;
	border: none;
	color: #fff;
	font-weight: ${({ theme }) => theme.font.weight.bold};
	background: ${({ theme }) => theme.colors.primary};
	background-size: 300% 100%;
	
	transition: all 0.4s ease-in-out;
	&:hover {
		background-position: 100% 0;
	}
	${({ outline, theme }) =>
		outline &&
		css`
			background-color: transparent;
			color: ${theme.colors.primary};
			border: 3px solid ${theme.colors.primary};
			&:hover {
				color: ${theme.colors.white};
				background-color: ${theme.colors.primary};
			}
		`}
`;
