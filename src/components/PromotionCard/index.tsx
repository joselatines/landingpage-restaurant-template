import { IFoodCard } from '../../interfaces';
import { showPrice } from '../../utils/functions';
import { PriceTag } from '../shared/PriceTag/styles';
import { Container, Img } from './styles';

export default function PromotionCard({ img, title, price, link }: IFoodCard) {
	return (
		<Container>
			<a href={link} target='_blank' rel='noopener noreferrer'>
				<Img>
					<img src={img} alt={title} />
				</Img>

				<span>{title}</span>
				<PriceTag>${showPrice(price)}</PriceTag>
			</a>
		</Container>
	);
}
