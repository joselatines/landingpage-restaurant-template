import { IFoodItems } from '../../interfaces';
import MenuCard from '../MenuCard';
import { Button } from '../shared/Button/styles';
import { TitleSection } from '../shared/TitleSection/styles';
import { InnerContainer } from './styles';

export default function Menu({ items }: IFoodItems) {
	return (
		<div id='menu'>
			<TitleSection>Nuestro menú</TitleSection>
			<InnerContainer>
				<div className='flex'>
					{items.map(({ title, price, img, link }) => (
						<MenuCard
							title={title}
							price={price}
							img={img}
							key={title}
							link={link}
						/>
					))}
				</div>
				<Button>
					<a
						href='https://i.ibb.co/s5gvpk8/BIO-SITE-1.webp'
						target='_blank'
						rel='noopener noreferrer'
					>
						Ver mas
					</a>
				</Button>
			</InnerContainer>
		</div>
	);
}
