import styled, { css } from 'styled-components';

interface Props {
	isToggle: boolean;
	setIsToggle: (state: boolean) => void;
}
interface IToggle {
	toggle?: boolean;
}

export default function Hamburger({ isToggle, setIsToggle }: Props) {
	return (
		<Container onClick={() => setIsToggle(!isToggle)} toggle={isToggle}>
			<span></span>
			<span></span>
			<span></span>
		</Container>
	);
}

const Container = styled.div<IToggle>`
	cursor: pointer;
	display: block;
	z-index: 100;
	&:hover {
		opacity: 0.8;
	}

	span {
		display: block;
		width: 25px;
		height: 3px;
		margin: 5px auto;

		transition: all 0.3s ease-in-out;
		background-color: ${({ theme }) => theme.colors.font};

		${({ toggle }) => toggle &&
			css`
				&:nth-child(2) {
					opacity: 0;
				}
				&:nth-child(1) {
					transform: translateY(8px) rotate(45deg);
				}
				&:nth-child(3) {
					transform: translateY(-8px) rotate(-45deg);
				}
			`}
	}
`;
