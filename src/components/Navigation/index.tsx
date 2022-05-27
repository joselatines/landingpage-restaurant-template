import { useState } from 'react';
import Hamburger from './Hamburger';
import { Container } from './styles';

export default function Navigation() {
	const [isToggle, setIsToggle] = useState<boolean>(false);
	return (
		<Container toggle={isToggle}>
			<div>
				<a href='#header'>
					<img src='../../images/logo.png' alt='hiromi logo' />
				</a>
			</div>
			<ul>
				<li>
					<a href='#promotions'>Promociones</a>
				</li>
				<li>
					<a href='#menu'>Menú</a>
				</li>
				<li>
					<a href='#map'>Restaurantes</a>
				</li>
			</ul>
			<div className='hamburger'>
				<Hamburger setIsToggle={setIsToggle} isToggle={isToggle} />
			</div>
		</Container>
	);
}
