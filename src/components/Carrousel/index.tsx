// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper';
import { Container } from './styles';
import PromotionCard from '../PromotionCard';
import { TitleSection } from '../shared/TitleSection/styles';
import { IFoodItems } from '../../interfaces';

export default function Carrousel({ items }: IFoodItems) {
	return (
		<Container id='promotions'>
			<TitleSection>Ultimas promociones</TitleSection>
			<div>
				<Swiper
					slidesPerView={4}
					spaceBetween={30}
					slidesPerGroup={3}
					loop={false}
					loopFillGroupWithBlank={false}
					/* pagination={{
						clickable: false,
					}} */
					navigation={false}
					modules={[Pagination, Navigation]}
					className='mySwiper'
				>
					{items.map(({ title, img, price, link }) => (
						<SwiperSlide style={{ cursor: 'grab' }} key={title}>
							<PromotionCard
								title={title}
								img={img}
								price={price}
								link={link}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</Container>
	);
}
