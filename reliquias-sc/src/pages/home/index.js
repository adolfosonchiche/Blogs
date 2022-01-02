import { Col, CardBody, Container, CardTitle, CardText } from 'reactstrap';



import IconFace from '../../resource/facebook.png';
import IconTwitter from '../../resource/twitter.png';
import IconGit from '../../resource/git.png';
import IconNerwork from '../../resource/network.png'
import IconLocal from '../../resource/linux.png'
import IconServer from '../../resource/server.png'
import LogoUsac from '../../resource/logo_usac.png'

const inicio = () => {
	const title = ' Adolfo Son Chiché';
	const content = 'Bienvenido al sitio web de';
	const description = 'Estudiante de Ingeniería en Ciencias y Sistemas'
	const desU = 'USAC'
	 const urlFacebook = 'https://www.facebook.com/Ad.395'
	const urlTwitter = 'https://twitter.com/sc_ado'
	const urlGit = 'https://github.com/adolfosonchiche'



	return (
		<Col xs="12">
			<Col>
				<a href={urlFacebook}><img  top width="5%" height="" src={IconFace} alt="facebook" /></a>
				<a href={urlTwitter}><img top width="5%" height="" src={IconTwitter} alt="facebook" /></a>
				<a href={urlGit}><img top width="6%" height="" src={IconGit} alt="facebook" /></a>
			</Col>

			<br />
			<Col style={{ backgroundColor: '#51e9a9', opacity: '0.8' }}>
				<CardBody>
					<CardText>{content}</CardText>
					<CardTitle tag="h4">{title}</CardTitle>
				</CardBody>
			</Col>
			<br/>
			<Col  style={{ backgroundColor: '#51e9a9', opacity: '0.8' }}>
				<CardBody>
					<CardTitle tag="h6">{description}</CardTitle>
					<CardText>{desU}</CardText>
					<img  top width="10%" height="" src={LogoUsac} alt="" />
				</CardBody>
				<Col>
				<img  top width="5%" height="" src={IconServer} alt="" />
				<img  top width="5%" height="" src={IconLocal} alt="" />
				<img  top width="5%" height="" src={IconNerwork} alt="" />
				<br/>
				</Col>
			</Col>
		</Col>
	);
};

export default inicio;
