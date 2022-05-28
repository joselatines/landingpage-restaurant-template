import IonIcon from '@reacticons/ionicons';
import { Column, Subtitle, Container, Row, Flex, Img, Logo } from './styles';

export default function Footer() {
	return (
		<Container>
			<Row>
				<Column>
					<Logo>
						<a
							href='https://www.instagram.com/hiromisushive/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<img src='../../images/logo.png' alt='hiromi logo' />
						</a>
					</Logo>
					<Flex>
						<a
							href='https://www.instagram.com/hiromisushive/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IonIcon name='logo-instagram' />
						</a>

						<a
							href='https://www.tiktok.com/@hiromisushive'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IonIcon name='logo-tiktok' />
						</a>

						<a
							href='https://www.facebook.com/HiromiSushiVe'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IonIcon name='logo-facebook' />
						</a>

						<a
							href='https://twitter.com/hiromisushive?s=01'
							target='_blank'
							rel='noopener noreferrer'
						>
							<IonIcon name='logo-twitter' />
						</a>
					</Flex>
				</Column>
				<Column>
					<Subtitle>Locales</Subtitle>
					<ul>
						<li>
							<a
								href='https://www.google.com/maps/place/Centro+Ciudad+Comercial+Tamanaco+(CCCT)/@10.4845537,-66.8542461,15z/data=!4m2!3m1!1s0x0:0x68c1b72d71c1d7d6?sa=X&ved=2ahUKEwiyyLestoD4AhWulWoFHZz7ChgQ_BJ6BAhmEAU'
								target='_blank'
								rel='noopener noreferrer'
							>
								CCCT
							</a>
						</li>
						<li>
							<a
								href='https://www.google.com/maps/place/F3F3%2BXMP+C.+C.+Galer%C3%ADas+Para%C3%ADso,+Caracas+1020,+Distrito+Capital/@10.4749527,-66.9457931,15z/data=!4m2!3m1!1s0x8c2a5f740da1d489:0xb630fcac13751860'
								target='_blank'
								rel='noopener noreferrer'
							>
								El Paraíso
							</a>
						</li>
						<li>
							<a
								href='https://www.google.com/maps/place/C.+C.+L%C3%ADder/@10.4859436,-66.8210799,15z/data=!4m2!3m1!1s0x0:0xb03e14bfba3d104f'
								target='_blank'
								rel='noopener noreferrer'
							>
								C.C Líder
							</a>
						</li>
						<li>
							<a
								href='https://www.google.com/maps/place/Centro+Sambil+Caracas/@10.4893475,-66.854531,15z/data=!4m5!3m4!1s0x0:0xa0a7f3589cd07134!8m2!3d10.4893475!4d-66.854531'
								target='_blank'
								rel='noopener noreferrer'
							>
								C.C Sambil
							</a>
						</li>
					</ul>
				</Column>

				<Column>
					<Subtitle>Contacto</Subtitle>
					<ul>
						<li>
							<a
								href='https://api.whatsapp.com/send/?phone=584242054335&text&app_absent=0'
								target='_blank'
								rel='noopener noreferrer'
							>
								+58 4242054335
							</a>
						</li>
						<li>
							<a
								href='https://api.whatsapp.com/send/?phone=584126115721&text&app_absent=0'
								target='_blank'
								rel='noopener noreferrer'
							>
								+58 4126115721
							</a>
						</li>
						<li>
							<a
								href='https://api.whatsapp.com/send/?phone=584241931364&text&app_absent=0'
								target='_blank'
								rel='noopener noreferrer'
							>
								+58 4241931364
							</a>
						</li>
						<li>
							<a
								href='https://api.whatsapp.com/send?phone=584124819489&text=Deseo%20realizar%20un%20pedido'
								target='_blank'
								rel='noopener noreferrer'
							>
								Pedido Expres
							</a>
						</li>
					</ul>
				</Column>

				<Column>
					<Subtitle>Métodos de pago</Subtitle>
					<Flex>
						<Img>
							<img
								src='https://logos-marcas.com/wp-content/uploads/2021/02/Zelle-Logo.png'
								alt='zelle logo'
							/>
						</Img>
						<Img>
							<img
								src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Binance_logo.svg/2560px-Binance_logo.svg.png'
								alt='binance logo'
							/>
						</Img>
						<Img>
							<img
								src='https://banesco-prod-2020.s3.amazonaws.com/wp-content/uploads/Banca-Electronica-PM-.png'
								alt='binance logo'
							/>
						</Img>
					</Flex>
				</Column>
			</Row>
			<Row className='watermark'>
				<span>
					All rights reserved © 2022{' '}
					<a
						href='https://joselatines.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						José Latines
					</a>
				</span>
			</Row>
		</Container>
	);
}
