import styled, { css } from 'styled-components';

interface Props {
	toggle: boolean;
}

export const Links = styled.ul``;

export const Container = styled.nav<Props>`
	padding: 1rem 5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.75);

	position: fixed;
	z-index: 100;
	width: 100%;
	left: 0;
	div img {
		width: 1.5rem;
	}

	ul {
		list-style-type: none;
		font-size: smaller;
		font-weight: lighter;

		display: flex;
		gap: 1rem;
		li {
			transition: ${({ theme }) => theme.transitions.smoothShort};
			&:hover {
				transform: translateY(-2px);
			}
			a {
				all: unset;
				cursor: pointer;
			}
		}
	}

	.hamburger {
		display: none;
	}

	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.table}) {
		.hamburger {
			display: block;
		}
		ul {
			flex-direction: column;
			height: 100vh;
			padding: 2rem;
			background-color: rgba(0, 0, 0, 0.99);
			transition: left ${({ theme }) => theme.transitions.smoothShort};

			position: absolute;
			top: 0;
			left: -100%;
			${({ toggle }) => toggle &&
				css`
					left: 0;
				`}
		}
	}
`;
