//componente que solo va a mostrar los posts
//es un componente tonto porque no hace nada mas que solo mostrar

import firebase from "../../lib/firebase"

import {
    Col, Card, CardBody, CardTitle, CardText, Button
} from "reactstrap"

function PostCard( props ) {

	//handler para el button eliminar post
	const deleteHandler = event => {
		
		let postKey = event.target.dataset.postKey
		console.log(postKey)

		//creamos una referencia al post para eliminar
		const database = firebase.database()
		const postRef = database.ref(`/post/${postKey}`)

		postRef.remove()
	}

    const { postTitle, postContent, postCategory, createDate } = props.postData

	
	let postKey = props.postKey

	return (
		<Col xs="12" md="6">
			<Card className="mb-3">
				<CardBody>
					<CardTitle tag="h5">{postTitle}</CardTitle>
					<CardText>{postContent}</CardText>
					<p className="text-left text-muted mb-0">{postCategory}</p>
					{ //si createDate no es nulo es porque va a aparecer la fecha de lo contrario no va imprimir nada
						createDate &&	<p className="text-right text-muted mb-0">{createDate}</p>
					}
					<Button onClick= {deleteHandler} data-post-key= { postKey }>Borrar post</Button>
				</CardBody>
			</Card>
		</Col>
	);
}

export default PostCard
