import styled, { css } from 'styled-components';

interface Props {
	size?: number;
	outline?: boolean;
}

export const Button = styled.button<Props>`
	all: unset;
	cursor: pointer;
	font-size: ${({ size }) => (size ? size : '1em')};
	text-align: center;
	width: max-content;
	padding: 0.5em 2em;
	padding-right: 2.8em;
	color: #fff;
	background-color: ${({ theme }) => theme.colors.primary};

	clip-path: ${({ outline }) =>
		outline
			? 'polygon(14% 0, 100% 0%, 100% 100%, 0% 100%)'
			: 'polygon(0 0, 100% 0%, 86% 100%, 0% 100%)'};

	transition: all 0.4s ease-in-out;
	&:hover {
		transform: translateX(5px);
	}
	${({ outline, theme }) =>
		outline &&
		css`
			background-color: ${({ theme }) => theme.colors.font};
			color: ${theme.colors.primary};
			padding-left: 2.8em;
			&:hover {
				color: ${theme.colors.white};
				background-color: ${theme.colors.primary};
				transform: translateX(-5px);
			}
		`}

	a {
		all: unset;
	}
`;
