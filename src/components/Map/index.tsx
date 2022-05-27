import React, { useState } from 'react';
import { TitleSection } from '../shared/TitleSection/styles';
import { Container, Flex } from './styles';

interface IMap {
	name: string;
	gps: string;
}

interface Props {
	locations: IMap[];
}

export default function Map({ locations }: Props) {
	const [currentLocation, setCurrentLocation] = useState<string | undefined>(
		'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15692.81726245532!2d-66.8542461!3d10.4845537!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68c1b72d71c1d7d6!2sCentro%20Ciudad%20Comercial%20Tamanaco%20(CCCT)!5e0!3m2!1ses!2sve!4v1653661852701!5m2!1ses!2sve'
	);

	const checkCurrentLocation = (e: React.MouseEvent<HTMLSpanElement>) => {
		const locationSelected = locations.find(
			el => el.name === e.currentTarget.textContent
		);

		setCurrentLocation(locationSelected?.gps);
	};

	return (
		<Container id='map'>
			<TitleSection>Visita nuestros locales</TitleSection>

			<iframe src={currentLocation} loading='lazy'></iframe>

			<Flex>
				{locations.map(({ name }) => (
					<span key={name} onClick={e => checkCurrentLocation(e)}>
						{name}
					</span>
				))}
			</Flex>
		</Container>
	);
}
