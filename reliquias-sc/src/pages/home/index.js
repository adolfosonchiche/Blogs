import { Col, CardBody, CardTitle, CardText } from 'reactstrap';

import IconFace from '../../resource/facebook.png';
import IconTwitter from '../../resource/twitter.png';
import IconGit from '../../resource/git.png';
import IconNerwork from '../../resource/network.png';
import IconLocal from '../../resource/linux.png';
import IconServer from '../../resource/server.png';
import LogoUsac from '../../resource/logo_usac.png';
import React from 'react';

class inicio extends React.Component {
	constructor(props) {
		super(props);
		this.state = { seconds: 0 };
	}

	content = 'Bienvenido a mi Sitio Web';
	description = 'Soy ';
	urlFacebook = 'https://www.facebook.com/Ad.395';
	urlTwitter = 'https://twitter.com/sc_ado';
	urlGit = 'https://github.com/adolfosonchiche';
	desU = 'USAC';
	contador = 0;
	bandera = 0;

	tick() {
		if (this.contador < 7) {
			if (this.bandera === 1) {
				this.description += ' Adolfo ';
				this.bandera++;
			} else if (this.bandera === 2) {
				this.description += ' Son';
				this.bandera++;
			} else if (this.bandera === 3) {
				this.description += '  Chiché';
				this.bandera++;
			} else if (this.bandera === 4) {
				this.bandera++;
			} else {
				if (this.bandera === 6) {
					this.description = 'Soy';
					this.bandera = 0;
					this.contador = 8;
				}
				this.bandera++;
			}
		} else if (this.contador < 10 && this.contador > 7) {
			if (this.bandera === 1) {
				this.description += ' Estudiante ';
				this.bandera++;
			} else if (this.bandera === 2) {
				this.description += 'de Ingeniería  ';
				this.bandera++;
			} else if (this.bandera === 3) {
				this.description += '   en  ';
				this.bandera++;
			} else if (this.bandera === 4) {
				this.description += ' Ciencias y ';
				this.bandera++;
			} else if (this.bandera === 5) {
				this.description += 'Sistemas';
				this.bandera++;
			} else {
				if (this.bandera === 8) {
					this.description = 'Soy';
					this.bandera = 0;
					this.contador = 0;
				}
				this.bandera++;
			}
		}
		this.setState((state) => ({
			seconds: state.seconds + 1
		}));
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		return (
			<div>
				<section xs="12">
					<Col>
						<a href={this.urlFacebook}>
							<img top width="5%" height="" src={IconFace} alt="facebook" />
						</a>
						<a href={this.urlTwitter}>
							<img top width="5%" height="" src={IconTwitter} alt="facebook" />
						</a>
						<a href={this.urlGit}>
							<img top width="6%" height="" src={IconGit} alt="facebook" />
						</a>
					</Col>

					<br />
					<Col style={{ backgroundColor: '#31909e', opacity: '0.8' }}>
						<CardBody>
							<CardTitle tag="h5">{this.content}</CardTitle>
						</CardBody>
					</Col>
					<br />
					<Col style={{ backgroundColor: '#31909e', opacity: '0.9' }}>
						<CardBody>
							<CardTitle tag="h3">
								{this.state.seconds > this.contador ? `${this.description}.` : this.description}
							</CardTitle>
							<img top width="10%" height="" src={LogoUsac} alt="" />
							<CardText>{this.desU}</CardText>
						</CardBody>
						<Col>
							<img top width="5%" height="" src={IconServer} alt="" />
							<img top width="5%" height="" src={IconLocal} alt="" />
							<img top width="5%" height="" src={IconNerwork} alt="" />
							<br />
						</Col>
					</Col>
				</section>
			</div>
		);
	}
}

export default inicio;
