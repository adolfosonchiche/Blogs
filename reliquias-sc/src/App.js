//hooks de estado para manipular estados del sistema
import React, { useState } from 'react';
import './App.css';
//importamos las paginas que creamos
import NewPost from './pages/NewPost';
import Home from './pages/home/index'
import PostList from './pages/PostList';

//importamos elementos del react router-dom para rutear los componetes
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//piezas para el navbar
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import routes from './route/routes';
import Create from './pages/create';

function App() {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		/**aqui va el contenido de la aplicacion lo que se va ver en la pantalla*/

		<div className="App">
			<Router>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">son-@c</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="mr-auto" navbar>
							{routes.routes.map((route) => {
								const { label, path } = route;
								return (
									<NavItem>
										<Link to={path}>
											<NavLink>{label}</NavLink>
										</Link>
									</NavItem>
								);
							})}
							{/* <Link to="/" className="nav-link" >
								 crear post 
							</Link>
							<Link to="/postList" className="nav-link" >
								  ver post
							</Link> */}
						</Nav>
					</Collapse>
				</Navbar>
				<Routes>
				<Route exact path="/" element={<Home />} />
					<Route exact path="/my" element={<NewPost />} />
					<Route path="/posts" element={<PostList />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
