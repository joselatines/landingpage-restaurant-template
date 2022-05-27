import InfoCard from './InfoCard';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { ReactNode } from 'react';

interface Cards {
	title: string;
	content: string;
	content2?: string;
	icon: ReactNode;
}

const cards: Cards[] = [
	{
		title: 'Horarios',
		content: 'Lunes a Sábado',
		content2: '12:00pm - 10:00pm',
		icon: <AccessTimeIcon />,
	},
	{
		title: 'Locales',
		content: 'C.C. Lido | El Paraíso Sambil',
		content2: '| C.C. Lider',
		icon: <StorefrontIcon />,
	},
	{
		title: 'Contacto',
		content: '+58 04126115721',
		content2: '+58 04126115721',
		icon: <LocalPhoneIcon />,
	},
];

export default function InfoCards() {
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				gap: '3rem',
			}}
		>
			{cards.map(({ title, content, content2, icon }) => (
				<InfoCard
					key={title}
					title={title}
					content={content}
					content2={content2}
					icon={icon}
				/>
			))}
		</div>
	);
}
