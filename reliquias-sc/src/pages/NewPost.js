//creamos un nueva pagina para crear un nuevo publicacion

//importamos hooks useState y hooks useEfffects para los estados
import React, {useState, useEffect} from "react"
//importamos firebase
import firebase from "../lib/firebase"

//importamos los componentes que vamos a utilizar para crear la vista
import { Container, Row, Col, Label, Input, Form, FormGroup, Button } from 'reactstrap';

function NewPost() {

    //creamos los estados que necesitamos
    const [postTitle, setPostTitle] = useState(" ")
    const [postContent, setPostContent] = useState("")
    const [postCategory, setPostCategory] = useState("Arte")

    const [postCollection, setPostCollection] = useState({})
    //metodos para los eventos que captura el texto que ingresa el usuario en los imputs
    const handleTitle = event => {
        let title = event.target.value
        console.log(title)
        setPostTitle(title)
    }

    const handleContent = event => {
        let content = event.target.value
        console.log(content)
        setPostContent(content)
    }

    const handleCategory = event => {
        let category = event.target.value
        console.log(category)
        setPostCategory(category)
    }

    //metodo para el boton guardar
    const savePost = () => {
        const database = firebase.database()
        const postRef = database.ref("/post")
        let postObject = {postTitle, postContent, postCategory}
        console.log(postObject)

        postRef.push( postObject )
    }

    //useEffect permite hacer algo cuando el sistema se carga
    //recibe como parametro un callback y un arrays que indica el numero de veces que va a funcionar
    useEffect( () => {
        console.log("componente montado")
        const database = firebase.database()
        const postRef = database.ref("/post")

         //on es un metodo que sirve para escuchar el valor de la referencias del la base de datos de firebase
        postRef.on("value", snapshot => {
            console.log(snapshot.val())
            setPostCollection( snapshot.val() )

        })
    }, []) 

	return (
		<Container>
			<Row>
				<Col xs="12">
					<h1>Crear un nuevo post</h1>
					<Form className="bg-dark text-white p-3 mt-3 border rounder">
						<FormGroup>
							<Label>titulo:</Label>
							<Input type="text" onChange= {handleTitle} />
						</FormGroup>
						<FormGroup>
							<Label>Descripcion</Label>
							<Input type="textarea" onChange= {handleContent} />
						</FormGroup>
						<FormGroup>
							<Label>Categoria</Label>
							<Input type="select" onChange={handleCategory} >
								<option>Arte</option>
								<option>Musica</option>
								<option>Tecnologia</option>
								<option>Educacion</option>
							</Input>
						</FormGroup>
                        <Button color="primary" type="button" onClick= {savePost}>Guardar post</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
}

export default NewPost;
