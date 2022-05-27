import styled from 'styled-components';

export const Container = styled.section`
	padding: 1rem;
	border: solid 3px ${({ theme }) => theme.colors.primary};
	text-align: center;
	color: ${({ theme }) => theme.colors.font};
	font-size: 0.8em;
	display: grid;
	place-items: center;
	min-width: 15rem;
`;

export const Icon = styled.div`
	color: ${({ theme }) => theme.colors.font};
	width: 4rem;
	svg {
		width: 100%;
		height: 100%;
	}
`;

export const Content = styled.span`
	font-weight: lighter;
`;
export const Title = styled.span`
	font-size: smaller;
	font-weight: lighter;
	color: ${({ theme }) => theme.colors.gray};
`;
