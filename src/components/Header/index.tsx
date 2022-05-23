import { Button } from '../shared/Button/styles';
import { Container, Restaurant, Title } from './styles';

interface Props {
	title: string;
	paragraph: string;
	restaurant: string;
}

export default function Header({ title, paragraph, restaurant }: Props) {
	return (
		<Container>
			<div>
				<Title>{title}</Title>
				<Restaurant> {restaurant}</Restaurant>
			</div>
			<p>{paragraph}</p>
			<div>
				<Button size={2}>Button</Button>
				<button>Button</button>
			</div>
		</Container>
	);
}