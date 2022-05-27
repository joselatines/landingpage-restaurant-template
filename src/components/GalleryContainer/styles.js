import styled from 'styled-components';

export const Container = styled.section`
	text-align: center;
`;

export const Gallery = styled.section`
	display: grid;
	grid-template-columns: 1fr 2.6fr 1fr;
	grid-template-rows: repeat(2, 30vh);
	gap: 2rem;
	grid-template-areas:
		'left top right'
		'left bottom right';

	@media screen and (max-width: ${({ theme }) => theme.mediaQueries.phone}) {
		gap: 1rem;
		grid-template-columns: repeat(2, auto);
		grid-template-areas:
			'left right'
			'top bottom ';
	}
`;

export const Image = styled.div`
	img {
		border-radius: 5px;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	&.left {
		grid-area: left;
	}

	&.top {
		grid-area: top;
	}

	&.bottom {
		grid-area: bottom;
	}

	&.right {
		grid-area: right;
	}
`;
