import styled from 'styled-components';

export const Container = styled.section`
	display: grid;
	align-items: center;
`;
export const InnerContainer = styled.section`
	display: grid;
	place-items: center;
	gap: 2.5rem;
	.flex {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem 1.5rem;

		@media screen and (max-width: ${({ theme }) => theme.mediaQueries.table}) {
			gap: 2rem;
			justify-content: center;
		}
	}
`;
