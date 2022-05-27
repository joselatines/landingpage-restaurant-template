import { Button } from '../shared/Button/styles';
import { Buttons, Container, Restaurant, Title } from './styles';

interface Props {
	title: string;
	paragraph: string;
	restaurant: string;
}

export default function Header({ title, paragraph, restaurant }: Props) {
	return (
		<Container id='header'>
			<div>
				<Title>{title}</Title>
				<Restaurant as='h1'> {restaurant}</Restaurant>
			</div>
			<p>{paragraph}</p>
			<Buttons >
				<Button>
					<a href='#promotions'>Promociones</a>
				</Button>
				<Button outline={true}>
					<a href='#menu'>Ver menú</a>
				</Button>
			</Buttons>
		</Container>
	);
}
