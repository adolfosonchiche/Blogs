//componente que solo va a mostrar los posts
//es un componente tonto porque no hace nada mas que solo mostrar

import {
    Col, Card, CardBody, CardTitle, CardText
} from "reactstrap"

function PostCard( props ) {

    const { postTitle, postContent, postCategory } = props.postData

	return (
		<Col xs="12" md="6">
			<Card className="mb-3">
				<CardBody>
					<CardTitle tag="h5">{postTitle}</CardTitle>
					<CardText>{postContent}</CardText>
					<p className="text-left text-muted mb-0">{postCategory}</p>
				</CardBody>
			</Card>
		</Col>
	);
}

export default PostCard
