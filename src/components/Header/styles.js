import styled from 'styled-components';

export const Container = styled.section`
	margin: 0 -5rem 4rem; // Ignores body padding
	padding: 8rem 5rem 5rem;

	display: grid;
	grid-template-columns: 0.9fr;
	grid-template-rows: repeat(3, min-content);
	gap: 1.5rem;

	background-image: url('../../images/header.jpg');
	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	p {
		width: 70%;
		font-weight: lighter;
	}

	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.table}) {
		grid-template-columns: auto;
		padding: 2rem 2rem;
		padding-top: 5rem;
		margin: -2rem -2rem 4rem;
	}
`;

export const Title = styled.span`
	font-weight: ${({ theme }) => theme.font.weight.bold};
	font-size: ${({ theme }) => theme.font.size.lg3};
	line-height: 1;
`;

export const Restaurant = styled(Title)`
	color: ${({ theme }) => theme.colors.primary};
	display: inline;
`;
