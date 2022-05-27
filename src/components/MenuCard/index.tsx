import { IFoodCard } from '../../interfaces';
import { showPrice } from '../../utils/functions';
import { PriceTag } from '../shared/PriceTag/styles';
import { Container, Content, Img } from './styles';

export default function MenuCard({ title, img, price, link }: IFoodCard) {
	return (
		<Container>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				<Img>
					<img src={img} alt={title} />
				</Img>
				<Content>
					<span>{title}</span>
					<PriceTag>${showPrice(price)}</PriceTag>
				</Content>
			</a>
		</Container>
	);
}
