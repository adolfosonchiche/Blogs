//importamos los hooks
import React, { useState, useEffect } from 'react';
import PostCard from '../components/postCards';
//importamos firebase
import firebase from '../lib/firebase';

//importamos los componentes
import { Container, Row } from 'reactstrap';

function PostList() {
	const [ postCollection, setPostCollection ] = useState({});

	useEffect(() => {
		console.log('componente montado');
		const database = firebase.database();
		const postRef = database.ref('/post');

		//on es un metodo que sirve para escuchar el valor de la referencias del la base de datos de firebase
		postRef.on('value', (snapshot) => {
			console.log(snapshot.val());
			setPostCollection(snapshot.val());
		});
	}, []);

	return (
		<Container className="mt-3">
			<h1>Lista de Posts</h1>
			<Row>
				{Object.keys(postCollection).map((key) => {
					let post = postCollection[key]; //representa informacion de cada post

					//const { postTitle, postContent, postCategory } = post;
					return (
                        <PostCard
                        key = {key}
                        postData = { post }
						postKey = {key}
                        />
                                                
					);
				})}
			</Row>
		</Container>
	);
}

export default PostList;

/*}
						<Col xs="12" md="6">
							<Card className="mb-3">
								<CardBody>
									<CardTitle tag="h5">{postTitle}</CardTitle>
									<CardText>{postContent}</CardText>
									<p className="text-left text-muted mb-0">{postCategory}</p>
								</CardBody>
							</Card>
						</Col>*/