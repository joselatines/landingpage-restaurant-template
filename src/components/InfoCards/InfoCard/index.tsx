import { Container, Content, Icon, Title } from './styles';
import { ReactNode } from 'react';

interface Props {
	title: string;
	content: string;
	content2?: string;
	icon: ReactNode;
}

export default function InfoCard({ title, content, content2, icon }: Props) {
	return (
		<Container>
			<Icon>{icon}</Icon>
			<Content>{content}</Content>
			{content2 && <Content>{content2}</Content>}
			<Title>{title}</Title>
		</Container>
	);
}
