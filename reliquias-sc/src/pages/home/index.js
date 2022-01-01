import { Col, CardBody, CardTitle, CardText } from 'reactstrap';
import { Text } from 'react-native';



import IconFace from '../../resource/facebook.png';
import IconTwitter from '../../resource/twitter.png';
import IconGit from '../../resource/git.png';

const inicio = () => {
	const title = ' Adolfo Son Chiché';
	const content = 'Bienvenido al sitio web de';
	let urlFacebook = 'https://www.facebook.com/Ad.395'
	let urlTwitter = 'https://twitter.com/sc_ado'
	let urlGit = 'https://github.com/adolfosonchiche'



	return (
		<Col xs="12">
			<Col>
				<Text>contacto:</Text>
				<a href={urlFacebook}><img  top width="5%" height="" src={IconFace} alt="facebook" /></a>
				<a href={urlTwitter}><img top width="5%" height="" src={IconTwitter} alt="facebook" /></a>
				<a href={urlGit}><img top width="6%" height="" src={IconGit} alt="facebook" /></a>
			</Col>

			<br />
			<Col style={{ backgroundColor: '#78bfdf', opacity: '0.6' }}>
				<CardBody>
					<CardText>{content}</CardText>
					<CardTitle tag="h5">{title}</CardTitle>
				</CardBody>
			</Col>
		</Col>
	);
};

export default inicio;
