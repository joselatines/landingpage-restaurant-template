import { Helmet } from 'react-helmet';
import { GalleryContainer, Header, InfoCards, Map } from '../index';
import Carrousel from '../Carrousel';
import Menu from '../Menu';
import info from '../../restaurantInfo.json';
import { Main } from './styles';

export default function Layout() {
	/* interface IData {
		restaurantName: string;
		mainLang: string;
		seo: {
			title: string;
			description: string;
		};
	} */
	const restaurantData = info.data;
	const restaurantContent = info.content;

	return (
		<Main>
			{/* UNSAFE_componentWillMount */}
			<Helmet>
				<title>{restaurantData.seo.title}</title>
				<meta name='description' content={restaurantData.seo.description} />
				<meta name='robots' content='index, follow' />
				<meta name='keywords' content={restaurantData.seo.keywords} />
				<meta name='language' content='Spanish' />
				<meta name='revisit-after' content='25 days' />
				<meta name='author' content='Jose Latines' />
			</Helmet>

			<Header
				title={restaurantContent.spanish.header.title}
				paragraph={restaurantContent.spanish.header.paragraph}
				restaurant={restaurantData.restaurantName}
			/>

			<div
				style={{
					display: 'grid',
					placeItems: 'center',
				}}
			>
				<InfoCards />
			</div>
			<GalleryContainer
				images={restaurantContent.gallery}
				title='El mejor lugar para estar'
			/>
			<section>
				<Carrousel items={restaurantContent.promotions} />
			</section>
			<Menu items={restaurantContent.menu} />
			<Map locations={restaurantContent.locations} />
		</Main>
	);
}
