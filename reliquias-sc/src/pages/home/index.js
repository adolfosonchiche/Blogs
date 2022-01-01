import { Row, Col, Card, Container, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { ImageBackground, Text } from 'react-native';

import Img from '../../resource/inicio.jpg';
import IconFace from '../../resource/facebook.png';
import IconTwitter from '../../resource/twitter.png';
import IconGit from '../../resource/git.png';

const inicio = () => {
	const title = 'Hector Adolfo Son Chiché';
	const content = 'Bienvenido a la pagina web de';

	return (
		<div>
			<Col>		
			<Text>contacto:</Text>
				<img top width="4%" height="" src={IconFace} alt="facebook" />
				<img top width="4%" height="" src={IconTwitter} alt="facebook" />
				<img top width="5%" height="" src={IconGit} alt="facebook" />
			</Col>

			<br />
			<br />
			<Container>
				<CardBody>
					<CardText>{content}</CardText>
					<CardTitle tag="h5">{title}</CardTitle>
				</CardBody>
			</Container>
		</div>
	);
};

export default inicio;
