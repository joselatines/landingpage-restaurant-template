import styled from 'styled-components';

export const Container = styled.nav`
	padding: 1rem 5rem;
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(0,0,0, .75);

	position: fixed;
	z-index: 100;
	width: 100%;
	left: 0;
`;
