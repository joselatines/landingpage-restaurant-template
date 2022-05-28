import { Helmet } from 'react-helmet';
import { GalleryContainer, Header, InfoCards, Map } from '../index';
import Carrousel from '../Carrousel';
import Menu from '../Menu';
import info from '../../restaurantInfo.json';
import { Main } from './styles';

export default function Layout() {
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

				{/*   <!-- Open Graph / Facebook --> */}
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://hiromi-sushi.netlify.app' />
				<meta property='og:title' content={restaurantData.seo.title} />
				<meta
					property='og:description'
					content={restaurantData.seo.description}
				/>
				<meta property='og:image' content='/public/images/wallpaper.jpg' />

				{/*      <!-- Twitter --> */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://hiromi-sushi.netlify.app/'
				/>
				<meta property='twitter:title' content={restaurantData.seo.title} />
				<meta
					property='twitter:description'
					content={restaurantData.seo.description}
				/>
				<meta property='twitter:image' content='' />
			</Helmet>

			<Header
				title={restaurantContent.spanish.header.title}
				paragraph={restaurantContent.spanish.header.paragraph}
				restaurant={restaurantData.restaurantName}
			/>

			<InfoCards />

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
