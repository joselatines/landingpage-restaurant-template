import { TitleSection } from '../shared/TitleSection/styles';

import { Container, Image, Gallery } from './styles';

interface IImg {
	pos: string;
	img: string;
	alt: string;
}

interface Props {
	images: IImg[];
	title: string;
}

export default function GalleryContainer({ images, title }: Props) {
	return (
		<Container>
			<TitleSection>{title}</TitleSection>
			<Gallery>
				{images.map(({ pos, img, alt }) => (
					<Image key={alt} className={pos}>
						<img src={img} alt={alt} />
					</Image>
				))}
			</Gallery>
		</Container>
	);
}
