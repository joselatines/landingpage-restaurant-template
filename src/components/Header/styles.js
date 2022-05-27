import styled from 'styled-components';

export const Container = styled.section`
	margin: 0 -5rem; // Ignores body padding
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
		place-items: center;
		text-align: center;
		padding: 2rem 2rem;
		padding-top: 6rem;
		margin: -2rem -2rem;
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

export const Buttons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
`;
