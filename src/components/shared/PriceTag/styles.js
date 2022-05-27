import styled from 'styled-components';

export const PriceTag = styled.span`
	color: ${({ theme }) => theme.colors.helper};
	border-radius: 5px;
	border: solid ${({ theme }) => theme.colors.helper} 1px;
	padding: 0rem 0.5rem;
	font-weight: ${({ theme }) => theme.font.weight.light};
	width: max-content;
`;
