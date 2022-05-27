import styled from 'styled-components';

export const Container = styled.div`
	max-width: 20vw;
	min-width: 15vw;

	font-weight: lighter;
	text-align: start;
	a {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: auto;
		grid-template-rows: repeat(3, auto);
	}
`;

export const Img = styled.div`
	overflow: hidden;
	&:hover img {
		transform: scale(1.1);
	}

	img {
		transition: transform .8s ease;
	}
`;
