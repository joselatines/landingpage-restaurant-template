import styled from 'styled-components';

export const Logo = styled.div`
	width: 5rem;
	margin-bottom: 8px;
`;

export const Container = styled.footer`
	margin: -5rem; // Ignores body padding
	margin-top: 5rem;
	padding: 3rem;
	gap: 2rem;

	a {
		all: unset;
		cursor: pointer;
	}

	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.font};
	padding: 3rem 4rem;

	ul {
		list-style-type: none;
		font-size: smaller;
		font-weight: lighter;
		li {
			transition: ${({ theme }) => theme.transitions.smoothShort};
			&:hover {
				transform: translateX(5px);
			}
		}
	}

	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.table}) {
		margin: -2rem; // Ignores body padding
		margin-top: 5rem;
	}
`;

export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	gap: 2rem;
	width: 100%;
	&.watermark {
		text-align: center;
		border-top: solid #fff 1px;
		padding-top: 0.5rem;
		margin-top: 3rem;
		flex-direction: column;
		place-items: center;
		font-size: 1rem;
		font-weight: lighter;
		a {
			transition: all ${({ theme }) => theme.transitions.smoothShort};
			&:hover {
				color: ${({ theme }) => theme.colors.primary};
			}
		}
	}
`;

export const Column = styled.div`
	span {
		fill: white;
	}
`;
export const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0 0.8rem;
	font-size: smaller;
	font-weight: lighter;

	span {
		transform: scale(1.5);
		transition: color ${({ theme }) => theme.transitions.smoothShort};
		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const Subtitle = styled.span`
	display: block;
	font-size: larger;
	font-weight: ${({ theme }) => theme.font.weight.regular};
`;
export const Img = styled.div`
	width: 5rem;
	img {
		object-fit: contain;
	}
`;
