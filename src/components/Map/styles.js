import styled from 'styled-components';

export const Container = styled.section`
	width: 100%;
	iframe {
		width: 100%;
		height: 60vh;
	}
`;
export const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	span {
		cursor: pointer;
		transition: all ${({ theme }) => theme.transitions.smoothShort};
		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;
