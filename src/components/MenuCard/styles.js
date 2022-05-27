import styled from 'styled-components';

export const Container = styled.div`
	min-width: 15rem;
	width: 20vw;
`;

export const Img = styled.div`
	height: 30vh;
	margin-bottom: 1rem;
	overflow: hidden; /* Removing this will break the effects */
	&:hover img {
		transform: scale(1.1);
	}

	img {
		transition: transform 0.8s ease;
	}
`;
export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
