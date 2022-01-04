import { Col, Row,  CardBody, CardTitle, CardText, Container } from 'reactstrap';

import User from '../../resource/user.png';
import IconNerwork from '../../resource/network.png';
import IconLocal from '../../resource/linux.png';
import IconServer from '../../resource/server.png';
import LogoUsac from '../../resource/logo_usac.png';

const cv = () => {
	const title = ' Adolfo Son Chiché';
	const content = 'Bienvenido al sitio web de';
	const description = 'Estudiante de Ingeniería en Ciencias y Sistemas';
	const desU = 'USAC';
	const urlFacebook = 'https://www.facebook.com/Ad.395';

	return (
		<div xs="12">
            <br/>
			<Row xs="4" style={{ backgroundColor: '#285cdd', opacity: '0.8' }}>
                <Col></Col>
                <Col>
				<a href={urlFacebook} >
					<img top width="35%" height="" src={User} alt="facebook" />
				</a>
                </Col>
				<Col>
                <br/>
					<CardTitle tag="h5">{title}</CardTitle>

					<CardTitle tag="h6">{description}</CardTitle>
				</Col>
			</Row>

			<br />
			{/* <Col style={{ backgroundColor: '#31909e', opacity: '0.8' }}>
				<CardBody>
					<CardText>{content}</CardText>
					<CardTitle tag="h4">{title}</CardTitle>
				</CardBody>
			</Col>
			<br />
			<Col style={{ backgroundColor: '#31909e', opacity: '0.8' }}>
				<CardBody>
					<CardText>{desU}</CardText>
					<img top width="10%" height="" src={LogoUsac} alt="" />
				</CardBody>
				<Col>
					<img top width="5%" height="" src={IconServer} alt="" />
					<img top width="5%" height="" src={IconLocal} alt="" />
					<img top width="5%" height="" src={IconNerwork} alt="" />
					<br />
				</Col>
			</Col> */}
		</div>
	);
};

export default cv;
