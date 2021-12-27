//hooks de estado para manipular estados del sistema
import React, { useState } from 'react';
import './App.css';
//importamos las paginas que creamos
import NewPost from './pages/NewPost';
import PostList from './pages/PostList';

//importamos elementos del react router-dom para rutear los componetes
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//piezas para el navbar
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from 'reactstrap';

function App() {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		/**aqui va el contenido de la aplicacion lo que se va ver en la pantalla*/

		<div className="App">
			<Router>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<Link to="/" className="nav-link" >
								 crear post 
							</Link>
							<Link to="/postList" className="nav-link" >
								  ver post
							</Link>
						</Nav>
					</Collapse>
				</Navbar>
				<Routes>
					<Route exact path="/"
          element = {<NewPost/>}>
						
					</Route>
					<Route path="/postList" 
          element = { <PostList/>}>
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
